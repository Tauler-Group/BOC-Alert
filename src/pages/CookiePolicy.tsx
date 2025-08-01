import React from 'react';
import { Cookie, ArrowLeft, Info, Settings, BarChart3, Target } from 'lucide-react';

interface CookiePolicyProps {
  onBack?: () => void;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-[#0066CC] hover:text-[#004499] mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver</span>
          </button>
        )}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#FFD700] text-[#0066CC] p-8">
            <div className="flex items-center space-x-4">
              <Cookie className="h-8 w-8" />
              <div>
                <h1 className="text-3xl font-bold">Política de Cookies</h1>
                <p className="text-[#004499] mt-2">BOC Alert - Tauler Group Ventures S.L.</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">¿Qué son las cookies?</h2>
              <p className="text-gray-700 mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita 
                un sitio web. Estas cookies nos permiten reconocer su dispositivo y recordar información 
                sobre su visita, como sus preferencias de idioma y otras configuraciones.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="h-6 w-6 text-[#0066CC] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0066CC] mb-2">¿Sabías que...?</h3>
                    <p className="text-gray-700 text-sm">
                      Las cookies pueden hacer que su próxima visita sea más fácil y el sitio más útil para usted. 
                      Sin embargo, siempre puede controlar qué cookies acepta a través de la configuración de su navegador.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">Tipos de cookies que utilizamos</h2>
              
              <div className="grid gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Settings className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Cookies Necesarias</h3>
                      <span className="text-sm text-green-600 font-medium">Siempre activas</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Estas cookies son esenciales para que el sitio web funcione correctamente. 
                    Sin estas cookies, no podríamos proporcionar servicios básicos.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Incluyen:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cookies de autenticación y seguridad</li>
                      <li>• Cookies de configuración de interfaz</li>
                      <li>• Cookies de balanceador de carga</li>
                      <li>• Cookies de consentimiento de cookies</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Cookies de Análisis</h3>
                      <span className="text-sm text-blue-600 font-medium">Opcional</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web 
                    recopilando información de forma anónima y agregada.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Incluyen:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Google Analytics (si está habilitado)</li>
                      <li>• Cookies de medición de rendimiento</li>
                      <li>• Cookies de análisis de uso</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Target className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Cookies de Marketing</h3>
                      <span className="text-sm text-purple-600 font-medium">Opcional</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Se utilizan para mostrar anuncios personalizados y medir la efectividad 
                    de nuestras campañas publicitarias.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Incluyen:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cookies de redes sociales</li>
                      <li>• Cookies de publicidad dirigida</li>
                      <li>• Cookies de seguimiento de conversiones</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Settings className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Cookies de Preferencias</h3>
                      <span className="text-sm text-orange-600 font-medium">Opcional</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Permiten recordar sus preferencias y configuraciones para personalizar 
                    su experiencia en el sitio.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Incluyen:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Configuraciones de tema y diseño</li>
                      <li>• Preferencias de idioma</li>
                      <li>• Configuraciones de notificación</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">Cookies de terceros</h2>
              <p className="text-gray-700 mb-4">
                Algunos de nuestros socios pueden establecer cookies en su dispositivo cuando visita nuestro sitio. 
                Estas cookies están sujetas a las políticas de privacidad de esos terceros.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h4 className="font-medium text-gray-800 mb-2">Servicios de terceros que pueden usar cookies:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Google Analytics (análisis web)</li>
                  <li>• Formspree (procesamiento de formularios)</li>
                  <li>• Servicios de redes sociales (si están integrados)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">¿Cómo gestionar las cookies?</h2>
              <p className="text-gray-700 mb-6">
                Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies 
                que ya están en su dispositivo y puede configurar la mayoría de navegadores para 
                evitar que se coloquen.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#0066CC] mb-3">En nuestro sitio web</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Puede gestionar sus preferencias de cookies directamente desde nuestro banner de cookies 
                    o accediendo a la configuración en cualquier momento.
                  </p>
                  <button 
                    className="bg-[#0066CC] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#004499] transition-colors"
                    onClick={() => {
                      // Aquí se podría abrir el modal de configuración de cookies
                      alert('Esta funcionalidad abriría la configuración de cookies');
                    }}
                  >
                    Configurar Cookies
                  </button>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#0066CC] mb-3">En su navegador</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    También puede gestionar las cookies directamente desde la configuración de su navegador:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                    <li>• Firefox: Preferencias → Privacidad y seguridad</li>
                    <li>• Safari: Preferencias → Privacidad</li>
                    <li>• Edge: Configuración → Cookies y permisos del sitio</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">Duración de las cookies</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de Cookie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Consentimiento de cookies</td>
                      <td className="border border-gray-300 px-4 py-2">1 año</td>
                      <td className="border border-gray-300 px-4 py-2">Recordar sus preferencias de cookies</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Sesión</td>
                      <td className="border border-gray-300 px-4 py-2">Hasta cerrar navegador</td>
                      <td className="border border-gray-300 px-4 py-2">Funcionalidad básica del sitio</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Analytics</td>
                      <td className="border border-gray-300 px-4 py-2">2 años</td>
                      <td className="border border-gray-300 px-4 py-2">Análisis de uso del sitio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">Actualizaciones de esta política</h2>
              <p className="text-gray-700">
                Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios 
                en nuestras prácticas o por otros motivos operativos, legales o reglamentarios. 
                Le recomendamos que revise esta página periódicamente para estar informado de 
                cualquier cambio.
              </p>
            </section>

            <div className="bg-[#FFD700] text-[#0066CC] p-6 rounded-lg">
              <h3 className="font-semibold mb-2">¿Necesitas más información?</h3>
              <p className="text-[#004499]">
                Si tienes preguntas sobre nuestra Política de Cookies o sobre cómo utilizamos las cookies, 
                puedes contactarnos en <strong>info@taulergroup.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 