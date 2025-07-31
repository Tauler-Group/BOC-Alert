// Configuración de EmailJS para BOC Alert
// 
// INSTRUCCIONES DE CONFIGURACIÓN:
// 
// 1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita
// 2. Crea un nuevo servicio de email (Gmail, Outlook, etc.)
// 3. Crea una plantilla de email con las siguientes variables:
//    - {{to_email}} - Email de destino (info@taulergroup.com)
//    - {{from_email}} - Email del usuario
//    - {{user_email}} - Email del usuario (para reply-to)
//    - {{topics}} - Temas de interés
//    - {{message}} - Mensaje completo
//    - {{reply_to}} - Email para responder
// 
// 4. Obtén tus credenciales:
//    - Service ID: En la sección "Email Services"
//    - Template ID: En la sección "Email Templates"
//    - Public Key: En la sección "Account" > "API Keys"
// 
// 5. Reemplaza los valores en App.tsx:
//    - YOUR_SERVICE_ID por tu Service ID real
//    - YOUR_TEMPLATE_ID por tu Template ID real
//    - YOUR_PUBLIC_KEY por tu Public Key real

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_qxcutrj', // Reemplazar con tu Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID
  PUBLIC_KEY: 'VtPJPHWLV6Rd_-KFb' // Reemplazar con tu Public Key
};

// Ejemplo de plantilla de email para EmailJS:
// 
// Asunto: Nueva suscripción a BOC Alert
// 
// Contenido:
// Hola,
// 
// Has recibido una nueva suscripción a BOC Alert:
// 
// Email del usuario: {{from_email}}
// Temas de interés: {{topics}}
// 
// Mensaje completo:
// {{message}}
// 
// Saludos,
// Sistema BOC Alert