# Karagato Studios - Portal Web, Apps & Políticas de Privacidad

Sitio web oficial, catálogo de aplicaciones y centro de políticas de privacidad para **Karagato Studios**, diseñado específicamente para cumplir con las directrices de publicación en **Google Play Store**.

---

## 🌐 Estructura del Sitio Web

Este repositorio está estructurado para que el sitio funcione como la página principal de presentación de **Karagato Studios**, manteniendo al mismo tiempo URLs directas, públicas e independientes para cada app y sus políticas legales:

```text
├── index.html                      # Página principal del estudio con la sección "Apps de Karagato"
├── css/
│   └── style.css                   # Sistema de diseño gamer oscuro, responsive y profesional
├── js/
│   └── main.js                     # Interactividad (copiar URL para Play Console y generador DMCA)
├── legal/
│   └── index.html                  # Directorio centralizado legal de todas las apps
├── apps/
│   └── retro-game-studio/
│       ├── index.html              # Ficha completa e información de "Retro Game Studio"
│       ├── privacy.html            # URL oficial para Google Play Console (Política de Privacidad)
│       ├── dmca.html               # Documento de Quejas DMCA y Derechos de Autor (con generador)
│       └── terms.html              # Términos y condiciones del servicio
└── README.md
```

---

## 🚀 Cómo Activar GitHub Pages (En 1 Minuto)

Para que tu sitio web y tus políticas estén en línea con HTTPS gratuito y permanente:

1. Ve a tu repositorio en GitHub: `https://github.com/Karagato-Studios/Politicas_De_Privacidad_Apps`
2. Haz clic en **Settings** (Configuración) en la barra superior.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En **Build and deployment > Branch**:
   - Selecciona la rama: **`main`**
   - Selecciona la carpeta: **`/(root)`**
   - Haz clic en **Save** (Guardar).
5. Espera unos 30-60 segundos. GitHub te dará tu URL en vivo:
   `https://karagato-studios.github.io/Politicas_De_Privacidad_Apps/`

---

## 📋 Enlaces para Google Play Console

Una vez activado GitHub Pages, estas son las URLs directas que debes utilizar:

| Propósito | URL para Google Play Console / Usuarios |
| :--- | :--- |
| **Página Web Principal de Karagato** | `https://karagato-studios.github.io/Politicas_De_Privacidad_Apps/` |
| **Ficha de Retro Game Studio** | `https://karagato-studios.github.io/Politicas_De_Privacidad_Apps/apps/retro-game-studio/` |
| **Política de Privacidad (Campo Obligatorio en Play Console)** | `https://karagato-studios.github.io/Politicas_De_Privacidad_Apps/apps/retro-game-studio/privacy.html` |
| **Documento de Queja DMCA y Derechos de Autor** | `https://karagato-studios.github.io/Politicas_De_Privacidad_Apps/apps/retro-game-studio/dmca.html` |
| **Términos de Servicio** | `https://karagato-studios.github.io/Politicas_De_Privacidad_Apps/apps/retro-game-studio/terms.html` |
| **Directorio Legal de todas las Apps** | `https://karagato-studios.github.io/Politicas_De_Privacidad_Apps/legal/` |

---

## 🎮 Aspectos Clave de "Retro Game Studio"

### 1. Política de Privacidad para Google Play
- Cumple con los requerimientos de la política de Google Play sobre emuladores y herramientas de almacenamiento.
- Declara que los archivos de juegos (ROMs) y datos de partida se procesan **100% de forma local en el dispositivo** y jamás se transfieren a servidores externos.
- Incluye cláusulas sobre permisos de almacenamiento (`Storage Access Framework`), mandos Bluetooth y política de menores (`COPPA`).
- Incluye el procedimiento obligatorio de eliminación de datos (borrado de datos locales y desinstalación).

### 2. Documento de Quejas DMCA y Propiedad Intelectual
- Incluye el **descargo de responsabilidad legal (Disclaimer)** que aclara que la aplicación es un software independiente que **NO distribuye, enlaza ni vende ROMs ni material protegido**.
- Mención de marcas registradas de terceros (Nintendo, Sony, Sega, etc.) bajo la doctrina de **Uso Nominativo y Fair Use**.
- **Generador interactivo de queja DMCA:** los titulares de derechos o usuarios pueden llenar un formulario en la misma página web y hacer clic en **"Generar Correo de Notificación DMCA"**, lo cual prepara un correo formal con el texto legal requerido bajo la ley 17 U.S.C. § 512 dirigido al correo de Karagato Studios.

---

## ➕ Cómo añadir una nueva app en el futuro

Cuando desarrolles una nueva app:
1. Crea una carpeta en `apps/nombre-de-tu-app/`.
2. Puedes copiar los archivos de `apps/retro-game-studio/` y ajustar el nombre y permisos de la nueva aplicación.
3. Añade la tarjeta de la app en `index.html` (en la sección "Apps de Karagato") y en `legal/index.html`.
4. ¡Listo! Ya tendrás su política de privacidad con URL directa para Play Console.
