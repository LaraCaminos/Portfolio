PORTFOLIO · Caminos Lara Rosario
================================

Contenido
- index.html  → toda la web (HTML, CSS y JavaScript en un solo archivo)
- img/        → imágenes y videos de los proyectos
- cv/         → el CV en PDF

Abrirlo en VS Code
1. Descomprimí el .zip en una carpeta (por ejemplo: Documentos/portfolio).
2. Abrí VS Code → Archivo → Abrir carpeta… → elegí esa carpeta.
3. Instalá la extensión "Live Server" (Extensiones, ícono de cuadraditos a la izquierda → buscar "Live Server" de Ritwick Dey → Instalar).
4. Clic derecho sobre index.html → "Open with Live Server". Se abre en el navegador y se actualiza solo cada vez que guardás.
   (No abras index.html con doble clic: los videos y el CV necesitan un servidor, Live Server lo resuelve.)

Publicarlo gratis (GitHub Pages)
1. Creá una cuenta en github.com y un repositorio nuevo, público (ej.: portfolio).
2. "Add file" → "Upload files" → arrastrá TODO el contenido de la carpeta (index.html, img, cv). Commit.
   Si algún video pesa más de 25 MB, GitHub web no lo acepta: usá GitHub Desktop o subilo comprimido.
3. Settings → Pages → Source: "Deploy from a branch" → Branch: main / (root) → Save.
4. En 1–2 minutos queda en https://TU-USUARIO.github.io/portfolio/

Formulario de contacto
- Buscá en index.html la línea: const FORM_ENDPOINT = '';
- Creá un formulario gratis en formspree.io (o web3forms.com), copiá la URL que te dan y pegala entre las comillas.
  Mientras esté vacío, el formulario funciona como vista previa y no envía nada.

Notas
- Las tipografías vienen de Google Fonts: se necesita internet para verlas bien.
- Fuera de Claude, el botón "Descargar CV" baja el PDF directo, sin pedir permiso.
