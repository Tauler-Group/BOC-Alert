import React, { useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Bell, Clock, Target, CheckCircle, Mail, Phone, Shield, Users, Building, ArrowRight, Menu, X } from 'lucide-react';
import { FORMSPREE_CONFIG } from './formspree-config';
import { useCookieConsent } from './hooks/useCookieConsent';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';
import { LegalNotice } from './pages/LegalNotice';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [topics, setTopics] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Usar Formspree para enviar el correo directamente a info@taulergroup.com
      const response = await fetch(FORMSPREE_CONFIG.ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          topics: topics || 'No especificados',
          message: `Nueva suscripción a BOC Alert:
          
Email: ${email}
Temas de interés: ${topics || 'No especificados'}
Fecha: ${new Date().toLocaleString('es-ES')}`,
          _replyto: email,
          _subject: 'Nueva suscripción a BOC Alert'
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setEmail('');
        setTopics('');
        setSubmitMessage('¡Gracias por suscribirte! Te contactaremos pronto para configurar tus alertas.');
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setIsSubmitting(false);
      setSubmitMessage('Ha ocurrido un error. Por favor, inténtalo de nuevo o contacta directamente con info@taulergroup.com');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-[#0066CC] p-2 rounded-lg">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[#0066CC]">BOC Alert</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-gray-700 hover:text-[#0066CC] transition-colors"
              >
                Beneficios
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-[#0066CC] transition-colors"
              >
                Cómo funciona
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-[#0066CC] transition-colors"
              >
                Precios
              </button>
              <button 
                onClick={() => scrollToSection('subscribe')}
                className="bg-[#FFD700] text-[#0066CC] px-4 py-2 rounded-lg hover:bg-[#FFC700] transition-colors font-semibold"
              >
                Suscribirme
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-gray-700 hover:text-[#0066CC] transition-colors text-left"
              >
                Beneficios
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-[#0066CC] transition-colors text-left"
              >
                Cómo funciona
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-[#0066CC] transition-colors text-left"
              >
                Precios
              </button>
              <button 
                onClick={() => scrollToSection('subscribe')}
                className="bg-[#FFD700] text-[#0066CC] px-4 py-2 rounded-lg hover:bg-[#FFC700] transition-colors text-left font-semibold"
              >
                Suscribirme
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0066CC] to-[#004499] text-white py-20 overflow-hidden">
        {/* Bandera de Canarias difuminada */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/12211/pexels-photo-12211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Bandera de Canarias" 
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/90 to-[#004499]/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mantente informado del BOC
              <span className="block text-[#FFD700]">sin esfuerzo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Recibe alertas diarias sobre los temas que te importan. 
              No más búsquedas manuales en el Boletín Oficial de Canarias.
            </p>
            <button 
              onClick={() => scrollToSection('subscribe')}
              className="bg-[#FFD700] text-[#0066CC] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FFC700] transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Suscribirme ahora</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0066CC] mb-16">
            ¿Por qué elegir BOC Alert?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-[#FFD700] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0066CC] mb-3">Ahorra tiempo</h3>
                <p className="text-gray-600">No más búsquedas manuales diarias. Te enviamos solo lo relevante para ti.</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-[#FFD700] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0066CC] mb-3">Notificaciones relevantes</h3>
                <p className="text-gray-600">Solo recibe información sobre los temas que realmente te interesan.</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="bg-[#FFD700] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0066CC] mb-3">Fácil de usar</h3>
                <p className="text-gray-600">Todo por email, sin necesidad de instalar aplicaciones o complicaciones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Example Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0066CC] mb-4">
              Así recibirás tus alertas
            </h2>
            <p className="text-xl text-gray-600">
              Ejemplo real de cómo llegan las notificaciones del BOC a tu email
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-2xl w-full">
              <img 
                src="/boc-email-example.png" 
                alt="Ejemplo de email con alertas del BOC"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0066CC] mb-16">
            Cómo funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#0066CC] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#0066CC] mb-3">Suscríbete</h3>
              <p className="text-gray-600">Regístrate con tu email y especifica los temas de interés que quieres seguir.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0066CC] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#0066CC] mb-3">Monitorizamos</h3>
              <p className="text-gray-600">BOC Alert revisa automáticamente el BOC cada mañana buscando contenido relevante.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0066CC] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#0066CC] mb-3">Recibe alertas</h3>
              <p className="text-gray-600">Te enviamos un email diario con un resumen de todas las publicaciones que te afectan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0066CC] mb-16">
            Planes adaptados a tus necesidades
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <Users className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0066CC] mb-2">Profesionales</h3>
                <p className="text-gray-600">Para empresas y autónomos</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#0066CC]">29€</span>
                  <span className="text-gray-600">/mes</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#FFD700]" />
                  <span>Alertas diarias personalizadas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#FFD700]" />
                  <span>Hasta 10 temas de interés</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#FFD700]" />
                  <span>Soporte por email</span>
                </li>
              </ul>
              <button className="w-full bg-[#FFD700] text-[#0066CC] py-3 rounded-lg font-semibold hover:bg-[#FFC700] transition-colors">
                Empezar ahora
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[#FFD700]">
              <div className="text-center mb-6">
                <Building className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0066CC] mb-2">Instituciones</h3>
                <p className="text-gray-600">Para Instituciones públicas</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#0066CC]">Contactar para obtener presupuesto</span>
                  <span className="text-gray-600"></span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#FFD700]" />
                  <span>Usuarios y alertas ilimitados</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#FFD700]" />
                  <span>Temas de interés ilimitados</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#FFD700]" />
                  <span>Soporte prioritario</span>
                </li>

              </ul>
              <button className="w-full bg-[#0066CC] text-white py-3 rounded-lg font-semibold hover:bg-[#004499] transition-colors">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section id="subscribe" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0066CC] mb-4">
              Comienza hoy mismo
            </h2>
            <p className="text-xl text-gray-600">
              Únete a cientos de profesionales e instituciones que ya usan BOC Alert
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="topics" className="block text-sm font-medium text-gray-700 mb-2">
                Temas de interés (opcional, te contactaremos para confirmarlos)
              </label>
              <textarea
                id="topics"
                value={topics}
                onChange={(e) => setTopics(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder="Ej: subvenciones, urbanismo, medio ambiente..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FFD700] text-[#0066CC] py-4 rounded-lg text-lg font-semibold hover:bg-[#FFC700] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Quiero recibir alertas'}
            </button>
            {submitMessage && (
              <div className={`mt-4 p-4 rounded-lg text-center ${
                submitMessage.includes('error') || submitMessage.includes('Error')
                  ? 'bg-red-100 text-red-700 border border-red-200'
                  : 'bg-green-100 text-green-700 border border-green-200'
              }`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0066CC] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-[#FFD700] p-2 rounded-lg">
                  <Bell className="h-6 w-6 text-[#0066CC]" />
                </div>
                <span className="text-xl font-bold">BOC Alert</span>
              </div>
              <p className="text-gray-300 mb-4">
                Mantente informado del Boletín Oficial de Canarias sin esfuerzo. Recibe alertas diarias sobre los temas que te importan.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces útiles</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/politica-privacidad" className="text-gray-300 hover:text-white transition-colors">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/politica-cookies" className="text-gray-300 hover:text-white transition-colors">
                    Política de cookies
                  </Link>
                </li>
                <li>
                  <Link to="/aviso-legal" className="text-gray-300 hover:text-white transition-colors">
                    Aviso legal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:info@taulergroup.com" className="text-gray-300 hover:text-white transition-colors">
                    info@taulergroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-gray-300">Datos seguros y protegidos</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 BOC Alert - Tauler Group Ventures S.L. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const location = useLocation();
  const { showBanner, acceptAll, acceptNecessary, acceptCustom } = useCookieConsent();

  // Componente de navegación para volver a la página principal
  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy onBack={goHome} />} />
        <Route path="/politica-cookies" element={<CookiePolicy onBack={goHome} />} />
        <Route path="/aviso-legal" element={<LegalNotice onBack={goHome} />} />
      </Routes>
      
      {/* Banner de cookies - se muestra en todas las páginas */}
      {showBanner && (
        <CookieBanner
          onAcceptAll={acceptAll}
          onAcceptNecessary={acceptNecessary}
          onAcceptCustom={acceptCustom}
          onClose={() => {}} // El hook maneja el cierre automáticamente
        />
      )}
    </>
  );
}

export default App;