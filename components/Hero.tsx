
import React from 'react';
import { Star, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

interface HeroProps {
  onCTA: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTA }) => {
  return (
    <section className="bg-gradient-to-b from-[#f5f5f3] to-white pt-10 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Mobile Image Only */}
        <div className="md:hidden">
          <img 
            src="https://assets.lightfunnels.com/cdn-cgi/image/width=1080,quality=80,format=auto/https://assets.lightfunnels.com/account-53674/images_library/4ccd3e94-d8ea-4e22-ae71-e9cfab0e6db9.Bodysculpt Main Image.png" 
            alt="BodySculpt Massager" 
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#ffc107] text-[#191e2a] px-3 py-1 rounded font-bold text-xs uppercase flex items-center gap-1 shadow-sm">
              <Zap className="w-3 h-3 fill-current" /> OFFRE LIMITÉE
            </div>
            <div className="flex items-center gap-1 text-[#ffc107]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              <span className="text-[#191e2a] text-xs font-semibold ml-1">Plus de 12 500 clients satisfaits</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            BodySculpt | Appareil de massage sculptant pour lisser, raffermir et redessiner votre silhouette
          </h1>

          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            Améliore visiblement l’apparence de votre peau en seulement quelques minutes par jour.
          </p>

          <div className="space-y-4 bg-[#f4f5f7] p-6 rounded-xl">
            <FeatureItem text="Vibrations ciblées → Aide à réduire visiblement la cellulite et lisser les zones tenaces" />
            <FeatureItem text="Pads interchangeables → Raffermit l’apparence de la peau sur le ventre, les cuisses, les bras…" />
            <FeatureItem text="Routine rapide → 15 minutes, 3 à 4 fois par semaine suffisent" />
            <FeatureItem text="Utilisable chez vous → Sans rendez-vous, sans douleur, sans contraintes" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 line-through text-xl font-bold">1 380 000 GNF</span>
              <span className="text-[#fe4815] text-3xl font-black">690 000 GNF</span>
            </div>
            <button 
              onClick={onCTA}
              className="bg-[#fe4815] text-white py-5 px-8 rounded-lg font-bold text-center text-lg md:text-xl shadow-lg hover:bg-[#e43d10] transition-all flex items-center justify-center gap-2 group transform active:scale-95"
            >
              OBTENEZ 50 % DE RÉDUCTION AUJOURD'HUI
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social Proof Snippet */}
          <div className="flex items-start gap-4 p-4 border border-[#acb9d2] rounded-xl bg-white shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100" 
              className="w-12 h-12 rounded-full object-cover border-2 border-[#fe4815]" 
              alt="Fatoumata"
            />
            <div>
              <p className="font-bold text-sm text-[#191e2a]">Fatoumata Camara <span className="text-[#42a97d] text-[10px] ml-1">✓ Vérifiée</span></p>
              <p className="text-xs text-gray-600 leading-relaxed italic">
                « Ma peau est plus lisse et mon ventre est devenu plus ferme depuis que j'utilise BodySculpt ici à Ratoma. »
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block">
          <img 
            src="https://assets.lightfunnels.com/cdn-cgi/image/width=1080,quality=80,format=auto/https://assets.lightfunnels.com/account-53674/images_library/4ccd3e94-d8ea-4e22-ae71-e9cfab0e6db9.Bodysculpt Main Image.png" 
            alt="BodySculpt Massager" 
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 className="w-5 h-5 text-[#fe4815] shrink-0 mt-0.5" />
    <span className="text-sm md:text-base font-semibold">{text}</span>
  </div>
);

export default Hero;
