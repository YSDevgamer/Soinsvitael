
import React from 'react';
import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: '3',
    name: 'Fatoumata Camara',
    location: 'Ratoma, Conakry',
    rating: 5,
    content: "Ma 'bouée' a littéralement disparu. C'est super relaxant et j'adore l'utiliser ! Je le recommande à toutes mes amies ici à Conakry.",
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800',
    date: 'Il y a 10 jours',
    likes: 164
  },
  {
    id: '1',
    name: 'Mariama Diallo',
    location: 'Dixinn, Conakry',
    rating: 5,
    content: "Ma zone cible, c'est le ventre et surtout le bas du ventre après ma grossesse. Et franchement, je vois une vraie amélioration en 2 semaines seulement.",
    image: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&q=80&w=800',
    date: 'Il y a 8 jours',
    likes: 243
  },
  {
    id: '2',
    name: 'Hadja Sylla',
    location: 'Kaloum, Conakry',
    rating: 5,
    content: "J'ai commencé à utiliser BodySculpt vers le 23 février. J'ai déjà vu des résultats ! C'est devenu mon moment de détente préféré le soir.",
    image: 'https://www.fao.org/images/newsroomlibraries/stories-images/a36bf6c08498609d71cdcc18e3cb01e3.jpg?sfvrsn=7b5a0c7c_10',
    date: 'Il y a 3 jours',
    likes: 34
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-[#fe4815] font-bold text-sm uppercase tracking-widest bg-[#f4f5f3] px-4 py-2 rounded">Témoignages</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-6">Elles ont transformé leur silhouette</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Découvrez les avis de nos clientes en Guinée qui utilisent BodySculpt au quotidien.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="h-72 overflow-hidden">
              <img src={review.image} alt={review.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl text-[#191e2a]">{review.name}</h4>
                <div className="flex text-[#ffc107]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 gap-1 mb-4">
                <Star className="w-3 h-3 fill-[#ffc107] text-[#ffc107]" /> 
                <span className="font-medium">{review.date} • {review.location}</span>
              </div>

              <div className="flex items-center gap-2 mb-6 text-xs font-bold text-[#42a97d]">
                <ShieldCheck className="w-5 h-5" /> AVIS VÉRIFIÉ
              </div>

              <p className="text-[#191e2a] text-base leading-relaxed font-medium mb-8 flex-grow">
                "{review.content}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-6 text-xs font-black text-gray-400 uppercase tracking-widest">
                  <span className="cursor-pointer hover:text-[#fe4815] transition-colors">Aimer</span>
                  <span className="cursor-pointer hover:text-[#fe4815] transition-colors">Répondre</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#3b5998] flex items-center justify-center shadow-sm">
                    <ThumbsUp className="w-4 h-4 text-white fill-current" />
                  </div>
                  <span className="text-sm font-bold text-gray-500">{review.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
