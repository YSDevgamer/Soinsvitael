
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ComparisonProps {
  onCTA: () => void;
}

const Comparison: React.FC<ComparisonProps> = ({ onCTA }) => {
  const comparisons = [
    { feature: "Agit mécaniquement sur la peau", bodySculpt: true, other: false },
    { feature: "Stimule la circulation", bodySculpt: true, other: false },
    { feature: "Résultats visibles plus rapides", bodySculpt: true, other: false },
    { feature: "Utilisation simple et ciblée", bodySculpt: true, other: false },
    { feature: "Effet raffermissant perçu", bodySculpt: true, other: false },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white" id="pricing">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">Pourquoi BodySculpt surpasse les crèmes et rouleaux ?</h2>
        <p className="text-gray-600 mt-6 text-lg">
          Fini les complexes et les tenues inconfortables. Avec BodySculpt, votre silhouette retrouve confiance et fermeté.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white border border-[#acb9d2] rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-3 bg-[#f4f5f3] py-4 px-6 border-b border-[#acb9d2] text-center font-bold uppercase text-sm tracking-widest">
          <div className="text-left">Critères</div>
          <div className="text-[#fe4815] bg-[#fe4815]/10 rounded-lg py-2">BodySculpt</div>
          <div className="py-2">Autre</div>
        </div>

        {comparisons.map((item, idx) => (
          <div key={idx} className={`grid grid-cols-3 py-6 px-6 items-center ${idx !== comparisons.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="text-sm md:text-base font-semibold text-gray-800">{item.feature}</div>
            <div className="flex justify-center">
              <CheckCircle2 className="w-6 h-6 text-[#fe4815]" />
            </div>
            <div className="flex justify-center">
              <XCircle className="w-6 h-6 text-gray-300" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-400 line-through text-2xl font-bold">1 380 000 GNF</span>
            <span className="text-[#fe4815] text-4xl font-black">690 000 GNF</span>
          </div>
          <div className="bg-[#fe4815] text-white px-4 py-1 rounded text-xs font-bold mb-8 animate-bounce">
            ÉCONOMISEZ 50% AUJOURD'HUI
          </div>
          <button 
            onClick={onCTA}
            className="bg-[#fe4815] text-white py-5 px-12 rounded-lg font-bold text-2xl shadow-xl hover:scale-105 transition-transform"
          >
            PROFITER DE L'OFFRE
          </button>
          <p className="mt-4 text-sm text-gray-500 font-medium flex items-center gap-2 justify-center">
            <CheckCircle2 className="w-4 h-4 text-green-500" /> Garantie de 90 jours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
