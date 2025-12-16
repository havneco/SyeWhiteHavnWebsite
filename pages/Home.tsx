
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import AppsLibrary from '../components/AppsLibrary';
import Contact from '../components/Contact';
import EditableImage from '../components/EditableImage';
import { SITE_IMAGES } from '../constants';

import MediaKit from '../components/MediaKit';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />

      {/* Full Width Visual Divider */}
      <section className="w-full h-64 md:h-96 relative overflow-hidden group">
        <div className="absolute inset-0 bg-luxury-black/10 dark:bg-luxury-black/30 z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
        <EditableImage
          imageKey="section_divider"
          defaultSrc={SITE_IMAGES.section_divider}
          alt="Montana Landscape"
          className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 transform group-hover:scale-105"
          containerClassName="w-full h-full"
        />
      </section>

      <Expertise />
      <Projects />
      <AppsLibrary />
      <MediaKit />
      <Contact />
    </>
  );
};

export default Home;
