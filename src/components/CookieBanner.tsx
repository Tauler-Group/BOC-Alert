import React, { useState } from 'react';
import { Cookie, Settings, X, Check } from 'lucide-react';
import { CookieConsent } from '../hooks/useCookieConsent';

interface CookieBannerProps {
  onAcceptAll: () => void;
  onAcceptNecessary: () => void;
  onAcceptCustom: (consent: CookieConsent) => void;
  onClose: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onAcceptAll,
  onAcceptNecessary,
  onAcceptCustom,
  onClose,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [customConsent, setCustomConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const handleCustomConsentChange = (type: keyof CookieConsent, value: boolean) => {
    if (type === 'necessary') return; // Las cookies necesarias no se pueden desactivar
    setCustomConsent(prev => ({ ...prev, [type]: value }));
  };

  const handleSaveCustom = () => {
    onAcceptCustom(customConsent);
  };

  if (showSettings) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Settings className="h-6 w-6 text-[#0066CC]" />
                <h2 className="text-xl font-bold text-[#0066CC]">Configuración de Cookies</h2>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-gray-600">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. 
              Puedes configurar qué tipos de cookies deseas permitir.
            </p>

            {/* Cookies Necesarias */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Cookies Necesarias</h3>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Siempre activas
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Estas cookies son esenciales para que el sitio web funcione correctamente. 
                No se pueden desactivar.
              </p>
            </div>

            {/* Cookies de Análisis */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Cookies de Análisis</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customConsent.analytics}
                    onChange={(e) => handleCustomConsentChange('analytics', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FFD700]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066CC]"></div>
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web 
                recopilando información de forma anónima.
              </p>
            </div>

            {/* Cookies de Marketing */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Cookies de Marketing</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customConsent.marketing}
                    onChange={(e) => handleCustomConsentChange('marketing', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FFD700]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066CC]"></div>
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Se utilizan para mostrar anuncios personalizados y medir la efectividad 
                de nuestras campañas publicitarias.
              </p>
            </div>

            {/* Cookies de Preferencias */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Cookies de Preferencias</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customConsent.preferences}
                    onChange={(e) => handleCustomConsentChange('preferences', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FFD700]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066CC]"></div>
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Permiten recordar tus preferencias y configuraciones para 
                personalizar tu experiencia en el sitio.
              </p>
            </div>
          </div>

          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onAcceptAll}
                className="flex-1 bg-[#0066CC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004499] transition-colors flex items-center justify-center space-x-2"
              >
                <Check className="h-4 w-4" />
                <span>Aceptar Todas</span>
              </button>
              <button
                onClick={handleSaveCustom}
                className="flex-1 bg-[#FFD700] text-[#0066CC] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFC700] transition-colors"
              >
                Guardar Preferencias
              </button>
              <button
                onClick={onAcceptNecessary}
                className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Solo Necesarias
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-start space-x-4 flex-1">
            <div className="bg-[#FFD700] p-2 rounded-lg flex-shrink-0">
              <Cookie className="h-6 w-6 text-[#0066CC]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-2">Utilizamos cookies</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad 
                relacionada con sus preferencias. Si continúa navegando, consideramos que acepta su uso. 
                Puede obtener más información en nuestra{' '}
                <a href="/politica-cookies" className="text-[#0066CC] hover:underline font-medium">
                  Política de Cookies
                </a>{' '}
                y{' '}
                <a href="/politica-privacidad" className="text-[#0066CC] hover:underline font-medium">
                  Política de Privacidad
                </a>.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => setShowSettings(true)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Settings className="h-4 w-4" />
              <span>Configurar</span>
            </button>
            <button
              onClick={onAcceptNecessary}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Solo Necesarias
            </button>
            <button
              onClick={onAcceptAll}
              className="px-6 py-2 bg-[#0066CC] text-white rounded-lg hover:bg-[#004499] transition-colors font-semibold"
            >
              Aceptar Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 