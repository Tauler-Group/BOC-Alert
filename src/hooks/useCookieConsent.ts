import { useState, useEffect } from 'react';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent');
    if (storedConsent) {
      setConsent(JSON.parse(storedConsent));
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const fullConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setConsent(fullConsent);
    localStorage.setItem('cookie-consent', JSON.stringify(fullConsent));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const necessaryConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setConsent(necessaryConsent);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryConsent));
    setShowBanner(false);
  };

  const acceptCustom = (customConsent: CookieConsent) => {
    const finalConsent = { ...customConsent, necessary: true }; // Las necesarias siempre están activas
    setConsent(finalConsent);
    localStorage.setItem('cookie-consent', JSON.stringify(finalConsent));
    setShowBanner(false);
  };

  const resetConsent = () => {
    localStorage.removeItem('cookie-consent');
    setConsent(null);
    setShowBanner(true);
  };

  return {
    consent,
    showBanner,
    acceptAll,
    acceptNecessary,
    acceptCustom,
    resetConsent,
  };
}; 