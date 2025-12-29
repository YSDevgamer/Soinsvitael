
import React from 'react';
import { CheckCircle2, Package, PhoneCall, Truck, ChevronLeft, Heart, ShieldCheck } from 'lucide-react';

interface ThankYouPageProps {
  onHome: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onHome }) => {
  return (
    <div className="bg-[#f4f5f3] min-h-screen py-12 px-4 flex flex-col items-center justify-center font-['Cabin']">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-[#acb9d2] relative">
          {/* Top accent line - Home page primary color */}
          <div className="h-2 bg-[#fe4815] w-full"></div>

          <div className="p-8 md:p-12">
            {/* Header section */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#fff1ed] rounded-full mb-6 relative">
                <CheckCircle2 className="w-14 h-14 text-[#fe4815]" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#ffc107] rounded-full flex items-center justify-center shadow-lg">
                   <Heart className="w-3 h-3 text-[#191e2a] fill-current" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-[#191e2a] mb-3">Merci ! Commande Reçue.</h1>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Votre commande <span className="text-[#fe4815] font-bold">SoinsVital</span> est en cours de validation.
              </p>
            </div>

            {/* Steps */}
            <div className="grid gap-6">
              <div className="flex gap-5 items-start p-5 bg-[#fbfbfb] rounded-2xl border border-gray-100 transition-transform hover:scale-[1.01]">
                <div className="bg-white shadow-md p-3 rounded-xl border border-gray-50 shrink-0">
                  <PhoneCall className="w-6 h-6 text-[#fe4815]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#191e2a] text-lg">On vous appelle !</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Un de nos agents SoinsVital va vous appeler pour confirmer votre adresse et lancer l'expédition.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start p-5 bg-[#fbfbfb] rounded-2xl border border-gray-100 transition-transform hover:scale-[1.01]">
                <div className="bg-white shadow-md p-3 rounded-xl border border-gray-50 shrink-0">
                  <Truck className="w-6 h-6 text-[#ffc107]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#191e2a] text-lg">Livraison en Guinée</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Expédition rapide sous <span className="font-bold">24/48h</span>. Restez joignable sur votre téléphone.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start p-5 bg-[#fbfbfb] rounded-2xl border border-gray-100 transition-transform hover:scale-[1.01]">
                <div className="bg-white shadow-md p-3 rounded-xl border border-gray-50 shrink-0">
                  <Package className="w-6 h-6 text-[#42a97d]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#191e2a] text-lg">Cash à la Livraison</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Le paiement se fait uniquement en espèces à la remise du colis par notre livreur.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-12 space-y-4">
              <button 
                onClick={onHome}
                className="w-full bg-[#191e2a] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-black transition-all shadow-lg active:scale-95 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                RETOURNER À L'ACCUEIL
              </button>
              
              <div className="flex justify-center items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest pt-4">
                 <ShieldCheck className="w-4 h-4 text-[#42a97d]" />
                 Transaction 100% Sécurisée
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center opacity-30 grayscale invert">
          <img 
            src="https://soinsvital.com/cdn/shop/files/White_PNG_410x.png?v=1699270447" 
            alt="SoinsVital" 
            className="h-7 mx-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://neuexa.com/cdn/shop/files/White_PNG_410x.png?v=1699270447';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
