import React, { useRef, useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Edit3, Upload, Loader2, Link as LinkIcon, Check } from 'lucide-react';

interface EditableImageProps {
  imageKey: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
}

const EditableImage: React.FC<EditableImageProps> = ({
  imageKey,
  defaultSrc,
  alt,
  className = "",
  containerClassName = "",
  loading
}) => {
  const { isAdmin, images, uploadImage, setImageUrl, isFirebaseReady } = useAdmin();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkInput, setLinkInput] = useState('');

  // Use the overridden image if it exists in Firebase, otherwise default
  const currentSrc = images[imageKey] || defaultSrc;

  // Helper to compress image and return a Blob for uploading
  const compressImageToBlob = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1600; // Larger max width for Cloud Storage
          const scaleSize = MAX_WIDTH / img.width;

          canvas.width = scaleSize < 1 ? MAX_WIDTH : img.width;
          canvas.height = scaleSize < 1 ? img.height * scaleSize : img.height;

          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Export as Blob (JPEG 85% quality)
          canvas.toBlob((blob) => {
            if (blob) resolve(blob);
            else reject(new Error("Canvas to Blob failed"));
          }, 'image/jpeg', 0.85);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isFirebaseReady) {
      alert("Firebase is not configured yet. You can use the 'Paste Link' option instead!");
      return;
    }

    setIsProcessing(true);

    try {
      const compressedBlob = await compressImageToBlob(file);
      await uploadImage(imageKey, compressedBlob);
    } catch (error) {
      console.error("Error processing image", error);
      alert("Failed to upload image.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleLinkSubmit = () => {
    if (linkInput.trim()) {
      setImageUrl(imageKey, linkInput.trim());
      setShowLinkInput(false);
      setLinkInput('');
    }
  };

  return (
    <div
      className={`relative group ${containerClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        if (!linkInput) setShowLinkInput(false);
      }}
    >
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        loading={loading}
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/800x600?text=Image+Not+Found";
        }}
      />

      {/* Admin Overlay */}
      {isAdmin && (
        <div className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center p-4 ${isHovering || showLinkInput ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

          {!showLinkInput ? (
            <div className="flex flex-col gap-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isProcessing}
                className="bg-luxury-gold text-black px-4 py-2 rounded-lg font-bold flex items-center justify-center gap-2 transform hover:scale-105 transition-all shadow-lg w-40 text-sm"
              >
                {isProcessing ? <Loader2 className="animate-spin" size={16} /> : <Upload size={16} />}
                Upload File
              </button>

              <button
                onClick={() => setShowLinkInput(true)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold flex items-center justify-center gap-2 transform hover:scale-105 transition-all shadow-lg border border-gray-600 w-40 text-sm"
              >
                <LinkIcon size={16} />
                Paste Link
              </button>
            </div>
          ) : (
            <div className="w-full max-w-xs flex flex-col gap-2">
              <p className="text-white text-xs font-bold mb-1 uppercase tracking-wider">Paste Image URL</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={linkInput}
                  onChange={(e) => setLinkInput(e.target.value)}
                  placeholder="https://..."
                  className="flex-1 bg-white text-black px-2 py-1 rounded text-sm"
                  autoFocus
                />
                <button
                  onClick={handleLinkSubmit}
                  className="bg-green-500 text-white p-1 rounded hover:bg-green-600"
                >
                  <Check size={18} />
                </button>
              </div>
              <button
                onClick={() => setShowLinkInput(false)}
                className="text-gray-400 text-xs hover:text-white underline text-center"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}

      {/* Admin Badge */}
      {isAdmin && !isHovering && !showLinkInput && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowLinkInput(true);
          }}
          className="absolute top-2 right-2 bg-luxury-gold text-black p-2 rounded-full shadow-lg z-10 scale-75 cursor-pointer hover:scale-90 transition-transform"
        >
          <Edit3 size={14} />
        </button>
      )}
    </div>
  );
};

export default EditableImage;