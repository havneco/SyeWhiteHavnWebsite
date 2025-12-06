import React from 'react';
import { CHART_DATA } from '../constants';
import { useTheme } from '../context/ThemeContext';

const StatsChart: React.FC = () => {
  const { theme } = useTheme();
  const maxValue = Math.max(...CHART_DATA.map(d => d.value));

  const getBarColor = () => {
    return theme === 'dark' ? '#D4AF37' : '#059669'; // Gold or Jade
  };

  return (
    <div className="w-full h-auto glass-panel p-8 rounded-2xl">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8 text-center uppercase tracking-widest">Impact Metrics</h3>
      
      <div className="space-y-8">
        {CHART_DATA.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 dark:text-gray-300 font-medium">{item.name}</span>
              <span className="text-gray-900 dark:text-white font-bold">{item.value}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_currentColor]"
                style={{ 
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: getBarColor(),
                  color: getBarColor() // for shadow
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 flex justify-between text-xs text-gray-400 dark:text-gray-500 font-mono">
        <span>VERIFIED_DATA</span>
        <span>SYNC: {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default StatsChart;