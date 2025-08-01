import React from 'react';
import { Scale, ArrowLeft, Mail, MapPin, Calendar, Building2, Phone, Globe } from 'lucide-react';

interface LegalNoticeProps {
  onBack?: () => void;
}

export const LegalNotice: React.FC<LegalNoticeProps> = ({ onBack }) => {
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
          <div className="bg-gradient-to-br from-[#0066CC] to-[#004499] text-white p-8">
            <div className="flex items-center space-x-4">
              <Scale className="h-8 w-8" />
              <div>
                <h1 className="text-3xl font-bold">Aviso Legal</h1>
                <p className="text-blue-100 mt-2">BOC Alert - Tauler Group Ventures S.L.</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Última actualización: {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">1. Datos Identificativos</h2>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Building2 className="h-6 w-6 text-[#0066CC]" />
                      <h3 className="text-lg font-semibold text-gray-800">Información de la Empresa</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Denominación social:</span>
                        <p className="text-gray-600">TAULER GROUP VENTURES S.L.</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">CIF:</span>
                        <p className="text-gray-600">B21742259</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Registro Mercantil:</span>
                        <p className="text-gray-600">Santa Cruz de Tenerife</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Globe className="h-6 w-6 text-[#0066CC]" />
                      <h3 className="text-lg font-semibold text-gray-800">Datos de Contacto</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">Dirección:</span>
                          <p className="text-gray-600">Plaza Curtidos Hnos. Dorta, 7<br />38005, Santa Cruz de Tenerife<br />España</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <div>
                          <span className="font-medium text-gray-700">Email:</span>
                          <a href="mailto:info@taulergroup.com" className="text-[#0066CC] hover:underline">
                            info@taulergroup.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">2. Objeto y Ámbito de Aplicación</h2>
              <p className="text-gray-700 mb-4">
                El presente Aviso Legal regula el uso del sitio web <strong>BOC Alert</strong>, propiedad de 
                TAULER GROUP VENTURES S.L., que pone a disposición de los usuarios un servicio de alertas 
                automatizadas del Boletín Oficial de Canarias.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Importante:</strong> El acceso y uso de este sitio web implica la aceptación expresa 
                  y sin reservas de todas las condiciones establecidas en este Aviso Legal por parte del usuario.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">3. Servicios</h2>
              <p className="text-gray-700 mb-4">
                A través de este sitio web, ofrecemos los siguientes servicios:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0066CC] mb-2">🔔 Servicio de Alertas</h3>
                  <p className="text-sm text-gray-700">
                    Notificaciones automáticas personalizadas sobre publicaciones en el Boletín Oficial de Canarias.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0066CC] mb-2">📧 Gestión de Suscripciones</h3>
                  <p className="text-sm text-gray-700">
                    Administración de preferencias y configuración de temas de interés específicos.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0066CC] mb-2">💼 Planes Empresariales</h3>
                  <p className="text-sm text-gray-700">
                    Soluciones personalizadas para empresas e instituciones públicas.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0066CC] mb-2">🏛️ Cumplimiento Legal</h3>
                  <p className="text-sm text-gray-700">
                    Servicio especializado en el seguimiento de normativa y legislación canaria.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">4. Condiciones de Uso</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">4.1. Uso Permitido</h3>
                  <p className="text-gray-700 text-sm">
                    Los usuarios pueden utilizar este sitio web y sus servicios únicamente para fines lícitos 
                    y de acuerdo con estos términos. Está permitido el uso personal y comercial del servicio 
                    conforme a los planes contratados.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">4.2. Uso Prohibido</h3>
                  <p className="text-gray-700 text-sm mb-2">Se prohíbe expresamente:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Utilizar el servicio para actividades ilegales o fraudulentas</li>
                    <li>• Intentar acceder a sistemas no autorizados</li>
                    <li>• Enviar spam o contenido malicioso</li>
                    <li>• Revender o redistribuir el servicio sin autorización</li>
                    <li>• Realizar ingeniería inversa o modificar el sistema</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">5. Propiedad Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todos los contenidos de este sitio web, incluyendo pero no limitándose a textos, gráficos, 
                logotipos, iconos, imágenes, clips de audio, software y su compilación, son propiedad 
                exclusiva de TAULER GROUP VENTURES S.L. o de sus proveedores de contenido.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Derechos Reservados</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">✅ Permitido:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Uso personal del servicio</li>
                      <li>• Compartir enlaces al sitio web</li>
                      <li>• Citar contenido con atribución</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">❌ Prohibido:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Reproducir contenido sin autorización</li>
                      <li>• Modificar o crear obras derivadas</li>
                      <li>• Uso comercial no autorizado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">6. Responsabilidades y Limitaciones</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0066CC] mb-2">6.1. Nuestras Responsabilidades</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Proporcionar el servicio con la mayor calidad posible</li>
                    <li>• Mantener la seguridad y privacidad de los datos</li>
                    <li>• Ofrecer soporte técnico según el plan contratado</li>
                    <li>• Cumplir con la normativa de protección de datos</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0066CC] mb-2">6.2. Limitaciones de Responsabilidad</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    TAULER GROUP VENTURES S.L. no se hace responsable de:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Interrupciones del servicio por causas ajenas a nuestra voluntad</li>
                    <li>• Errores u omisiones en la información del BOC oficial</li>
                    <li>• Daños derivados del mal uso del servicio</li>
                    <li>• Pérdidas de datos por causas de fuerza mayor</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">7. Protección de Datos</h2>
              <p className="text-gray-700 mb-4">
                El tratamiento de datos personales se rige por nuestra{' '}
                <a href="/politica-privacidad" className="text-[#0066CC] hover:underline font-medium">
                  Política de Privacidad
                </a>, que forma parte integral de este Aviso Legal. 
                Cumplimos estrictamente con el Reglamento General de Protección de Datos (RGPD) 
                y la Ley Orgánica de Protección de Datos (LOPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">8. Modificaciones</h2>
              <p className="text-gray-700">
                TAULER GROUP VENTURES S.L. se reserva el derecho de modificar, en cualquier momento y sin 
                previo aviso, la presentación, configuración, información y condiciones de uso de este sitio web. 
                Los usuarios deben leer periódicamente este Aviso Legal, ya que puede sufrir modificaciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">9. Enlaces Externos</h2>
              <p className="text-gray-700 mb-4">
                Este sitio web puede contener enlaces a sitios web de terceros. No nos hacemos responsables 
                del contenido, políticas de privacidad o prácticas de estos sitios externos. Le recomendamos 
                que revise las políticas de privacidad de cualquier sitio web que visite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">10. Legislación Aplicable y Jurisdicción</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <p className="text-gray-700 mb-4">
                  Las presentes condiciones se rigen por la legislación española. Para cualquier controversia 
                  que pudiera derivarse del acceso o uso de este sitio web, las partes se someten expresamente 
                  a la jurisdicción de los Juzgados y Tribunales de <strong>Santa Cruz de Tenerife</strong>.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Scale className="h-4 w-4" />
                  <span>Normativa aplicable: Legislación española y normativa europea</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">11. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para cualquier duda, sugerencia o consulta relacionada con este Aviso Legal, 
                puede contactar con nosotros:
              </p>
              <div className="bg-[#0066CC] text-white p-6 rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">📧 Contacto General</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <a href="mailto:info@taulergroup.com" className="hover:text-blue-200">
                          info@taulergroup.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">🏢 Dirección Postal</h3>
                    <div className="text-sm text-blue-100">
                      <p>TAULER GROUP VENTURES S.L.</p>
                      <p>Plaza Curtidos Hnos. Dorta, 7</p>
                      <p>38005, Santa Cruz de Tenerife</p>
                      <p>España</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500 text-center">
                Este Aviso Legal fue actualizado por última vez el{' '}
                {new Date().toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}. 
                Todos los derechos reservados © {new Date().getFullYear()} TAULER GROUP VENTURES S.L.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 