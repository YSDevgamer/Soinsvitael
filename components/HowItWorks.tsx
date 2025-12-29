
import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

interface HowItWorksProps {
  onCTA: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onCTA }) => {
  return (
    <section className="bg-[#f4f5f3] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <span className="text-[#fe4815] font-bold text-sm uppercase tracking-widest bg-white px-4 py-2 rounded">Comment ça fonctionne ?</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-6">Comment BodySculpt agit sur ta silhouette ?</h2>
          <p className="text-lg text-gray-700 mb-8">Une technologie de massage vibratoire ciblé, facile à utiliser.</p>
          
          <div className="space-y-6">
            <StepItem number="1" title="Choisis ton pad" desc="Sculpter, raffermir ou lisser" />
            <StepItem number="2" title="Applique sur la zone" desc="Fesses, ventre, cuisses, bras…" />
            <StepItem number="3" title="Détends-toi" desc="Les vibrations 3D stimulent et lissent la peau" />
          </div>

          <button 
            onClick={onCTA}
            className="mt-12 bg-[#fe4815] text-white py-4 px-10 rounded-lg font-bold shadow-lg hover:bg-[#e43d10] transition-all flex items-center gap-2"
          >
            Vérifier la disponibilité
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-[#fe4815] rounded-3xl translate-x-4 translate-y-4 -z-10 shadow-2xl opacity-10"></div>
            <img 
              src="https://assets.lightfunnels.com/cdn-cgi/image/width=1080,quality=80,format=auto/https://assets.lightfunnels.com/account-53674/images_library/4dd7ec75-ec7f-43e7-8e21-a554934e7768.Bodysculpt Image 2.png" 
              alt="How it works" 
              className="w-full h-auto rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StepItem: React.FC<{ number: string; title: string; desc: string }> = ({ number, title, desc }) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 rounded-full bg-[#fe4815] text-white flex items-center justify-center font-bold shrink-0">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

export default HowItWorks;
