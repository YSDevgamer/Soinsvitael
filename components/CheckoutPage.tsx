
import React, { useState } from 'react';
import { Star, ShieldCheck, ShoppingCart, ChevronLeft, Truck, Minus, Plus, Loader2 } from 'lucide-react';

interface CheckoutPageProps {
  onBack: () => void;
  onSuccess: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ onBack, onSuccess }) => {
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    address: '',
    phone: ''
  });

  const pricePerUnit = 690000;
  const totalCharge = pricePerUnit * quantity;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.fullName || !formData.city || !formData.phone) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbys4aeyaoFrTc_jD_yVmOTgbLmhqMLjEqoDTJkJZN76RE0AbNbQHpltximv5Ns1ozLP/exec';
    
    const data = new FormData();
    data.append('Order date', new Date().toLocaleString('fr-FR'));
    data.append('SKU', 'BodySculpt-Premium');
    data.append('Product variant', 'Standard');
    data.append('Total quantity', quantity.toString());
    data.append('Full name', formData.fullName);
    data.append('Variant price', pricePerUnit.toString());
    data.append('Total charge', totalCharge.toString());
    data.append('Total shipping fees', '0');
    data.append('Phone', formData.phone);
    data.append('City', formData.city);
    data.append('Address', formData.address);

    try {
      await fetch(scriptURL, { 
        method: 'POST', 
        body: data,
        mode: 'no-cors'
      });
      onSuccess();
    } catch (error) {
      console.error('Error!', error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f4f5f3] min-h-screen font-['Cabin']">
      <div className="bg-[#191e2a] text-white py-2 px-4 flex items-center justify-center gap-2 text-sm font-semibold">
        <p className="text-center">🎁 ATTENTION : Stock Limité en Guinée. Dernières pièces disponibles.</p>
      </div>

      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-[#fe4815] mb-6 font-semibold transition-colors"
        >
          <ChevronLeft className="w-5 h-5" /> Retour
        </button>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <section className="bg-white p-6 md:p-8 rounded-2xl border border-[#acb9d2] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fe4815] text-white flex items-center justify-center font-bold">1</div>
                <h2 className="text-xl font-bold uppercase tracking-tight">ÉTAPE 1 : VOTRE SÉLECTION</h2>
              </div>
              
              <div className="p-4 bg-[#f4f5f7] rounded-xl border-2 border-[#fe4815] relative">
                <div className="absolute -top-3 right-4 bg-[#fe4815] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">OFFRE SPÉCIALE</div>
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div className="flex gap-4 items-center">
                    <img 
                      src="https://assets.lightfunnels.com/cdn-cgi/image/width=100,quality=80,format=auto/https://assets.lightfunnels.com/account-53674/images_library/4ccd3e94-d8ea-4e22-ae71-e9cfab0e6db9.Bodysculpt Main Image.png" 
                      className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                      alt="Product"
                    />
                    <div>
                      <p className="font-bold text-lg text-[#191e2a]">BodySculpt Pro</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          onClick={() => setQuantity(q => Math.max(1, q - 1))}
                          className="w-8 h-8 flex items-center justify-center bg-[#fe4815] text-white rounded hover:bg-[#e43d10]"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-bold text-lg">{quantity}</span>
                        <button 
                          onClick={() => setQuantity(q => q + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-[#fe4815] text-white rounded hover:bg-[#e43d10]"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#fe4815] text-2xl font-black">{totalCharge.toLocaleString()} GNF</p>
                    <p className="text-xs text-gray-400 font-bold uppercase">Paiement Cash</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 md:p-8 rounded-2xl border border-[#acb9d2] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fe4815] text-white flex items-center justify-center font-bold">2</div>
                <h2 className="text-xl font-bold uppercase tracking-tight">ÉTAPE 2 : INFORMATIONS DE LIVRAISON</h2>
              </div>
              
              <div className="grid gap-5">
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Saisir votre nom complet" 
                  className="w-full p-4 bg-[#fbfbfb] border border-[#d6dce9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe4815]/20 focus:border-[#fe4815] transition-all text-lg"
                />
                <div className="grid sm:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Saisir votre ville" 
                    className="w-full p-4 bg-[#fbfbfb] border border-[#d6dce9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe4815]/20 focus:border-[#fe4815] transition-all text-lg"
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Saisir votre Téléphone" 
                    className="w-full p-4 bg-[#fbfbfb] border border-[#d6dce9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe4815]/20 focus:border-[#fe4815] transition-all text-lg font-mono"
                  />
                </div>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Quartier / Adresse exacte" 
                  className="w-full p-4 bg-[#fbfbfb] border border-[#d6dce9] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe4815]/20 focus:border-[#fe4815] transition-all text-lg"
                />
              </div>
            </section>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <section className="bg-white p-6 md:p-8 rounded-2xl border border-[#acb9d2] shadow-sm">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <ShoppingCart className="w-6 h-6 text-[#fe4815]" />
                  <h2 className="text-xl font-bold uppercase tracking-tight text-[#191e2a]">Votre Commande</h2>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-gray-500 font-medium">Prix (x{quantity})</span>
                    <span className="font-bold text-[#191e2a]">{totalCharge.toLocaleString()} GNF</span>
                  </div>
                  <div className="flex justify-between items-center text-base text-[#42a97d] font-bold">
                    <span>Livraison</span>
                    <span className="uppercase">Gratuite</span>
                  </div>
                  <div className="flex justify-between items-center text-2xl font-black pt-4 border-t border-gray-100">
                    <span className="text-[#191e2a]">TOTAL</span>
                    <span className="text-[#fe4815]">{totalCharge.toLocaleString()} GNF</span>
                  </div>
                </div>

                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#fe4815] text-white py-5 px-8 rounded-xl font-black text-xl shadow-xl hover:bg-[#e43d10] transition-all transform active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-6 h-6 animate-spin" /> Traitement...</>
                  ) : (
                    'Confirmer ma commande'
                  )}
                </button>

                <div className="mt-6 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
                    <ShieldCheck className="w-5 h-5 text-[#42a97d]" />
                    PAIEMENT SÉCURISÉ À LA LIVRAISON
                  </div>
                </div>
              </section>

              <div className="bg-[#fff9e6] border border-[#ffecb3] p-6 rounded-2xl flex gap-4 items-center">
                <Truck className="w-10 h-10 text-[#fe4815] shrink-0" />
                <div>
                  <h4 className="font-bold text-[#1d1f24] text-sm uppercase">Livraison Prioritaire</h4>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    Livraison directe à votre domicile ou bureau en Guinée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-[#191e2a] text-white/20 text-[10px] py-6 text-center mt-12">
        <p>© 2024 SoinsVital. Votre santé est notre priorité.</p>
      </footer>
    </div>
  );
};

export default CheckoutPage;
