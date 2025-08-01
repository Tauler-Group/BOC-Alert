# BOC Alert - Landing Page

Landing page moderna y minimalista para BOC Alert, un servicio de notificaciones automatizado del Boletín Oficial de Canarias.

## 🚀 Características

- Diseño responsive y moderno
- Colores de la bandera de Canarias (azul #0066CC y amarillo #FFD700)
- Formulario de contacto integrado con Formspree
- Animaciones sutiles y transiciones suaves
- SEO optimizado

## 📧 Configuración del Formulario de Contacto

Para que el formulario de contacto funcione, necesitas configurar Formspree (mucho más simple que EmailJS):

### 1. Crear cuenta en Formspree
- Ve a [https://formspree.io/](https://formspree.io/)
- Crea una cuenta gratuita

### 2. Crear un nuevo formulario
- En el dashboard, haz clic en "New Form"
- Ingresa tu email: `info@taulergroup.com`
- Formspree te dará un endpoint único

### 3. Configurar el endpoint
- Copia el endpoint que te proporciona (formato: `https://formspree.io/f/XXXXXXXX`)
- Abre el archivo `src/formspree-config.ts`
- Reemplaza `XXXXXXXX` en la URL con tu endpoint ID real

**Ejemplo:**
Si tu endpoint es `https://formspree.io/f/xpwzgqzb`, entonces:
```typescript
export const FORMSPREE_CONFIG = {
  ENDPOINT: 'https://formspree.io/f/xpwzgqzb',
};
```

### 4. ¡Listo!
- Los correos llegarán directamente a `info@taulergroup.com`
- Formspree incluye automáticamente protección anti-spam
- Plan gratuito: 50 envíos/mes (más que suficiente para empezar)

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