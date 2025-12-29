
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    question: "Est-ce que le poids de l’appareil aide vraiment à éliminer la graisse ?",
    answer: "Oui. Le poids exerce une pression constante qui pénètre profondément dans les tissus pour aider à casser la graisse stockée et relancer la circulation."
  },
  {
    question: "Où peut-on l’utiliser pour de bons résultats ?",
    answer: "Sur le ventre, les cuisses, les bras, les hanches et les fesses — toutes les zones où la graisse s’accumule souvent."
  },
  {
    question: "BodySculpt ou crème minceur – quelle différence ?",
    answer: "Les crèmes agissent en surface. BodySculpt utilise son poids naturel pour appuyer en profondeur, stimuler la circulation et déloger la graisse résistante."
  },
  {
    question: "Quand voit-on les premiers résultats ?",
    answer: "En général, après 3 à 6 semaines d'utilisation régulière (10 à 15 minutes par zone, 3 à 5 fois par semaine)."
  },
  {
    question: "Est-ce que la livraison est gratuite ?",
    answer: "Oui, la livraison est entièrement gratuite dans tout le royaume. Les délais sont de 1 à 2 jours ouvrables après expédition."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#f4f5f3]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Questions fréquemment posées...</h2>
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-[#acb9d2] rounded-xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-bold transition-colors hover:bg-gray-50"
      >
        <span>{item.question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-[#fe4815]" /> : <ChevronDown className="w-5 h-5 text-[#fe4815]" />}
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-100 text-gray-600 leading-relaxed bg-white">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
