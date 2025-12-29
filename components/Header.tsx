
import React from 'react';
import { Flame, Menu, X } from 'lucide-react';

interface HeaderProps {
  onCTA: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCTA }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-[#191e2a] text-white py-2 px-4 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold">
        <Flame className="w-4 h-4 text-[#ffc107] animate-pulse" fill="currentColor" />
        <p className="text-center">Livraison GRATUITE + 50% de réduction aujourd'hui UNIQUEMENT !</p>
      </div>

      {/* Navigation */}
      <nav className="bg-[#2b274e] py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center cursor-pointer" onClick={onCTA}>
          <img 
            src="https://soinsvital.com/cdn/shop/files/White_PNG_410x.png?v=1699270447" 
            alt="SoinsVital Logo" 
            className="h-8 md:h-10"
            onError={(e) => {
              // Fallback if the domain doesn't exist yet for the specific asset
              (e.target as HTMLImageElement).src = 'https://neuexa.com/cdn/shop/files/White_PNG_410x.png?v=1699270447';
            }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-white/90 font-semibold uppercase text-sm tracking-wider">
          <button onClick={onCTA} className="hover:text-white transition-colors uppercase">Accueil</button>
          <button onClick={onCTA} className="hover:text-white transition-colors uppercase">Nos Best-Sellers</button>
          <button onClick={onCTA} className="hover:text-white transition-colors uppercase">Nous contacter</button>
        </div>

        {/* Mobile Burger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#2b274e] flex flex-col items-center py-6 gap-4 text-white font-semibold uppercase md:hidden shadow-xl z-[60]">
            <button onClick={() => { onCTA(); setIsOpen(false); }}>Accueil</button>
            <button onClick={() => { onCTA(); setIsOpen(false); }}>Nos Best-Sellers</button>
            <button onClick={() => { onCTA(); setIsOpen(false); }}>Nous contacter</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
