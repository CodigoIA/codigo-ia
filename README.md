# 🤖 CÓDIGO IA — Portal de Inteligencia Artificial

> El portal #1 en español sobre Inteligencia Artificial para México, España, Argentina y toda América Latina.

[![Deploy Status](https://img.shields.io/badge/deploy-hostinger-blue)](https://hostinger.com)
[![Language](https://img.shields.io/badge/language-español-red)](https://codigoia.com)

---

## 📋 Descripción

Código IA es un portal de medios premium sobre Inteligencia Artificial optimizado para:

- ✅ **SEO orgánico** (schema markup, meta tags, sitemap, robots.txt)
- ✅ **Google Discover** (estructura de noticias, Open Graph, Twitter Cards)
- ✅ **Monetización con Google AdSense** (espacios estratégicos de anuncios)
- ✅ **Marketing de afiliados** (cards de productos, botones CTA, comparativas)
- ✅ **Performance** (vanilla HTML/CSS/JS, sin dependencias pesadas)
- ✅ **Mobile-first** (diseño responsivo completo)

---

## 📁 Estructura del proyecto

```
codigo-ia/
├── index.html                              # Página principal
├── articulo-chatgpt-vs-claude-vs-gemini.html  # Artículo ejemplo
├── robots.txt                              # Configuración de robots
├── sitemap.xml                             # Sitemap SEO
├── README.md                               # Este archivo
├── styles/
│   ├── main.css                            # Estilos principales
│   └── article.css                         # Estilos de artículos
└── scripts/
    └── main.js                             # JavaScript principal
```

---

## 🚀 Deploy en Hostinger (paso a paso)

### Opción 1: Subir archivos directamente via FTP/Administrador de archivos

1. **Accede a tu panel de Hostinger** → hPanel
2. Ve a **Archivos → Administrador de archivos**
3. Navega a la carpeta `public_html`
4. **Sube todos los archivos** del proyecto manteniendo la estructura de carpetas:
   - `index.html` → raíz de `public_html/`
   - Carpeta `styles/` completa → `public_html/styles/`
   - Carpeta `scripts/` completa → `public_html/scripts/`
   - `robots.txt` → raíz de `public_html/`
   - `sitemap.xml` → raíz de `public_html/`

### Opción 2: Deploy via GitHub (recomendado)

1. **Crea un repositorio en GitHub** y sube todos los archivos
2. En el panel de Hostinger, ve a **Git → Repositorios**
3. Conecta tu repositorio de GitHub
4. Configura el directorio destino como `public_html/`
5. Activa el **auto-deploy** para que cada push actualice el sitio automáticamente

```bash
# Comandos para subir el proyecto a GitHub
git init
git add .
git commit -m "🚀 Lanzamiento inicial Código IA"
git remote add origin https://github.com/tuusuario/codigo-ia.git
git push -u origin main
```

---

## 🌐 Conectar dominio en Hostinger

1. En hPanel → **Dominios → Mis dominios**
2. Selecciona tu dominio (ej: `codigoia.com`)
3. Ve a **DNS / Nameservers**
4. Asegúrate de que los nameservers apunten a Hostinger:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`
5. Apunta el dominio a la carpeta `public_html/` del hosting
6. **Activa el SSL gratuito** en: Hosting → SSL → Let's Encrypt

---

## ☁️ Configurar Cloudflare (recomendado para performance)

### 1. Agregar sitio a Cloudflare
1. Crea cuenta en [cloudflare.com](https://cloudflare.com)
2. Agrega tu dominio
3. Copia los nameservers de Cloudflare a Hostinger

### 2. Configuraciones recomendadas en Cloudflare

**DNS:**
- Crea registro A → `@` → IP de tu servidor Hostinger
- Crea registro CNAME → `www` → `codigoia.com`

**SSL/TLS:**
- Modo: **Full (strict)**
- Activa: Always Use HTTPS
- Activa: HTTP Strict Transport Security (HSTS)

**Performance:**
- Auto Minify: ✅ JavaScript, CSS, HTML
- Brotli: ✅ Activado
- Early Hints: ✅ Activado

**Cache:**
- Cache Level: Standard
- Browser Cache TTL: 4 hours
- Reglas de caché para `/styles/*` y `/scripts/*`: TTL de 1 mes

**Seguridad:**
- Security Level: Medium
- Activa: Bot Fight Mode
- WAF: Reglas básicas activadas

---

## 📊 Configurar Google AdSense

1. Crea cuenta en [adsense.google.com](https://adsense.google.com)
2. Agrega tu sitio y espera aprobación
3. Una vez aprobado, copia el código del script de AdSense
4. Pégalo en el `<head>` de todos los archivos HTML:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>
```

5. Reemplaza los comentarios `<!-- Google AdSense -->` con las unidades de anuncio reales:

```html
<!-- Reemplaza el div .ad-placeholder con esto: -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXX"
     data-ad-slot="YYYYYYYYYY"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

---

## 🔗 Configurar Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega tu propiedad (dominio)
3. Verifica via DNS en Cloudflare o Hostinger
4. Envía el sitemap: `https://codigoia.com/sitemap.xml`

---

## ✅ Checklist de lanzamiento

- [ ] Subir todos los archivos a `public_html/`
- [ ] Conectar dominio y activar SSL
- [ ] Configurar Cloudflare
- [ ] Verificar en Google Search Console
- [ ] Enviar sitemap.xml
- [ ] Solicitar revisión de Google AdSense
- [ ] Configurar Google Analytics (GA4)
- [ ] Probar en mobile y desktop
- [ ] Verificar velocidad en [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 📈 Próximos pasos recomendados

1. **Crear más artículos** siguiendo la estructura de `articulo-chatgpt-vs-claude-vs-gemini.html`
2. **Integrar un CMS headless** como Directus o Strapi para gestionar contenido
3. **Agregar páginas de categorías** para cada temática (Herramientas, Noticias, etc.)
4. **Crear landing pages de afiliados** para cada herramienta recomendada
5. **Conectar newsletter** con Mailchimp, ConvertKit o Brevo
6. **Migrar a Next.js** cuando el tráfico supere los 100k mensuales

---

## 🎨 Identidad visual

- **Fondo:** `#020408` (negro espacial)
- **Primario:** `#00d4ff` (cyan neon)
- **Secundario:** `#7c3aed` (violeta)
- **Fuente display:** Orbitron
- **Fuente UI:** Rajdhani
- **Fuente body:** Inter

---

## 📞 Soporte

- Instagram: [@codigo.iaoficial](https://instagram.com/codigo.iaoficial)
- Email: hola@codigoia.com

---

**© 2026 Código IA. La revolución IA empieza aquí. 🤖**
