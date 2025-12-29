
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface StickyCTAProps {
  onCTA: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onCTA }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-40 md:hidden animate-slide-up shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
      <button 
        onClick={onCTA}
        className="w-full bg-[#fe4815] text-white py-4 px-6 rounded-lg font-bold text-center text-sm shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        Appliquer le rabais & Vérifier la disponibilité
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default StickyCTA;
