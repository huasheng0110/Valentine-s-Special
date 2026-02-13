import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FileCardProps {
  index: number;
  title: string;
  children: React.ReactNode;
}

export const FileCard: React.FC<FileCardProps> = ({ index, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`transition-all duration-500 mb-6 ${isOpen ? 'scale-[1.02]' : ''}`}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-white p-5 rounded-3xl hand-shadow cursor-pointer flex items-center justify-between border-2 border-primary/5 hover:border-primary/20 transition-all ${index % 2 === 0 ? 'rotate-[0.5deg]' : 'rotate-[-0.5deg]'}`}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-lg font-bold">
            📄{index}
          </div>
          <h3 className="font-hand text-lg text-foreground/80">{title}</h3>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="mt-4 px-2 overflow-hidden">
          {children}
        </div>
      )}
    </div>
  );
};
