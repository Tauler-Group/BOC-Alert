import React from 'react';
import { Shield, ArrowLeft, Mail, MapPin, Calendar } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
          <div className="bg-[#0066CC] text-white p-8">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8" />
              <div>
                <h1 className="text-3xl font-bold">Política de Privacidad</h1>
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
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">1. Información del Responsable</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Denominación social:</strong> TAULER GROUP VENTURES S.L.</p>
                <p className="mb-2"><strong>CIF:</strong> B21742259</p>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span><strong>Dirección:</strong> Plaza Curtidos Hnos. Dorta, 7 - 38005, Santa Cruz de Tenerife</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span><strong>Email:</strong> info@taulergroup.com</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">2. Finalidad del Tratamiento</h2>
              <p className="text-gray-700 mb-4">
                En BOC Alert tratamos la información que nos facilita con las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Gestionar las suscripciones al servicio de alertas del Boletín Oficial de Canarias</li>
                <li>Enviar notificaciones y alertas personalizadas según los temas de interés especificados</li>
                <li>Comunicarnos con usted para consultas relacionadas con el servicio</li>
                <li>Mejorar nuestros servicios y desarrollar nuevas funcionalidades</li>
                <li>Cumplir con las obligaciones legales aplicables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">3. Legitimación</h2>
              <p className="text-gray-700">
                La base legal para el tratamiento de sus datos personales es:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                <li><strong>Consentimiento del interesado:</strong> Para el envío de alertas y comunicaciones comerciales</li>
                <li><strong>Ejecución de un contrato:</strong> Para la prestación del servicio solicitado</li>
                <li><strong>Interés legítimo:</strong> Para la mejora del servicio y análisis estadísticos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">4. Datos Recopilados</h2>
              <p className="text-gray-700 mb-4">Los tipos de datos personales que podemos recopilar incluyen:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0066CC] mb-2">Datos de Identificación</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Dirección de correo electrónico</li>
                    <li>• Nombre (opcional)</li>
                    <li>• Empresa/organización (opcional)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0066CC] mb-2">Datos de Preferencias</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Temas de interés especificados</li>
                    <li>• Configuraciones de notificación</li>
                    <li>• Preferencias de comunicación</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">5. Conservación de Datos</h2>
              <p className="text-gray-700">
                Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades 
                para las que fueron recogidos y, en cualquier caso, durante los períodos establecidos por la 
                legislación aplicable. Una vez finalizada la relación contractual, conservaremos sus datos 
                debidamente bloqueados durante los plazos legalmente establecidos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">6. Derechos del Interesado</h2>
              <p className="text-gray-700 mb-4">
                En relación con el tratamiento de sus datos personales, usted tiene derecho a:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-1 rounded">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-800">Acceso:</strong>
                      <p className="text-sm text-gray-600">Obtener información sobre el tratamiento de sus datos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-1 rounded">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-800">Rectificación:</strong>
                      <p className="text-sm text-gray-600">Modificar datos inexactos o incompletos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-1 rounded">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-800">Supresión:</strong>
                      <p className="text-sm text-gray-600">Solicitar la eliminación de sus datos</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-100 p-1 rounded">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-800">Limitación:</strong>
                      <p className="text-sm text-gray-600">Restringir el tratamiento de sus datos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-1 rounded">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-800">Portabilidad:</strong>
                      <p className="text-sm text-gray-600">Recibir sus datos en formato estructurado</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 p-1 rounded">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-800">Oposición:</strong>
                      <p className="text-sm text-gray-600">Oponerse al tratamiento de sus datos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>¿Cómo ejercer sus derechos?</strong><br />
                  Puede ejercer sus derechos enviando un correo electrónico a <strong>info@taulergroup.com</strong> 
                  adjuntando copia de su documento de identidad.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">7. Seguridad</h2>
              <p className="text-gray-700">
                Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad 
                de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, 
                teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los 
                riesgos a que están expuestos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">8. Comunicaciones Comerciales</h2>
              <p className="text-gray-700">
                Solo enviaremos comunicaciones comerciales si ha prestado su consentimiento expreso. 
                Puede revocar este consentimiento en cualquier momento a través del enlace de baja 
                incluido en cada comunicación o contactando con nosotros en info@taulergroup.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">9. Modificaciones</h2>
              <p className="text-gray-700">
                Nos reservamos el derecho a modificar la presente Política de Privacidad para adaptarla 
                a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. 
                En dichos supuestos, anunciaremos en esta página los cambios introducidos con antelación 
                a su puesta en vigor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0066CC] mb-4">10. Autoridad de Control</h2>
              <p className="text-gray-700">
                Si considera que existe un problema o infracción de la normativa vigente en la forma 
                en la que se están tratando sus datos personales, tiene derecho a dirigirse a la 
                Autoridad de Control competente (Agencia Española de Protección de Datos - www.aepd.es).
              </p>
            </section>

            <div className="bg-[#0066CC] text-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">¿Tienes dudas sobre nuestra Política de Privacidad?</h3>
              <p className="text-blue-100">
                Si tienes cualquier duda sobre cómo tratamos tus datos personales, no dudes en contactarnos 
                en info@taulergroup.com. Estaremos encantados de ayudarte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 