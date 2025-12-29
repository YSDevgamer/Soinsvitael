
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import CheckoutPage from './components/CheckoutPage';
import ThankYouPage from './components/ThankYouPage';

declare global {
  interface Window {
    fbq: any;
  }
}

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'checkout' | 'thank-you'>('landing');
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    if (typeof window.fbq !== 'function') return;

    if (view === 'landing') {
      window.fbq('track', 'PageView');
    } else if (view === 'thank-you') {
      window.fbq('init', '1330885041944965');
      window.fbq('track', 'Lead');
    }
  }, [view]);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 800 && view === 'landing');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const handleCTA = () => {
    setView('checkout');
    window.scrollTo(0, 0);
  };

  const handleOrderSuccess = () => {
    setView('thank-you');
    window.scrollTo(0, 0);
  };

  if (view === 'thank-you') {
    return <ThankYouPage onHome={() => setView('landing')} />;
  }

  if (view === 'checkout') {
    return <CheckoutPage onBack={() => setView('landing')} onSuccess={handleOrderSuccess} />;
  }

  return (
    <div className="relative min-h-screen">
      <Header onCTA={handleCTA} />
      <main>
        <Hero onCTA={handleCTA} />
        <TrustBanner />
        <SocialProof />
        <HowItWorks onCTA={handleCTA} />
        <Comparison onCTA={handleCTA} />
        <FAQ />
      </main>
      <Footer />
      {showSticky && <StickyCTA onCTA={handleCTA} />}
    </div>
  );
};

export default App;
