import React from 'react';
import { PROOF_POINTS } from '../constants';

const ProofPoints: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#080808]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Receipts
          </h2>
        </div>

        {/* Table */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    What
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Number
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Context
                  </th>
                </tr>
              </thead>
              <tbody>
                {PROOF_POINTS.map((point, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-100 dark:border-white/5 last:border-0 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-5 text-gray-900 dark:text-white font-medium">
                      {point.what}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="text-2xl font-bold text-luxury-jade dark:text-luxury-gold">
                        {point.number}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right text-gray-500 dark:text-gray-400 text-sm">
                      {point.context}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProofPoints;
