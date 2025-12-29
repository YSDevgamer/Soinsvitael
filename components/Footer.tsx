
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191e2a] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
        <div className="space-y-6">
          <img 
            src="https://soinsvital.com/cdn/shop/files/White_PNG_410x.png?v=1699270447" 
            alt="SoinsVital" 
            className="h-10"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://neuexa.com/cdn/shop/files/White_PNG_410x.png?v=1699270447';
            }}
          />
          <p className="text-white/60 text-sm leading-relaxed">
            Votre allié minceur quotidien pour une silhouette redessinée et une peau raffermie.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6">À propos</h4>
          <div className="w-12 h-1 bg-[#fe4815] mb-6"></div>
          <ul className="space-y-4 text-white/70 text-sm font-medium">
            <li><a href="https://soinsvital.com/pages/politique-de-remboursement" className="hover:text-white transition-colors">Politique de remboursement</a></li>
            <li><a href="https://soinsvital.com/pages/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
            <li><a href="https://soinsvital.com/pages/conditions-dutilisation" className="hover:text-white transition-colors">Conditions d'utilisation</a></li>
            <li><a href="https://soinsvital.com/pages/contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6">SUPPORT CLIENT</h4>
          <div className="w-12 h-1 bg-[#fe4815] mb-6"></div>
          <p className="text-white/70 text-sm leading-relaxed">
            Notre service clientèle est à votre disposition du lundi au vendredi de 9h00 à 18h00.<br /><br />
            <span className="text-white font-bold">+212 6 61 58 41 58</span>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h5 className="font-bold text-sm uppercase tracking-widest mb-4">Newsletter</h5>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/10 border border-white/20 rounded px-4 py-2 w-full text-sm focus:outline-none focus:border-[#fe4815]"
              />
              <button className="bg-[#fe4815] px-4 py-2 rounded font-bold text-xs">OK</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs">
        <p>© 2024 SoinsVital. Tous droits réservés.</p>
        <div className="flex gap-4">
          <img src="https://assets.lightfunnels.com/account-1/images_library/d7c6e78f-907f-4adc-8878-afe9485e6a2e.trust-badge-preview 5.png" className="h-6 opacity-30" alt="Secure Payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
