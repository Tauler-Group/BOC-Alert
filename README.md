# BOC Alert - Landing Page

Landing page moderna y minimalista para BOC Alert, un servicio de notificaciones automatizado del Boletín Oficial de Canarias.

## 🚀 Características

- Diseño responsive y moderno
- Colores de la bandera de Canarias (azul #0066CC y amarillo #FFD700)
- Formulario de contacto integrado con EmailJS
- Animaciones sutiles y transiciones suaves
- SEO optimizado

## 📧 Configuración de EmailJS

Para que el formulario de contacto funcione, necesitas configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita

### 2. Configurar servicio de email
- En el dashboard, ve a "Email Services"
- Añade un nuevo servicio (Gmail, Outlook, etc.)
- Configura tu email info@taulergroup.com

### 3. Crear plantilla de email
- Ve a "Email Templates"
- Crea una nueva plantilla con este contenido:

**Asunto:** Nueva suscripción a BOC Alert

**Contenido:**
```
Hola,

Has recibido una nueva suscripción a BOC Alert:

Email del usuario: {{from_email}}
Temas de interés: {{topics}}

Mensaje completo:
{{message}}

Fecha: {{date}}

Saludos,
Sistema BOC Alert
```

### 4. Obtener credenciales
- **Service ID**: En "Email Services"
- **Template ID**: En "Email Templates" 
- **Public Key**: En "Account" > "API Keys"

### 5. Actualizar configuración
Reemplaza en `src/App.tsx` los siguientes valores:
- `YOUR_SERVICE_ID` por tu Service ID real
- `YOUR_TEMPLATE_ID` por tu Template ID real  
- `YOUR_PUBLIC_KEY` por tu Public Key real

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📱 Responsive Design

La landing page está optimizada para:
- Móviles (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🎨 Paleta de Colores

- **Azul principal**: #0066CC
- **Amarillo/Dorado**: #FFD700
- **Azul secundario**: #004499
- **Blanco**: #FFFFFF
- **Grises**: #F3F4F6, #6B7280

## 📞 Contacto

Email: info@taulergroup.com