function placeDot(){ const nav=document.querySelector('.pillnav'), d=nav&&nav.querySelector('.pill-dot'), a=nav&&nav.querySelector('.pill.is-active'); if(!d||!a) return; const n=nav.getBoundingClientRect(), r=a.getBoundingClientRect(); d.style.setProperty('--dx', (r.left-n.left+r.width/2-3)+'px'); }
  addEventListener('resize', () => placeDot()); addEventListener('load', () => placeDot()); document.fonts && document.fonts.ready.then(() => placeDot());

(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ——— Proyectos (placeholders de color sólido) ——— */
  // Cada proyecto usa la misma plantilla. Completá los campos y sumá imágenes/videos en "media".
  const projects = [
    {id:'electricidad-del-oeste', cardDesc:'Diseño gráfico integral: re-branding, animación de marca, impresos, redes, ploteo, señalética y web.', t:'Electricidad del Oeste', titleColor:'#1b4276', thumb:'img/thumbs/electricidad.png', thumbFit:'contain', thumbBg:'#0f3f74', thumbDark:true, thumbCls:'logo-sm', c:'Re-branding', y:'2025 – 2026', bg:'#d43737',
      lead:'Re-branding y creación de piezas impresas y digitales bajo un sistema visual y storytelling.',
      tipo:'Freelance', inst:'Electricidad del Oeste', rol:'Diseñadora gráfica integral', dur:'Mar 2025 – actualidad', equipo:'',
      bajada:'Diseño gráfico integral de la marca.', bajadaRecta:true,
      desc:['Electricidad del Oeste necesitaba una identidad que acompañara su crecimiento. El proyecto partió de un [[re-branding]] que redefine el logo, su comportamiento y su movimiento, y construye un [[sistema visual]] con conceptos claros y una voz propia para la marca.',
            'Ese sistema se aplica de forma coherente en [[cada punto de contacto]] —gráfico, físico y digital—, de modo que la marca se reconozca en todos sus soportes. Hoy el proyecto continúa con la [[renovación de la experiencia web]].'],
      meta:[['Disciplina','Freelance · Re-branding'],['Año','May 2025 – Oct 2026'],['Rol','Diseñadora gráfica integral'],['Cliente','Electricidad del Oeste']],
      ejes:'Re-branding / Identidad visual / Identidad de marca / Animación de marca / Motion graphics / Impresos / Papelería / Redes sociales / Contenido digital / Ploteo vehicular / Cartelería / Señalética / Diseño web',
      progs:['Illustrator','Photoshop','Figma','After Effects','Premiere Pro','Excel','Canva'],
      rows:[
        {cls:'fb-1 fb-vidw', items:[{video:'img/eo/eo-animacion.mp4', poster:'img/eo/eo-animacion-poster.jpg', alt:'Animación del logo de Electricidad del Oeste'}]},
        {cls:'fb-eo3', items:[{src:'img/eo/tarjetas.jpg', alt:'Tarjetas personales de Electricidad del Oeste, frente y dorso'},{video:'img/eo/stickers.mp4', poster:'img/eo/stickers-poster.jpg', alt:'Animación de los stickers de Electricidad del Oeste'},{src:'img/eo/tarjetitas.jpg', alt:'Flyers de agradecimiento y de opinión con QR'}]},
        {cls:'fb-3 fb-exh', items:[{src:'img/eo/exhibidor-mesa.jpg', alt:'Exhibidor acrílico Mesa de oportunidades'},{src:'img/eo/exhibidor-qr.jpg', alt:'Exhibidor acrílico con QR a la tienda online'},{src:'img/eo/exhibidor-oferta.jpg', alt:'Exhibidor acrílico de oferta hasta agotar stock'}]},
        {cls:'fb-merch', items:[{src:'img/eo/llavero.jpg', alt:'Llavero de cuero azul con el logo de Electricidad del Oeste'},{src:'img/eo/cinta.png', alt:'Cinta de embalaje azul con el logo de Electricidad del Oeste'}]},
        {cls:'fb-1 fb-web', items:[{video:'img/eo/web.mp4', poster:'img/eo/web-poster.jpg', alt:'Recorrido por el inicio de la tienda online de Electricidad del Oeste'}]},
        {cls:'fb-ig fb-ig3 fb-igl', items:[{src:'img/eo/ig-1.jpg', alt:'Posteo de Instagram: oferta de cable hasta agotar stock'},{src:'img/eo/ig-2.jpg', alt:'Posteo de Instagram: tutorial cómo instalar un foco'},{src:'img/eo/ig-3.jpg', alt:'Posteo de Instagram: tip para elegir la intensidad de la luz'}]},
        {cls:'fb-full fb-van', items:[{src:'img/eo/camioneta.jpg', alt:'Ploteo de camioneta de Electricidad del Oeste: lateral izquierdo, trasera y lateral derecho'}]},
        {cls:'fb-vanm', items:[{src:'img/eo/camioneta-lat-izq.jpg', alt:'Ploteo de camioneta, lateral izquierdo'},{src:'img/eo/camioneta-trasera.jpg', alt:'Ploteo de camioneta, trasera'},{src:'img/eo/camioneta-lat-der.jpg', alt:'Ploteo de camioneta, lateral derecho'}]},
        {cls:'fb-full fb-sign', items:[{src:'img/eo/senaletica.jpg', alt:'Cartel de estacionamiento para clientes y proveedores de Electricidad del Oeste'}]},
      ]},
    {id:'congreso-ddhh', bajadaRecta:true, cardDesc:'Experiencia inmersiva para el Congreso Latinoamericano de Derechos Humanos.', t:'Memorias del espacio', logo:'img/memorias/memorias-titulo.png', logoCls:'logo-wide', bajada:'Congreso Latinoamericano de Derechos Humanos.', thumb:'img/thumbs/memorias.jpg', thumbDark:true, dark:true, c:'Inmersivo', y:'2026', bg:'var(--pc6)',
      lead:'Diseño de experiencia inmersiva para Congreso Latinoamericano en el marco de los derechos humanos.',
      tipo:'Encargo', inst:'Universidad Torcuato Di Tella', rol:'Diseñadora integral inmersiva', dur:'Mar – Jul 2026', equipo:'',
      desc:['Experiencia inmersiva en el MediaLab a [[50 años de la última dictadura militar argentina]]. Un proyecto inmersivo que [[transforma la forma de experimentar la historia y la memoria]].',
            'Realizado en conjunto entre el MediaLab de la Escuela de Diseño y el Laboratorio de Historia Pública y Digital (DEHyS), la experiencia combina [[diseño visual con rigor histórico]] y reflexiona a través de tres ejes: la historia reciente, la memorialización del espacio y el potencial del diseño para [[ensayar formas interactivas de pensar nuestro pasado y presente]].'],
      meta:[['Disciplina','Encargo · Inmersivo'],['Año','Abr – Jul 2026'],['Rol','Diseñadora integral inmersiva'],['Equipo','Docentes y licenciados / exalumnos · Universidad Torcuato Di Tella']],
      ejes:'Experiencia inmersiva / Diseño de experiencia / Memoria / Historia reciente / Derechos humanos / Storytelling / Storyboard / Video / Visuales / Motion graphics / Mapping / Proyección / Espacio',
      progs:['Illustrator','Photoshop','After Effects','Figma','Resolume Arena'],
      rows:[
        {cls:'fb-full', items:[{src:'img/memorias/grupo.jpg', alt:'Foto grupal en la sala al cierre del congreso'}]},
        {cls:'fb-3', items:[{src:'img/memorias/diarios-1.jpg', alt:'Visitantes frente a las proyecciones de diarios de época'},{src:'img/memorias/diarios-2.jpg', alt:'Proyección de archivo con paisaje y siluetas de visitantes'},{src:'img/memorias/diarios-3.jpg', alt:'Detalle de tapas de diarios proyectadas en la esquina de la sala'}]},
        {cls:'fb-1 fb-vidloop', items:[{video:'img/memorias/memorias-recorrido.mp4', poster:'img/memorias/memorias-recorrido-poster.jpg', alt:'Recorrido por las escenas de Memorias del espacio'}]},
        {cls:'fb-3', items:[{src:'img/memorias/particulas-1.jpg', alt:'Visitantes entre proyecciones de partículas luminosas'},{src:'img/memorias/particulas-2.jpg', alt:'Sala oscura con nube de partículas'},{src:'img/memorias/particulas-3.jpg', alt:'Público recorriendo la proyección de fachadas de archivo'}]},
        {cls:'fb-3', items:[{src:'img/memorias/madres.jpg', alt:'Proyección de las Madres de Plaza de Mayo rodeando la sala'},{src:'img/memorias/sala-roja.jpg', alt:'Escena en rojo con visitantes en silueta'},{src:'img/memorias/casa.jpg', alt:'Proyección del interior de una casa'}]},
        {note:['Proceso','','Cabina de control y operación en vivo']},
        {cls:'fb-3', items:[{src:'img/memorias/cabina-1.jpg', alt:'Monitor con el patch de TouchDesigner frente a la sala'},{src:'img/memorias/cabina-2.jpg', alt:'Operación en vivo desde la cabina'},{src:'img/memorias/cabina-3.jpg', alt:'Cabina de control durante la experiencia'}]},
        {cls:'fb-full', items:[{src:'img/memorias/entrada.jpg', alt:'Ingreso a la sala azul con el título Memorias del espacio proyectado'}]},
        {cls:'fb-cierre', items:[{src:'img/memorias/lara-creditos.jpg', alt:'Lara frente a los créditos proyectados de la experiencia'},{src:'img/memorias/equipo.jpg', alt:'El equipo de diseño frente al título proyectado'},{src:'img/memorias/equipo-creditos.jpg', alt:'Parte del equipo de diseño junto a los créditos proyectados'}]},
        {press:[['Espacios que guardan la memoria: una experiencia inmersiva reconstruye las huellas de la dictadura','https://www.lanacion.com.ar/cultura/espacios-que-guardan-la-memoria-una-experiencia-inmersiva-reconstruye-las-huellas-de-la-dictadura-nid13102026/','La Nación · 13 Oct 2026'],['“Memorias del espacio”, experiencia inmersiva','https://www.pagina12.com.ar/2026/09/15/memorias-del-espacio-experiencia-inmersiva/','Página/12 · 15 Sep 2026']]},
      ]},
    {id:'tesis-agronomia', cardDesc:'Tesis: sistema modular que lee el predio de Agronomía como un organismo vivo.', t:'Módulo Vivo', logo:'img/tesis/modulo-vivo-logo.png', logoCls:'logo-inline',
      texture:{variant:'circle', pixelSize:4, color:'#d6e5da', accentColor:'#f2c9e0', patternScale:2.4, patternDensity:0.95, softness:0.7, glow:0.12, twinkle:0.2, speed:0.3, drift:0.15, driftAngle:20, hoverEffect:'reveal', hoverRadius:120, rippleIntensityScale:0.7, edgeFade:0.3, lightMode:true}, c:'Tesis', y:'2025', bg:'var(--pc7)', yt:'m_Y64IE7_co', thumb:'img/tesis/tesis-thumb.jpg',
      lead:'Proyecto de tesis donde se desarrolla un sistema modular a partir de la lectura del predio de Agronomía como organismo vivo.',
      bajada:'Agronomía leída como un organismo vivo.',
      desc:['Proyecto de tesis donde se desarrolla un [[sistema modular]] a partir de la lectura del predio de Agronomía como [[organismo vivo]]. El módulo permite abordar distintas problemáticas mediante variaciones formales. Agronomía se entiende como un organismo vivo donde cada sector actúa como un [[órgano vital]] dentro del sistema urbano.',
            'A partir de la lectura del predio como un cuerpo —identificando zonas de tensión, desgaste y deterioro— se diseña un módulo capaz de [[adaptarse y responder a distintas situaciones]]. La repetición y variación construyen una estructura común que evidencia un [[equilibrio interdependiente]], donde cada parte cumple una función específica en la estabilidad y funcionamiento del todo.'],
      tipo:'Tesis', inst:'Universidad Torcuato Di Tella', rol:'', dur:'', equipo:'',
      meta:[['Disciplina','Diseño Integral · Tesis'],['Año','2.º cuatrimestre 2025'],['Sitio','Facultad de Agronomía'],['Realizado junto a','Gonzalez Santín Magalí · Tricerri Pilar']],
      ejes:'Proyecto Integrador / Trabajo en equipo / Cultura / Usuario / Función / Experimentación / Sistema / Módulo / Organismo / Identidad visual / Señalética / Diseño editorial / App / UX/UI',
      progs:['Illustrator','After Effects','Photoshop','Figma','Rhinoceros 7','KeyShot','Twinmotion'], award:'Trabajo Destacado — Muestra Anual · 2025',
      rows:[
        {cls:'fb-1w gw', items:[{src:'img/tesis/tunel-pareja.jpg', alt:'Recorrido por el corredor, el solado se disgrega hacia el césped'}]},
        {note:['¿Por qué un módulo?','Un módulo es una forma que, al repetirse, crea una composición mayor. Funciona como una [[unidad de medida]] para organizar elementos, generando armonía, unidad y consistencia visual. Los módulos pueden ser idénticos o variar ligeramente.']},
        {cap:['Corredor','Una estructura que combina [[tubos de acero al carbono y chapa acanalada]] generando una trama variable en tamaños y distancias. La estructura se combina con una serie de enredaderas que crecen sobre la misma generando [[mayor fluidez y conexión natural]].','Sistema cardiovascular'], cls:'fb-2w gw', items:[{src:'img/tesis/tunel-exterior.jpg', alt:'Vista exterior del corredor cubierto de enredaderas'},{src:'img/tesis/tunel-frente.jpg', alt:'Paseo P. Arata: túnel de estructura calada con enredaderas y señalética'}]},
        {cap:['Baldosas','Replicando la contraforma de la trama y en busca de una [[integración y apropiación del espacio]], un sistema de baldosas se expande a lo largo del predio marcando los [[caminos recorribles por los peatones]].','Sistema cardiovascular'], cls:'fb-2w gb', items:[{src:'img/tesis/avenida-noche.jpg', alt:'Vista aérea nocturna de la avenida con las baldosas iluminadas'},{src:'img/tesis/tunel-noche.jpg', alt:'El corredor de noche, con el solado iluminado'}]},
        {yt:'m_Y64IE7_co'},
        {cls:'fb-3 gw', items:[{src:'img/tesis/puente.jpg', alt:'Paso bajo el tren elevado, con el mismo solado', cap:['Un túnel','La propuesta reorganiza la circulación dentro del predio de Agronomía y Veterinaria mediante la [[elevación del tren]], separando el recorrido ferroviario del tránsito peatonal y vehicular. Esto permite una [[circulación continua y fluida]], evitando interrupciones y mejorando la conexión entre ambos lados del predio. Además, reduce el impacto sobre las huertas y evita intervenciones de gran complejidad estructural y operativa.','Sistema cardiovascular']},{src:'img/tesis/feria.jpg', alt:'Feria montada sobre la estructura del corredor', cap:['Una feria','Aprovechando la superficie generada para los corredores o los límites internos, se diseñan una serie de [[accesorios que permiten montar la feria]] sobre ella evitando el traslado de cada gazebo, generando a su vez más espacio de circulación y mejorando el [[orden interno y la jerarquización de los puestos]].','Sistema muscular']},{src:'img/tesis/parque-feria.jpg', alt:'La feria junto al parque abierto', cap:['Una feria','Aprovechando la superficie generada para los corredores o los límites internos, se diseñan una serie de [[accesorios que permiten montar la feria]] sobre ella evitando el traslado de cada gazebo, generando a su vez más espacio de circulación y mejorando el [[orden interno y la jerarquización de los puestos]].','Sistema muscular']}]},
        {quote:true, note:['Un organismo funcional','Un cuerpo funcional sano tiene: [[memoria, (re)conocimiento y sentido de orientación.]] Un cuerpo funcional sano se comunica.']},
        {side:['Señalética','Información sobre paseos de Agronomía, ingreso al predio de Agronomía, señalización de zonas y mapa de\u00a0zonas\u00a0de\u00a0Agronomía.','Identidad gráfica'], cap:['Señalética','Información sobre paseos de Agronomía, ingreso al predio de Agronomía, señalización de zonas y mapa de\u00a0zonas\u00a0de\u00a0Agronomía.','Identidad gráfica'], items:[{src:'img/tesis/ingreso.jpg', alt:'Ingreso al predio con pilares intervenidos y señalética'}], stack:[{src:'img/tesis/identidad-sistema.jpg', alt:'Identidad de Módulo Vivo: isotipo, tipografía Agronomía, Roboto Condensed y paleta de color'},{src:'img/tesis/iconos-alfabeto.jpg', alt:'Íconos de recorridos y zonas y alfabeto modular de Módulo Vivo'}], stackCap:['Identidad','Isotipo y tipografía display construidos con las [[mismas piezas del módulo]], acompañados por Roboto Condensed y una paleta tomada del predio. Un sistema de íconos organiza los recorridos —Paseo, Corrida, Descanso— y las zonas —Plantas, Huertas, Estructuras, Parques—.','Identidad gráfica']},
        {case:['Libro','Conociendo un poco más de Agronomía. Libro [[“La historia de la Facultad de Agronomía de la Universidad de Buenos Aires”]]: tapa y doble página “FAUBA hoy · Un predio que sigue creciendo”.','Identidad gráfica'], cap:['Libro','Conociendo un poco más de Agronomía. Libro [[“La historia de la Facultad de Agronomía de la Universidad de Buenos Aires”]]: tapa y doble página “FAUBA hoy · Un predio que sigue creciendo”.','Identidad gráfica'], cls:'fb-libro', items:[{src:'img/tesis/libro-tapa.jpg', alt:'Tapa del libro La historia de la Facultad de Agronomía de la UBA'},{src:'img/tesis/libro-interior.jpg', alt:'Doble página FAUBA hoy: un predio que sigue creciendo'}]},
        {side:['App móvil','Conocer y recorrer Agronomía. La aplicación busca funcionar como [[guía de recorridos]], exploración de flora y fauna y [[generación de comunidad]] a través de la comunicación.','Sistema respiratorio'], light:true, cap:['App móvil','Conocer y recorrer Agronomía. La aplicación busca funcionar como [[guía de recorridos]], exploración de flora y fauna y [[generación de comunidad]] a través de la comunicación. A la izquierda, la pantalla de inicio y la sección Me gusta; a la derecha, el sistema de pantallas en movimiento: mapa del predio, recorridos guiados, fichas de árboles y espacios verdes y agenda de eventos.','Sistema respiratorio'], items:[{video:'img/tesis/app-composicion.mp4', poster:'img/tesis/app-composicion-poster.jpg', alt:'App móvil de Agronomía: pantalla de inicio y sección Me gusta junto a la grilla de pantallas de la app en movimiento'}]}
      ]},
    {id:'papelon', bajadaLine:true, descTight:true, bajadaRecta:true, cardDesc:'Sistema de identidad cultural: revistas, objetos encartados y una revistería intervenida en el espacio público.', t:'Papelon', dark:true, thumb:'img/thumbs/papelon.png', thumbFit:'contain', thumbBg:'#b91e1e', c:'Branding', y:'2025', bg:'#910000', yt:'LTIVhC-pp9s',
      lead:'Sistema de identidad cultural basado en la curaduría de la colección de Fundación IDA.', tipo:'Diseño Gráfico', inst:'', rol:'', dur:'', equipo:'',
      bajada:'Sistema de identidad cultural basado en la curaduría y selección de 15 objetos de la colección de Fundación IDA.', bajadaCorta:'Identidad cultural desde la colección de Fundación IDA.',
      desc:['“Papelón” [[resignifica lo que fue señalado como exceso]] para convertirlo en posicionamiento. Desde una fuerza disidente —política, corporal y estética— reúne expresiones que incomodan lo normativo y vuelven lo rechazado lenguaje y pertenencia.',
            'Desde una lógica editorial, desarrolla un sistema de piezas que retoma la [[intensidad gráfica de las revistas de los años 80]] —saturación, collage, tipografía expresiva— para amplificar una voz que no busca encajar, sino [[irrumpir y persistir]].'],
      meta:[['Disciplina','Diseño Gráfico · Editorial'],['Año','1.º cuatrimestre 2025'],['Formato','Revistas · Objetos · Revistería'],['Realizado junto a','Acosta Camila · Mildiner Brenda']],
      ejes:'Concepto / Identidad de marca / Diseño Editorial / Dirección de arte / Afiche / Gráfica / Fanzine / Branding / Storytelling / Redes sociales / Objeto / Espacio público / Instalación',
      progs:['Illustrator','Photoshop','After Effects','Blender','Reaper','Figma'], award:'Video Destacado — Muestra Anual · 2025',
      rows:[
        {yt:'LTIVhC-pp9s'},
        {side:['Revista editorial','Cuatro ediciones —Performance, Musical, Gráfica, Organización— con su propio color y su propio pulso, sin perder [[coherencia sistémica]]. La referencia a las publicaciones contraculturales argentinas de los 80 no es nostalgia sino decisión formal: collage, tipografía desbordada, páginas que compiten consigo mismas. Cada número cierra con un [[objeto encartado]] que extiende la identidad más allá de la lectura.','Cuatro ediciones'], cap:['Revista editorial','Cuatro ediciones —Performance, Musical, Gráfica, Organización— con su propio color y su propio pulso, sin perder [[coherencia sistémica]]. La referencia a las publicaciones contraculturales argentinas de los 80 no es nostalgia sino decisión formal: collage, tipografía desbordada, páginas que compiten consigo mismas. Cada número cierra con un [[objeto encartado]] que extiende la identidad más allá de la lectura.','Cuatro ediciones'], items:[{video:'img/papelon/tapas.mp4', poster:'img/papelon/tapas-poster.jpg', alt:'Animación de las tres tapas de revista de Papelon dentro de una estrella'}]},
        {cap:['Revista editorial','Cuatro ediciones —Performance, Musical, Gráfica, Organización— con su propio color y su propio pulso, sin perder [[coherencia sistémica]]. La referencia a las publicaciones contraculturales argentinas de los 80 no es nostalgia sino decisión formal: collage, tipografía desbordada, páginas que compiten consigo mismas. Cada número cierra con un [[objeto encartado]] que extiende la identidad más allá de la lectura.','Cuatro ediciones'], cls:'fb-3v fb-black gb', items:[{video:'img/papelon/revista-1.mp4', poster:'img/papelon/revista-1-poster.jpg', alt:'Revista Papelon N°3: Detrás del gesto, interiores en movimiento'},{video:'img/papelon/revista-2.mp4', poster:'img/papelon/revista-2-poster.jpg', alt:'Revista Papelon N°2: Detrás del telón, interiores en movimiento'},{video:'img/papelon/revista-3.mp4', poster:'img/papelon/revista-3-poster.jpg', alt:'Revista Papelon N°1: Noche, interiores en movimiento'}]},
        {note:['Regalos semanales','']},
        {cap:['Regalos semanales','El desafío era diseñar objetos que no fueran merchandising sino [[piezas con argumento propio]]: formatos que citan al juguete de kiosco, al CD de promoción, al fanzine fotocopiado. Objetos que te identifican sin que tengas que explicar demasiado.','Objetos encartados'], cls:'fb-h', items:[{src:'img/papelon/kit.webp', alt:'Papelonera Kit: blíster con llavero de conejo, sombra, pluma, labial y guantes de red'},{src:'img/papelon/cd-frente.png', alt:'CD de promoción: lo último de los artistas papeloneros en un solo disco'},{src:'img/papelon/cd-dorso.png', alt:'CD de promoción, dorso con el logo de Papelon'},{src:'img/papelon/afiche.jpg', alt:'Afiche fanzine: ¿Por qué son tan geniales?'}]},
        {note:['Redes sociales','']},
        {cls:'fb-ig fb-ig3', rotate:true, items:[{src:'img/papelon/ig-1.jpg', alt:'Posteo de Instagram: Todo está muy normal'},{src:'img/papelon/ig-2.jpg', alt:'Posteo de Instagram: próximo encuentro en la Facultad de Derecho'},{src:'img/papelon/ig-3.jpg', alt:'Posteo de Instagram: Me meto en tu cabeza sin querer'},{src:'img/papelon/ig-4.jpg', alt:'Posteo de Instagram: figuras coleccionables de artistas papeloneros'},{src:'img/papelon/ig-5.jpg', alt:'Posteo de Instagram: boca con lengua de puntos'}]},
        {side:['La revistería','El punto de encuentro tomó la forma de una [[revistería intervenida]] e instalada en el espacio público. La pieza integra los objetos y las revistas del sistema en un único soporte físico: laterales iluminados con las tapas de cada edición, el logo expandido en grafiti sobre el módulo central, pantalla táctil para navegar la colección y tocadiscos en el mostrador.','Espacio público'], cap:['La revistería','El punto de encuentro tomó la forma de una [[revistería intervenida]] e instalada en el espacio público. La pieza integra los objetos y las revistas del sistema en un único soporte físico: laterales iluminados con las tapas de cada edición, el logo expandido en grafiti sobre el módulo central, pantalla táctil para navegar la colección y tocadiscos en el mostrador.','Espacio público'], items:[{src:'img/papelon/revisteria-frente.jpg', alt:'La revistería de Papelon en la calle: laterales iluminados con tapas y mostrador con las revistas'}]},
        {cap:['La revistería','El punto de encuentro tomó la forma de una [[revistería intervenida]] e instalada en el espacio público. La pieza integra los objetos y las revistas del sistema en un único soporte físico: laterales iluminados con las tapas de cada edición, el logo expandido en grafiti sobre el módulo central, pantalla táctil para navegar la colección y tocadiscos en el mostrador.','Espacio público'], cls:'fb-3', items:[{src:'img/papelon/revisteria-ojo.jpg', alt:'Lateral de la revistería con un ojo calado y la puerta Ahora me ves'},{src:'img/papelon/revisteria-grafiti.jpg', alt:'Módulo central con el logo de Papelon expandido en grafiti'},{src:'img/papelon/revisteria-lateral.jpg', alt:'Lateral con Historias de resistencia en el caos y sticker wall'}]},
        {cap:['La revistería','El punto de encuentro tomó la forma de una [[revistería intervenida]] e instalada en el espacio público. La pieza integra los objetos y las revistas del sistema en un único soporte físico: laterales iluminados con las tapas de cada edición, el logo expandido en grafiti sobre el módulo central, pantalla táctil para navegar la colección y tocadiscos en el mostrador.','Espacio público'], cls:'fb-2w', items:[{src:'img/papelon/revisteria-mostrador.jpg', alt:'Mostrador con tocadiscos, objetos colgados y revistas'},{src:'img/papelon/revisteria-historia.jpg', alt:'Lateral iluminado Historia papelonera con revistas contraculturales'}]},
      ]},
    {id:'silla-rastro', cardDesc:'Silla de madera que reinterpreta la morfología clásica desde la circularidad. Exhibida en el Museo Moderno.', t:'Silla Rastro', c:'Mobiliario', y:'2025', bg:'var(--pc5)', on:'var(--pc5on)', yt:'SnTluUjbjXg',
      logo:'img/rastro/rastro-logo.png', logoCls:'logo-inline', tipo:'Diseño Industrial', thumb:'img/rastro/silla-thumb.jpg',
      bajada:'Diseño de mobiliario basado en el reflejo de un diseño integral.', bajadaCorta:'Mobiliario desde el reflejo de un diseño integral.',
      desc:['Diseñar desde lo existente implica [[volver a mirar lo cotidiano]] como un territorio de posibilidades. “Rastro” toma la morfología clásica de la silla y la desplaza hacia nuevas lecturas, explorando [[lo impensado desde lo familiar]].',
            'A través del uso de [[materiales tradicionales como la madera]], reinterpretados desde [[la circularidad y la continuidad]], el objeto deja de responder a una lógica rígida para convertirse en una búsqueda formal que [[resignifica su estructura y su presencia]].'],
      meta:[['Disciplina','Diseño Industrial · Mobiliario'],['Año','1.º cuatrimestre 2025'],['Realizado junto a','Acosta Camila · Mildiner Brenda · Selva Maria']],
      ejes:'Diseño industrial / Mobiliario / Cultura / Usuario / Función / Experimentación / Materialidad / Ergonomía / Prototipado / Modelado 3D / Proceso productivo / Objeto',
      progs:['Illustrator','Rhinoceros 7','Figma','KeyShot'], award:'Exhibición — Museo Moderno, Buenos Aires',
      rows:[
        {cls:'fb-211', items:[{src:'img/rastro/silla-horizontal.jpg', alt:'Silla Rastro de madera con asiento tejido, vista tres cuartos'},{src:'img/rastro/silla-espalda.jpg', alt:'Rastro, vista posterior'}]},
        {note:['Origen','La dupla del diseño original más una versión espejada permite [[conversar cara a cara]] de forma cómoda. Y si agregamos un segundo par, podemos formar una ronda de personas. De esta forma Rastro se convierte en un sistema que [[fomenta la conexión con un gesto simple]].']},
        {yt:'SnTluUjbjXg'},
        {cls:'fb-4', items:[{src:'img/rastro/detalle-respaldo.jpg', alt:'Detalle del respaldo'},{src:'img/rastro/detalle-union.jpg', alt:'Detalle de la unión entre brazo y parante'},{src:'img/rastro/detalle-trenzado.jpg', alt:'Detalle del tejido del asiento'},{src:'img/rastro/detalle-cruceta.jpg', alt:'Detalle de la cruceta de la base'}]},
        {cls:'fb-121', items:[{src:'img/rastro/retrato.jpg', alt:'Rastro en uso: usuaria sentada en la silla'},{video:'img/rastro/rastro-collage.mp4', poster:'img/rastro/rastro-collage-poster.jpg', alt:'Collage animado con fotos de la silla y del equipo'},{src:'img/rastro/equipo.jpg', alt:'El equipo de diseño junto a la silla'}]},
      ]},
    {id:'rampa-publicitaria', logo:'img/siemprelibre/logo.png', logoCls:'logo-inline', cardDesc:'Freelance para Kenvue: visual de la rampa publicitaria de Siempre Libre en el ingreso a un shopping.', t:'Siempre Libre', thumb:'img/thumbs/siemprelibre.jpg', thumbDark:true, bajada:'Rampa publicitaria.', bajadaRecta:true, c:'Espacio publicitario', y:'2026', bg:'var(--pc5)', on:'var(--pc5on)',
      lead:'Estética visual de la rampa publicitaria para los nuevos packs de Siempre Libre.', tipo:'Freelance', inst:'', rol:'', dur:'', equipo:'',
      desc:['Campaña publicitaria para los nuevos packs de Siempre Libre, pensada específicamente para la [[rampa de ingreso a un shopping]]. La estética que se venía desarrollando no convencía a la marca, por lo que, a partir de una idea base de la agencia de marketing, se planteó una [[nueva propuesta visual]]: la toallita, los elementos y la esencia de la marca, con una mirada más innovadora.',
            'Con la dirección del área de marketing, se desarrolló la visual y el [[archivo imprimible]] para la empresa encargada de producir e instalar la rampa.'],
      ejes:'Campaña publicitaria / Dirección de arte / Visual / Identidad de marca / Estética / Comunicación visual / Señalética / Espacio publicitario / Gran formato / Retoque digital / Archivo de impresión',
      meta:[['Disciplina','Freelance · Espacio publicitario'],['Año','Sep – Oct 2026'],['Cliente','Kenvue · Siempre Libre'],['Rol','Dirección de arte y archivo de impresión']],
      rows:[
        {cap:['Rampa publicitaria','Rampa de ingreso con la campaña “Que nada te detenga”: los nuevos packs Confort Ultrafina (8 h) y Confort Nocturno (10 h) de Siempre Libre.','Siempre Libre'], cls:'fb-slrow', items:[{src:'img/siemprelibre/rampa-exterior.jpg', alt:'Rampa exterior con la gráfica Que nada te detenga y el pack Confort Ultrafina'},{src:'img/siemprelibre/rampa-pasillo.jpg', alt:'Pasillo de la rampa con las dos gráficas enfrentadas'}]},
        {note:['Pared izquierda','','Confort Ultrafina']},
        {cls:'fb-slw', items:[{src:'img/siemprelibre/pared-izq-2.jpg', alt:'Visual original de la pared izquierda, versión Confort Ultrafina'}]},
        {note:['Pared derecha','','Confort Ultrafina']},
        {cls:'fb-slw', items:[{src:'img/siemprelibre/pared-der-2.jpg', alt:'Visual original de la pared derecha, versión Confort Ultrafina'}]}
      ],
      progs:['Illustrator','Photoshop']},
    {id:'biodata', cardDesc:'Experiencia inmersiva e interactiva sobre las espirales logarítmicas en la naturaleza.', thumb:'img/thumbs/biodata.jpg', thumbDark:true, dark:true, descFlow:true, t:'Biodata', c:'Experiencia inmersiva', y:'2025', bg:'#b22a2a', yt:'7ZasVYzO5xA',
      lead:'Experiencia inmersiva e interactiva.', tipo:'', inst:'', rol:'', dur:'', equipo:'',
      bajada:'Espirales logarítmicas en la naturaleza.',
      desc:['Es una [[experiencia inmersiva e interactiva]] que vincula los sistemas naturales y principios matemáticos, con énfasis en la [[espiral\u00a0logarítmica]] como patrón geométrico recurrente en la morfogénesis biológica. A lo largo de cuatro escenarios temáticos, se exploran fenómenos donde la estructura, el crecimiento y la dinámica de lo vivo responden a leyes matemáticas precisas como la [[sucesión de Fibonacci]], la proporción\u00a0áurea y modelos de crecimiento logarítmico.',
            'Cada espacio propone una [[interacción sensorial y visual]] que permite comprender físicamente estas configuraciones auto-organizativas, revelando cómo la matemática no solo describe la naturaleza, sino que [[la estructura desde sus niveles fundamentales]].'],
      meta:[['Disciplina','Diseño Inmersivo e interactivo'],['Año','1.º cuatrimestre 2025'],['Formato','Sala inmersiva · 4 escenas'],['Realizado junto a','Barrio Martina · Monteverdi Lara · Park Julieta']],
      ejes:'Proyecto Inmersivo / Trabajo en equipo / Experimentación / Usuario / Identidad visual / Información / Sala\u00a0Inmersiva / Interacción / Naturaleza / Storytelling / Diseño generativo / Tiempo real',
      progs:['Illustrator','Photoshop','After Effects','Figma','TouchDesigner','Resolume Arena'],
      rows:[
        {cls:'fb-full', items:[{src:'img/biodata/intro.jpg', alt:'Escena de inicio de Biodata: girasol, mariposa y caracol de partículas en la sala'}]},
        {yt:'7ZasVYzO5xA'},
        {case:['Caso 1 · Huracanes','El huracán se manifiesta como un [[sistema\u00a0complejo y dinámico]]. Para comprender su complejidad, se puede visualizar en niveles: curso del viento, temperatura y humedad, isobaras y estructura\u00a0fractal. Generá tu propio huracán haciendo pinch con tu mano.','Niveles'], items:[{src:'img/biodata/huracan-niveles.jpg', alt:'Escena Huracán: globo terráqueo con los cuatro niveles'},{src:'img/biodata/huracan-pinch.jpg', alt:'Escena Huracán: el usuario genera su propio huracán'}]},
        {case:['Caso 2 · Mariposa','Las mariposas vuelan en forma de [[espirales vinculadas a Fibonacci]]. Hacé pinch para ver la proporción.','Secuencia de vuelo'], items:[{src:'img/biodata/mariposa-1.jpg', alt:'Escena Mariposa: secuencia de vuelo'},{src:'img/biodata/mariposa-2.jpg', alt:'Escena Mariposa: proporción del vuelo en espiral'}]},
        {case:['Caso 3 · Caracoles','La forma de cada especie es definida por ciertos [[parámetros de crecimiento]]. Tales como el diámetro del tubo y la tasa de expansión vertical del mismo. Hacé swipe con tu mano para cambiar de especie.','Crecimiento'], items:[{src:'img/biodata/caracol-nautilus.jpg', alt:'Escena Caracoles: cefalópodo, especie Nautilus'},{src:'img/biodata/caracol-pecten.jpg', alt:'Escena Caracoles: bivalvo, especie Pecten'}]},
        {case:['Caso 4 · Girasoles','Las semillas del girasol forman unas [[espirales con patrón\u00a0áureo]]. Generá la espiral moviendo la mano.','Phyllotaxis'], items:[{src:'img/biodata/girasol-espiral-inicio.jpg', alt:'Escena Girasoles: la espiral empieza a generarse'},{src:'img/biodata/girasol-espiral.jpg', alt:'Escena Girasoles: filas de 21 y 34 semillas'}]},
        {note:['En sala','']},
        {cls:'fb-5', items:[1,2,3,4,5].map(n=>({src:'img/biodata/sala-'+n+'.jpg', alt:'Usuaria interactuando con Biodata en la sala'}))},
        {cls:'fb-2w', items:[{src:'img/biodata/sala-6.jpg', alt:'Escena Caracoles proyectada en la sala'},{src:'img/biodata/sala-7.jpg', alt:'Usuaria generando un caracol en la sala'}]}
      ]},
    {id:'vj-en-vivo', dark:true, cardDesc:'Visuales en tiempo real: el contraste entre un audio lento y grave y una imagen acelerada que se degrada hasta el quiebre.', thumb:'img/thumbs/vj.jpg', thumbDark:true, t:'Latencia Rota', c:'VJ · Tiempo real', y:'2025', bg:'#1a1a1a', yt:'wWE_qV_H6Z8',
      lead:'Diseño de visuales en tiempo real.', tipo:'Proyecto académico', inst:'Universidad Torcuato Di Tella', rol:'VJ', dur:'Mar 2025', equipo:'',
      bajada:'Diseño de visuales en tiempo real.', bajadaRecta:true,
      desc:['Este trabajo investiga la [[tensión entre la percepción auditiva y visual]], utilizando un contraste entre la lentitud y los graves del audio y una intensidad visual acelerada que se degrada progresivamente.',
            'A través de esta [[disonancia sensorial]], se genera una experiencia inmersiva que desafía las expectativas del público, amplificando la sensación de agresión y desorientación [[hasta un punto de quiebre]].'],
      meta:[['Disciplina','VJ · Visuales en tiempo real · Lab VII'],['Año','1.º cuatrimestre 2025'],['Formato','Visuales sensoriales lumínicas · Sonido binaural · Loop 3 min'],['Espacio','Sala de 8,73 × 9,93 m · Parrilla de 8 proyectores']],
      ejes:'VJ / Visuales en vivo / Tiempo real / Experiencia inmersiva / Percepción / Sonido binaural / Mapping / Proyección / Loop / Motion graphics / Composición / Experimentación / Arte digital',
      rows:[
        {yt:'wWE_qV_H6Z8'},
        {note:['Secuencia','','Visuales en tiempo real']},
        {cls:'fb-seq', items:[{src:'img/latencia/latencia-1.jpg', alt:'Visual de Latencia Rota: elipse de partículas claras que se degrada'},{src:'img/latencia/latencia-2.jpg', alt:'Visual de Latencia Rota: elipse oscura con bordes quebrados'},{src:'img/latencia/secuencia-01.jpg', alt:'Secuencia de Latencia Rota, cuadro 1'},{src:'img/latencia/secuencia-02.jpg', alt:'Secuencia de Latencia Rota, cuadro 2'},{src:'img/latencia/secuencia-03.jpg', alt:'Secuencia de Latencia Rota, cuadro 3'},{src:'img/latencia/secuencia-04.jpg', alt:'Secuencia de Latencia Rota, cuadro 4'},{src:'img/latencia/secuencia-05.jpg', alt:'Secuencia de Latencia Rota, cuadro 5'},{src:'img/latencia/secuencia-06.jpg', alt:'Secuencia de Latencia Rota, cuadro 6'},{src:'img/latencia/secuencia-07.jpg', alt:'Secuencia de Latencia Rota, cuadro 7'},{src:'img/latencia/secuencia-08.jpg', alt:'Secuencia de Latencia Rota, cuadro 8'},{src:'img/latencia/secuencia-09.jpg', alt:'Secuencia de Latencia Rota, cuadro 9'},{src:'img/latencia/secuencia-10.jpg', alt:'Secuencia de Latencia Rota, cuadro 10'},{src:'img/latencia/secuencia-11.jpg', alt:'Secuencia de Latencia Rota, cuadro 11'},{src:'img/latencia/secuencia-12.jpg', alt:'Secuencia de Latencia Rota, cuadro 12'},{src:'img/latencia/secuencia-13.jpg', alt:'Secuencia de Latencia Rota, cuadro 13'},{src:'img/latencia/secuencia-14.jpg', alt:'Secuencia de Latencia Rota, cuadro 14'},{src:'img/latencia/secuencia-15.jpg', alt:'Secuencia de Latencia Rota, cuadro 15'},{src:'img/latencia/secuencia-16.jpg', alt:'Secuencia de Latencia Rota, cuadro 16'},{src:'img/latencia/secuencia-17.jpg', alt:'Secuencia de Latencia Rota, cuadro 17'},{src:'img/latencia/secuencia-18.jpg', alt:'Secuencia de Latencia Rota, cuadro 18'},{src:'img/latencia/secuencia-19.jpg', alt:'Secuencia de Latencia Rota, cuadro 19'},{src:'img/latencia/secuencia-20.jpg', alt:'Secuencia de Latencia Rota, cuadro 20'}]}
      ],
      progs:['Photoshop','After Effects','Premiere Pro','Resolume Arena','Resolume Alley']},
    {id:'elektrobank', dark:true, cardDesc:'Pieza audiovisual con sonido binaural: visuales sobre un audio a partir de videos propios y el concepto de lo callejero.', thumb:'img/thumbs/elektrobank.jpg', thumbDark:true, t:'Elektrobank', c:'Pieza audiovisual', y:'2022', bg:'#d43737', yt:'GW12YfkeOFU',
      lead:'Pieza visual basada en un audio, a partir de la recopilación de videos propios.', tipo:'Proyecto académico', inst:'Universidad Torcuato Di Tella', rol:'', dur:'Oct 2022', equipo:'',
      bajada:'Teaser video musical Elektrobank.', bajadaRecta:true,
      desc:['Generar una [[pieza visual basada en un audio]], ante la recopilación de videos propios y la expansión de una [[identidad visual fuerte]] basada en el concepto de “callejero”.',
            'Diseño de visuales audiovisuales con [[sonido binaural]], en una pieza de 45 segundos.'],
      meta:[['Disciplina','Pieza audiovisual · LAB II'],['Año','Oct 2022'],['Realizado junto a','Lakatos Pablo'],['Formato','Sonido binaural · 45 segundos']],
      ejes:'Video / Audiovisual / Musical / Concepto / Realización visual / Elementos / Composición / Motion graphics / Videoclip / Edición / Postproducción / Dirección de arte',
      rows:[
        {yt:'GW12YfkeOFU'},
        {cls:'fb-3 fb-169', items:[{src:'img/elektrobank/momento-01.jpg', alt:'Tipografía HERS en negro sobre amarillo'},{src:'img/elektrobank/momento-02.jpg', alt:'New single sobre textura roja'},{src:'img/elektrobank/momento-03.jpg', alt:'Tipografía THE en amarillo'}]},
        {cls:'fb-3 fb-169', items:[{src:'img/elektrobank/momento-07.jpg', alt:'Chemical Brothers sobre textura de calle'},{src:'img/elektrobank/momento-05.jpg', alt:'Elektrobank · Chemical Brothers en rojo'},{src:'img/elektrobank/momento-06.jpg', alt:'Chemical Brothers con bloques negros'}]},
        {cls:'fb-3 fb-169', items:[{src:'img/elektrobank/momento-04.jpg', alt:'AND!!! en amarillo sobre rojo'},{src:'img/elektrobank/momento-08.jpg', alt:'Dig Your Own Hole con círculos negros'},{src:'img/elektrobank/momento-09.jpg', alt:'Tira de video con texturas en rojo'}]},
        {cls:'fb-3 fb-169', items:[{src:'img/elektrobank/momento-10.jpg', alt:'Composición en perspectiva con video callejero'},{src:'img/elektrobank/momento-11.jpg', alt:'Formas curvas con video en violeta'},{src:'img/elektrobank/momento-12.jpg', alt:'Plano rojo y textura de calle en naranja'}]},
      ],
      progs:['Illustrator','Photoshop','After Effects','Premiere Pro'], award:'Video Destacado — Muestra de fin de año · 2022'},
  ];
  const gm = document.getElementById('gm');
  const ROWS = 5, COLS = 9;
  /* Orden de las tiras: en celular se ve primero EO, Memorias, Módulo Vivo, Papelón, Silla, Rampa; ningún proyecto se repite arriba/abajo */
  /* Orden de las tiras: la del medio recorre los proyectos en el orden del índice (EO, Memorias, Siempre Libre, Silla, Módulo Vivo, Papelon, Biodata, Latencia, Elektrobank) y pasa por el centro de la pantalla; al cargar se ven los 9 proyectos en computadora y en celular (en celular se leen en orden de arriba a abajo); ningún proyecto se repite arriba/abajo */
  const GRID = [[0,1,2,3,4,5,6,7,8],[2,3,4,6,0,1,7,8,5],[8,0,1,5,4,2,3,6,7],[0,1,2,3,6,7,8,4,5],[1,2,0,7,8,3,4,5,6]];
  for (let r = 0; r < ROWS; r++) {
    const row = document.createElement('div'); row.className = 'gm-row';
    for (let k = 0; k < COLS * 3; k++) {
      const c = k % COLS;
      const pi = GRID[r][c] % projects.length, p = projects[pi];
      const a = document.createElement('article');
      a.className = 'card'; a.dataset.i = pi; a.tabIndex = 0;
      a.setAttribute('role','link'); a.setAttribute('aria-label', 'Ver proyecto ' + p.t);
      a.style.setProperty('--c', p.bg);
      if (p.on) a.style.setProperty('--on', p.on);
      if (k < COLS || k >= COLS * 2) { a.tabIndex = -1; a.setAttribute('aria-hidden', 'true'); }
      if (p.thumb) a.classList.add('has-img');
      if (p.thumbFit) a.classList.add('fit-' + p.thumbFit);
      if (p.thumbDark) a.classList.add('img-dark');
      if (p.thumbCls) a.classList.add(p.thumbCls);
      if (p.thumbBg) { a.style.setProperty('--tbg', p.thumbBg); a.classList.add('has-tbg'); }
      a.innerHTML = `${p.thumb ? `<img class="card-img" src="${p.thumb}" alt="" draggable="false" loading="lazy">` : ''}<div class="tags">${p.y ? `<span class="tag">${p.y}</span>` : ''}<span class="tag">${p.c}</span>${p.yt ? '<span class="tag tag-v"><svg viewBox="0 0 10 10" aria-hidden="true"><path d="M2.5 1.5 8.5 5l-6 3.5z" fill="currentColor"/></svg>Video</span>' : ''}</div>${(p.cardDesc || p.lead) ? `<p class="card-desc">${p.cardDesc || p.lead}</p>` : ''}<h2 class="name">${p.t}</h2><span class="go" aria-hidden="true"><span class="go-t">Ver</span><span class="go-a">→</span></span>`;
      row.appendChild(a);
    }
    gm.appendChild(row);
  }

  /* ——— Grid motion: siguen al mouse con inercia + se pueden arrastrar como carrusel ——— */
  const rows = [...gm.children];
  const cur = rows.map(() => 0);
  let mouseX = innerWidth / 2, lastMove = -1e9, heroVisible = true;
  let H = 1, pressed = false, dragging = false, startX = 0, lastX = 0, justDragged = false, active = -1;
  const drag = rows.map(() => 0), vel = rows.map(() => 0);
  const measure = () => { H = rows[0].scrollWidth / 3 || 1; };
  measure(); addEventListener('resize', measure);
  const wrap = x => (((x % H) + H) % H) - 2 * H;
  let mouseY = null;
  // solo cuenta como movimiento real si el mouse se desplazó (al cargar, el navegador manda movimientos falsos que frenaban las tiras)
  let pmx = null, pmy = null;
  addEventListener('mousemove', e => { mouseY = e.clientY; mouseX = e.clientX; if (pmx === null) { pmx = e.clientX; pmy = e.clientY; mouseX = e.clientX; return; } if (Math.hypot(e.clientX - pmx, e.clientY - pmy) < 4) return; pmx = e.clientX; pmy = e.clientY; mouseX = e.clientX; lastMove = performance.now(); }, {passive:true});
  // Con el mouse sobre una tarjeta las tiras quedan quietas (así es fácil tocar las de los extremos); se vuelven a mover al salir de las tarjetas
  let overCard = false, holdUntil = 0;
  addEventListener('mouseleave', () => { mouseY = null; overCard = false; });
  new IntersectionObserver(([e]) => heroVisible = e.isIntersecting).observe(document.querySelector('.hero'));
  const K = 1 / Math.cos(13 * Math.PI / 180);
  gm.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    const r = e.target.closest('.gm-row'); if (!r) return;
    active = rows.indexOf(r);
    pressed = true; dragging = false; startX = lastX = e.clientX; vel[active] = 0;
  });
  addEventListener('pointermove', e => {
    if (!pressed) return;
    const dx = e.clientX - lastX; lastX = e.clientX;
    if (!dragging && Math.abs(e.clientX - startX) > 6) { dragging = true; gm.classList.add('dragging'); }
    if (dragging) { drag[active] += dx * K; vel[active] = dx * K; }
  }, {passive:true});
  const release = () => {
    if (!pressed) return;
    pressed = false; gm.classList.remove('dragging');
    if (dragging) { justDragged = true; setTimeout(() => justDragged = false, 60); }
  };
  addEventListener('pointerup', release); addEventListener('pointercancel', release);
  // Sin saltos: cuando cambia el modo (quietas → moviéndose, o mouse → movimiento automático) el objetivo se reubica donde está la tira y el desfase se disuelve de a poco
  const off = rows.map(() => 0); let lastMode = '';
  // el mouse cuenta como "encima" solo si está al menos 40px adentro del borde de la tarjeta (las tiras están giradas -13°)
  const SIN = Math.sin(13 * Math.PI / 180), COS = Math.cos(13 * Math.PI / 180), INSET = 40;
  const insideCard = (c, x, y) => { const r = c.getBoundingClientRect(); const dx = x - (r.left + r.width / 2), dy = y - (r.top + r.height / 2); const lx = dx * COS + dy * SIN, ly = -dx * SIN + dy * COS; return Math.abs(lx) < c.offsetWidth / 2 - INSET && Math.abs(ly) < c.offsetHeight / 2 - INSET; };
  let t0 = null;
  function tick(t) {
    if (t0 === null) t0 = t;
    const now = performance.now();
    if (heroVisible && mouseY != null) { const el = document.elementFromPoint(mouseX, mouseY); const cd = el && el.closest && el.closest('#gm .card'); const on = !!cd && insideCard(cd, mouseX, mouseY); if (on) overCard = true; else if (overCard) { overCard = false; holdUntil = now + 450; } }
    const frozen = heroVisible && !pressed && (overCard || now < holdUntil) && now - lastMove < 3000; // quietas sobre una tarjeta; si el mouse queda quieto 3 s, vuelven a moverse
    if (frozen) { lastMode = 'frozen'; requestAnimationFrame(tick); return; }
    if (heroVisible) {
      const w = innerWidth;
      const idle = now - lastMove > 3000;
      const ratio = 0.5 + 0.42 * Math.sin((t - t0) / 1500 + 0.9); // las tiras se mueven solas; el mouse ya no las dirige
      const mode = 'auto';
      rows.forEach((_, i) => { if (pressed && i === active) return; drag[i] += vel[i]; vel[i] *= 0.93; if (Math.abs(vel[i]) < 0.05) vel[i] = 0; });
      rows.forEach((r, i) => {
        const dir = i % 2 ? -1 : 1;
        const base = (ratio - 0.5) * 2 * (w * 0.22) * dir;
        if (mode !== lastMode && lastMode) off[i] = cur[i] - base;
        off[i] *= 0.985;
        const target = base + off[i];
        cur[i] += (target - cur[i]) * (0.05 + i * 0.015);
        r.style.transform = `translate3d(${(cur[i] + wrap(drag[i])).toFixed(2)}px,0,0)`;
      });
      lastMode = mode;
    }
    requestAnimationFrame(tick);
  }
  if (!reduce) requestAnimationFrame(tick);
  else rows.forEach(r => r.style.transform = `translate3d(${wrap(0)}px,0,0)`);

  /* ——— Secciones plegables: se abren solas al scrollear, clic para abrir/cerrar ——— */
  const folds = [...document.querySelectorAll('.fold')];
  function setOpen(f, open) {
    if (f.classList.contains('is-open') === open) return;
    f.classList.toggle('is-open', open);
    f.querySelector('.head').setAttribute('aria-expanded', open);
  }
  folds.forEach(f => f.querySelector('.head').addEventListener('click', () => {
    f.dataset.auto = 'done';
    setOpen(f, !f.classList.contains('is-open'));
  }));

  let ticking = false;
  function check() {
    ticking = false;
    const line = innerHeight * 0.38;
    const atEnd = scrollY + innerHeight >= document.documentElement.scrollHeight - 8;
    if (scrollY > 30) for (const f of folds) {
      if (f.dataset.auto === 'done') continue;
      const top = f.querySelector('.head').getBoundingClientRect().top;
      if (top < line || (atEnd && top < innerHeight * 0.9)) { setOpen(f, true); f.dataset.auto = 'done'; if (atEnd) break; }
    }
    let current = 'inicio';
    if (document.getElementById('indice').classList.contains('open') && document.getElementById('indice').getBoundingClientRect().top < innerHeight * .5) current = 'indice';
    if (document.getElementById('sobre-mi').getBoundingClientRect().top < innerHeight * .4) current = 'sobre-mi';
    if (document.getElementById('contacto').getBoundingClientRect().top < innerHeight * .4) current = 'contacto';
    document.querySelectorAll('.pill').forEach(p => p.classList.toggle('is-active', p.dataset.go === current));
    placeDot();
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } }, {passive:true});

  /* ——— Nav ——— */
  document.querySelectorAll('.pill').forEach(p => p.addEventListener('click', e => {
    e.preventDefault();
    const id = p.dataset.go;
    goTo(id);
  }));
  function goTo(id) {
    if (id === 'inicio') { scrollTo({top:0, behavior: reduce ? 'auto' : 'smooth'}); return; }
    const f = document.getElementById(id); if (!f) return;
    if (id === 'indice') { f.classList.add('open'); scrollTo({top: f.getBoundingClientRect().top + scrollY - 90, behavior: reduce ? 'auto' : 'smooth'}); return; }
    f.dataset.auto = 'done'; setOpen(f, true);
    f.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block:'start'});
  }

  /* ——— Programas que pasan (logos) ——— */
  const LOGOS = window.LOGOS || {};
  /* Criterio: arriba de Habilidades, diseño gráfico, digital y edición; abajo, 3D, espacios y tiempo real */
  const appsA = ['Illustrator','Photoshop','Figma','Canva','After Effects','Premiere Pro','PowerPoint','Excel'];
  const appsB = ['Rhinoceros 7','Blender','KeyShot','Twinmotion','TouchDesigner','Resolume Arena','Reaper'];
  const logoImg = n => (LOGOS[n] || (n.startsWith('Resolume') && LOGOS['Resolume Arena'])) ? `<img src="${LOGOS[n] || LOGOS['Resolume Arena']}" alt="">` : '';
  const _unusedLogo = n => LOGOS[n] ? `<img src="${LOGOS[n]}" alt="">` : '';
  const strip = list => { const one = list.map(n => `<span class="app"><span class="logo">${logoImg(n)}</span><span class="app-name">${n}</span></span>`).join(''); return one + one + one + one; };
  document.getElementById('apps-a').innerHTML = strip(appsA);
  document.getElementById('apps').innerHTML = strip(appsB);
  const APP_INFO = {
    'Illustrator':'Ilustración y gráficos vectoriales: logos, íconos y piezas de identidad.',
    'Photoshop':'Edición y retoque de imágenes, fotomontajes y mockups.',
    'Figma':'Diseño de interfaces, prototipos y sistemas de diseño para web y apps.',
    'Canva':'Piezas rápidas para redes sociales y presentaciones.',
    'After Effects':'Animación y motion graphics para video.',
    'Premiere Pro':'Edición de video y montaje audiovisual.',
    'PowerPoint':'Presentaciones para comunicar y defender proyectos.',
    'Excel':'Organización de datos, presupuestos y planificación.',
    'Rhinoceros 7':'Modelado 3D de precisión para productos, mobiliario y espacios.',
    'Blender':'Modelado, animación y render 3D.',
    'KeyShot':'Renders fotorrealistas de productos y materiales.',
    'Twinmotion':'Visualización de espacios y recorridos en tiempo real.',
    'TouchDesigner':'Visuales generativas e interactivas en tiempo real.',
    'Resolume Arena':'Mapping y VJ: proyección de visuales en vivo.',
    'Reaper':'Grabación, edición y mezcla de audio.'
  };
  {
    const tip = document.createElement('div'); tip.className = 'app-tip'; tip.setAttribute('role', 'tooltip'); document.body.appendChild(tip);
    const show = a => {
      const n = a.querySelector('.app-name').textContent, info = APP_INFO[n]; if (!info) return;
      tip.innerHTML = `<b>${n}</b>${info}`;
      const r = a.getBoundingClientRect(), below = r.top < tip.offsetHeight + 24;
      tip.classList.toggle('below', below);
      tip.style.left = Math.min(innerWidth - 130, Math.max(130, r.left + r.width / 2)) + 'px';
      tip.style.top = (below ? r.bottom + 12 : r.top - tip.offsetHeight - 12) + 'px';
      tip.classList.add('on');
    };
    const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
    const reduceApps = matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('.apps').forEach(strip => {
      if (fine) {
        strip.addEventListener('mouseover', e => { const a = e.target.closest('.app'); if (a) show(a); });
        strip.addEventListener('mouseleave', () => tip.classList.remove('on'));
      }
      /* Movimiento de la cinta con JS:
         - avanza sola; se frena solo mientras el mouse está sobre un programa (y sigue apenas sale)
         - celular: mantener presionado un programa frena la cinta y muestra su texto; al soltar sigue
         - arrastrar hacia un costado (mouse o dedo) mueve el contenido de la cinta y al soltar retoma su marcha */
      const track = strip.querySelector('.track'), dir = strip.classList.contains('apps-b') ? 1 : -1;
      let x = 0, W = 1, overApp = false, held = null, down = false, dragging = false, sx = 0, lx = 0, vel = 0, last = performance.now();
      const measure = () => { W = track.scrollWidth / 2 || 1; };
      measure(); addEventListener('resize', measure); document.fonts && document.fonts.ready.then(measure);
      const wrap = () => { x = ((x % W) + W) % W - W; };
      const release = () => { if (!held) return; held.classList.remove('is-held'); strip.classList.remove('hold'); tip.classList.remove('on'); held = null; };
      if (fine) {
        strip.addEventListener('mouseover', e => { overApp = !!e.target.closest('.app'); });
        strip.addEventListener('mouseleave', () => { overApp = false; });
        strip.addEventListener('mouseout', e => { if (!(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.app'))) { overApp = false; tip.classList.remove('on'); } });
      }
      strip.addEventListener('pointerdown', e => {
        if (e.button > 0) return;
        down = true; dragging = false; sx = lx = e.clientX; vel = 0;
        const a = e.target.closest('.app');
        if (e.pointerType !== 'mouse' && a) { release(); held = a; strip.classList.add('hold'); a.classList.add('is-held'); show(a); }
      });
      addEventListener('pointermove', e => {
        if (!down) return;
        const dx = e.clientX - lx; lx = e.clientX;
        if (!dragging && Math.abs(e.clientX - sx) > 6) { dragging = true; strip.classList.add('dragging'); release(); tip.classList.remove('on'); }
        if (dragging) { x += dx; vel = dx; wrap(); track.style.transform = `translate3d(${x}px,0,0)`; }
      }, {passive:true});
      const up = () => { if (!down) return; down = false; strip.classList.remove('dragging'); if (dragging) { strip.dataset.justDragged = '1'; setTimeout(() => delete strip.dataset.justDragged, 60); } dragging = false; release(); };
      addEventListener('pointerup', up); addEventListener('pointercancel', up);
      strip.addEventListener('contextmenu', e => { if (held) e.preventDefault(); });
      const SPEED = 40; // segundos para recorrer media cinta (igual que antes)
      const step = now => {
        const dt = Math.min(64, now - last); last = now;
        if (!dragging) {
          if (Math.abs(vel) > 0.1) { x += vel; vel *= 0.92; }
          else if (!reduceApps && !overApp && !held) x += dir * (W / (SPEED * 1000)) * dt;
          wrap(); track.style.transform = `translate3d(${x}px,0,0)`;
        }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    addEventListener('scroll', () => { if (!document.querySelector('.apps.hold')) tip.classList.remove('on'); }, {passive:true});
  }

  /* ——— Página de proyecto (misma plantilla para todos) ——— */
  const pp = document.getElementById('pp');
  const hl = v => esc(v).replace(/\[\[(.+?)\]\]/g, '<mark class="hl">$1</mark>');
  const esc = v => String(v).replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  const row = (k, v) => `<div><dt>${k}</dt><dd class="${v ? '' : 'empty'}">${v ? esc(v) : 'Completar'}</dd></div>`;
  /* Videos de YouTube.
     Dentro de la vista de Claude no se pueden insertar videos de otros sitios: se muestra un enlace.
     Fuera de Claude (VS Code + Live Server, GitHub Pages, tu dominio) se detecta solo: se ve la portada del video
     y al tocar play se reproduce dentro de la página. */
  const EMBED_YOUTUBE = !(window.claude && window.claude.use) && !/claude\.ai|claudeusercontent/.test(location.hostname);
  const ytPoster = (id, title, extra) => `<button type="button" class="yt-frame yt-ph yt-lite${extra ? ' ' + extra : ''}" data-yt="${id}" data-title="${esc(title)}" aria-label="Reproducir video: ${esc(title)}"><img class="yt-thumb" src="https://i.ytimg.com/vi/${id}/maxresdefault.jpg" alt="" loading="lazy" onload="if(this.naturalWidth<200)this.src='https://i.ytimg.com/vi/${id}/hqdefault.jpg'" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${id}/hqdefault.jpg'"><span class="play" aria-hidden="true"></span></button>`;
  const ytSlot = (id, title) => EMBED_YOUTUBE
    ? ytPoster(id, title, 'pp-cover')
    : `<a class="media video pp-cover yt-link" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" data-label="Video · se abre en YouTube ↗"><span class="play" aria-hidden="true"></span></a>`;
  const ytRow = (id, title) => `<div class="fb fb-yt">${EMBED_YOUTUBE
      ? ytPoster(id, title)
      : `<a class="yt-frame yt-ph" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener"><span class="play" aria-hidden="true"></span><span class="yt-lbl">Video · se abre en YouTube ↗</span></a>`}</div>`;
  // al tocar la portada se cambia por el reproductor de YouTube, que arranca solo
  document.addEventListener('click', e => {
    const b = e.target.closest('.yt-lite'); if (!b) return;
    const f = document.createElement('iframe');
    f.src = `https://www.youtube.com/embed/${b.dataset.yt}?rel=0&autoplay=1&playsinline=1&vq=hd720&hd=1&origin=${encodeURIComponent(location.origin)}`;
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    f.title = b.dataset.title || 'Video'; f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'; f.allowFullscreen = true;
    const box = document.createElement('div'); box.className = 'yt-frame' + (b.classList.contains('pp-cover') ? ' pp-cover yt-embed' : ''); box.appendChild(f);
    b.replaceWith(box);
    // por si YouTube no deja reproducirlo acá: link directo debajo del video
    const lk = document.createElement('a'); lk.className = 'yt-out'; lk.href = `https://youtu.be/${b.dataset.yt}`; lk.target = '_blank'; lk.rel = 'noopener'; lk.textContent = 'Ver en YouTube ↗';
    box.after(lk);
  });
  const media = (cls, label, video) => `<div class="media ${cls}${video ? ' video' : ''}" data-label="${label}">${video ? '<span class="play" aria-hidden="true"></span>' : ''}</div>`;
  const fig = (cls, label, cap, video) => `<figure>${media(cls, label, video)}<figcaption>${cap}</figcaption></figure>`;

  function renderProject(i) {
    const p = projects[i], n = projects[(i + 1) % projects.length];
    pp.style.setProperty('--c', p.bg);
    pp.style.setProperty('--on', p.on || '#fff');
    if (p.titleColor) pp.style.setProperty('--title-c', p.titleColor); else pp.style.removeProperty('--title-c');
    pp.classList.toggle('pp-dark', !!p.dark);
    pp.classList.toggle('desc-tight', !p.descFlow); // largo de renglón sistematizado: entre el mínimo (párrafo derecho de Biodata) y el máximo (ancho de la línea roja)
    pp.classList.toggle('bajada-recta', !!p.bajadaRecta);
    pp.classList.toggle('bajada-1l', !!p.bajadaLine);
    pp.classList.toggle('bajada-bold', !!p.bajadaBold);
    const META_RANK = ['Disciplina', 'Año', 'Rol', 'Cliente', 'Institución', 'Realizado junto a', 'Equipo', 'Formato', 'Sitio', 'Espacio'];
    const META_ORDER = m => m.filter(([k, v]) => v || k === 'Disciplina' || k === 'Año').map((c, i) => [c, i]).sort((a, b) => { const ra = META_RANK.indexOf(a[0][0]), rb = META_RANK.indexOf(b[0][0]); return ((ra < 0 ? 99 : ra) - (rb < 0 ? 99 : rb)) || a[1] - b[1]; }).map(x => x[0]);
    const meta = p.meta || [['Disciplina', [p.tipo, p.c].filter(Boolean).join(' · ')], ['Año', p.y], ['Rol', p.rol], [p.inst ? 'Institución' : 'Equipo', p.inst || p.equipo]];
    const cell = ([k, v]) => `<div><dt>${k}</dt><dd class="${v ? '' : 'empty'}">${v ? esc(v) : 'Completar'}</dd></div>`;
    const progs = p.progs.length ? p.progs.map(g => `<span class="prog">${logoImg(g)}${esc(g)}</span>`).join('') : '<span class="prog empty">Completar</span>';
    const capAttr = c => c ? ` data-cap-t="${esc(c[0])}" data-cap-s="${esc(c[2] || '')}" data-cap="${esc(String(c[1]).replace(/\[\[|\]\]/g, ''))}"` : '';
    const item = (it, c) => it.video
      ? `<video src="${it.video}" poster="${it.poster}" autoplay muted loop playsinline aria-label="${esc(it.alt)}"${capAttr(c)}></video>`
      : `<img src="${it.src}" alt="${esc(it.alt)}" loading="lazy"${capAttr(c)}>`;
    const rows = p.rows
      ? p.rows.map(r => r.case ? `<div class="fb fb-case${r.cls ? ' ' + r.cls : ''}"><div class="fb-note case-txt"><h2 class="pv-lbl">${esc(r.case[0])}<small>${esc(r.case[2])}</small></h2>${r.case[1] ? `<p>${hl(r.case[1])}</p>` : ''}</div>${r.items.map(it => `<figure>${item(it, it.cap || r.cap)}</figure>`).join('')}</div>` : r.note ? `<div class="fb-note${r.quote ? ' fb-quote' : ''}"><h2 class="pv-lbl">${esc(r.note[0])}${r.note[2] ? `<small>${esc(r.note[2])}</small>` : ''}</h2>${r.note[1] ? `<p>${hl(r.note[1])}</p>` : ''}</div>` : r.side ? `<div class="fb fb-side${r.items[0].video && !r.light ? ' fb-black' : ''}${r.light ? ' fb-side-app' : ''}${r.stack ? ' fb-combo' : ''}"><div class="fb-note case-txt"><h2 class="pv-lbl">${esc(r.side[0])}${r.side[2] ? `<small>${esc(r.side[2])}</small>` : ''}</h2>${r.side[1] ? `<p>${hl(r.side[1])}</p>` : ''}</div><figure>${item(r.items[0], r.cap)}</figure>${r.stack ? `<div class="side-stack">${r.stack.map(it => `<figure>${item(it, r.stackCap)}</figure>`).join('')}</div>` : ''}</div>` : r.press ? `<div class="fb-note fb-press"><h2 class="pv-lbl">Prensa</h2><ul>${r.press.map(([t, u, src]) => `<li><a href="${u}" target="_blank" rel="noopener"><span>${src ? `<small class="press-src">${esc(src)}</small>` : ''}${esc(t)}</span><span class="act">Leer nota ↗</span></a></li>`).join('')}</ul></div>` : r.slot ? `<div class="fb fb-1 fb-slot">${media('', r.slot, true)}</div>` : r.yt ? ytRow(r.yt, p.t) : `<div class="fb ${r.cls}"${r.w ? ` style="--mw:${r.w}px"` : ''}${r.rotate ? ` data-pool='${JSON.stringify(r.items.map(it => [it.src, it.alt])).replace(/'/g, '&#39;')}'` : ''}>${(r.rotate ? r.items.slice(0, 3) : r.items).map(it => `<figure>${item(it, it.cap || r.cap)}${it.title ? `<figcaption class="fig-t">${esc(it.title)}</figcaption>` : ''}</figure>`).join('')}</div>`).join('')
      : `${p.yt ? `<div class="fb fb-1 fb-hero">${ytSlot(p.yt, p.t)}</div>` : `<div class="fb fb-1 fb-hero">${media('', 'Imagen principal')}</div>`}
         <div class="fb fb-2">${media('', 'Imagen 02')}${media('', 'Imagen 03')}</div>
         <div class="fb fb-4">${media('', 'Detalle')}${media('', 'Detalle')}${media('', 'Proceso')}${media('', 'Proceso')}</div>`;
    pp.innerHTML = `<div class="pp-tex" aria-hidden="true"></div>
      <div class="pp-bar">
        <button type="button" data-act="close">← Volver</button>
        <div class="pp-nav">
          <button type="button" data-act="prev" aria-label="Proyecto anterior">←</button>
          <span>${String(i + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}</span>
          <button type="button" data-act="next" aria-label="Proyecto siguiente">→</button>
        </div>
      </div>
      <header class="pv-hero${p.logo && !['logo-wide', 'logo-inline'].includes(p.logoCls) ? '' : ' txt-title'}${['logo-inline', 'logo-wide'].includes(p.logoCls) ? ' hero-inline' : ''}">
        <h1 class="pv-title" id="pp-title">${p.logo ? `<img class="pp-logo${p.logoCls ? ' ' + p.logoCls : ''}" src="${p.logo}" alt="${esc(p.t)}">` : esc(p.t)}</h1>
        ${p.bajada ? `<p class="pv-bajada"><span class="b-long">${esc(p.bajada)}</span>${p.bajadaCorta ? `<span class="b-short">${esc(p.bajadaCorta)}</span>` : ''}</p>` : ''}
      </header>
      <section class="pv-desc">
        ${p.award ? `<p class="pv-award"><small>Reconocimiento</small><span>${esc(p.award)}</span></p>` : ''}
        <dl class="pv-ficha">
          ${(ms => ms.map((c, i) => ms.length % 2 && i === ms.length - 1 ? cell(c).replace('<div>', '<div class="span2">') : cell(c)).join(''))(META_ORDER(meta))}
          ${p.ejes ? `<div class="ejes"><dt>Ejes</dt><dd>${p.ejes.split(' / ').map(e => `<span class="ej">${esc(e)}</span>`).join('\u00a0/ ')}</dd></div>` : ''}
          <div class="wide"><dt>Programas</dt><dd><div class="progs">${progs}</div></dd></div>
        </dl>
        <div class="pv-text${p.descFlow ? ' flow' : ''}">
          <h2 class="pv-lbl">Descripción</h2>
          ${p.desc ? p.desc.map(d => `<p>${hl(d)}</p>`).join('') : `<p>${esc(p.lead)}</p><p class="ph">Acá sigue la descripción: de qué se trata, el desafío y el resultado.</p>`}
        </div>
      </section>
      <section class="pv-media" aria-label="Imágenes del proyecto">${rows}</section>
      <button type="button" class="pp-next" data-act="next">
        <span class="pp-next-th" aria-hidden="true"></span><span class="pp-next-t"><small>Siguiente proyecto</small><b>${esc(n.t)}</b><em>${esc(n.c || '')} · ${esc(n.y || '')}</em></span><span class="go-c" aria-hidden="true">→</span>
      </button>`;
    { const ft = document.querySelector('body > footer.foot'); if (ft) { const c = ft.cloneNode(true); c.classList.add('pp-foot'); c.querySelector('.wordmark')?.remove(); const cp = document.createElement('p'); cp.className = 'pp-foot-c'; cp.textContent = '© 2026 · Diseñadora Integral'; c.appendChild(cp); pp.appendChild(c); arrows(c); } }
    { const th = pp.querySelector('.pp-next-th'), src = gm.querySelector(`.card[data-i="${(i + 1) % projects.length}"]`); if (th && src) { const c = src.cloneNode(true); c.removeAttribute('tabindex'); c.removeAttribute('role'); c.classList.add('card-copy'); c.style.width = c.style.height = '240px'; c.style.transform = 'scale(var(--ths))'; th.appendChild(c); } }
    noWidows(pp);
    arrows(pp);
    fitBajada();
    requestAnimationFrame(() => { fixShortLines(); tightenDesc(); fixFicha(); }); setTimeout(() => { tightenDesc(); fixFicha(); }, 400);
    pp.querySelectorAll('[data-pool]').forEach(row => {
      const pool = JSON.parse(row.dataset.pool), imgs = [...row.querySelectorAll('img')];
      pool.forEach(([src]) => { const im = new Image(); im.src = src; });
      let off = 0;
      const iv = setInterval(() => {
        if (!row.isConnected) return clearInterval(iv);
        if (document.hidden || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        off = (off + imgs.length) % pool.length;
        imgs.forEach((im, k) => { const [src, alt] = pool[(off + k) % pool.length]; im.src = src; im.alt = alt; });
      }, 2500);
    });
    { const lg = pp.querySelector('.pv-title .pp-logo'); if (lg && !lg.complete) lg.addEventListener('load', fitBajada, {once:true}); }
    pp.scrollTop = 0;
  }

  let lastFocus = null;
  function openProject(i) {
    renderProject(i);
    pp.dataset.i = i;
    if (pp.hidden) {
      lastFocus = document.activeElement;
      pp.hidden = false; document.body.classList.add('pp-open');
      requestAnimationFrame(() => requestAnimationFrame(() => pp.classList.add('in')));
    }
    heroVisible = false;
    fitBajada();
    requestAnimationFrame(() => mountTexture(projects[i]));
    pp.tabIndex = -1; pp.focus({preventScroll:true});
    if (location.hash !== '#p-' + projects[i].id) history.replaceState(null, '', '#p-' + projects[i].id);
  }
  function closeProject() {
    if (pp.hidden) return;
    pp.classList.remove('in');
    document.body.classList.remove('pp-open');
    if (typeof fxStop === 'function') { fxStop(); fxStop = null; }
    setTimeout(() => { pp.hidden = true; pp.innerHTML = ''; }, reduce ? 0 : 700);
    heroVisible = true;
    try { history.replaceState(null, '', location.pathname + location.search); } catch (_) {}
    if (lastFocus) lastFocus.focus({preventScroll:true});
  }
  pp.addEventListener('click', e => {
    const fl = e.target.closest('.foot a[data-go], .foot a[href="#indice"]');
    if (fl) { e.preventDefault(); const id = fl.dataset.go || 'indice'; closeProject(); setTimeout(() => goTo(id), reduce ? 0 : 450); return; }
    const b = e.target.closest('[data-act]'); if (!b) return;
    const i = +pp.dataset.i, L = projects.length;
    if (b.dataset.act === 'close') closeProject();
    if (b.dataset.act === 'contact') { closeProject(); setTimeout(() => goTo('contacto'), reduce ? 0 : 450); }
    if (b.dataset.act === 'next') openProject((i + 1) % L);
    if (b.dataset.act === 'prev') openProject((i - 1 + L) % L);
  });
  addEventListener('keydown', e => {
    if (pp.hidden) return;
    if (e.key === 'Escape') closeProject();
  });
  gm.addEventListener('mouseover', e => { const c = e.target.closest('.card'); if (!c) return; const d = c.querySelector('.card-desc'), n = c.querySelector('.name'), g = c.querySelector('.go'); if (d && n) d.style.setProperty('--dpb', (c.offsetHeight - Math.min(n.offsetTop, g ? g.offsetTop : 1e9) + 24) + 'px'); });
  gm.addEventListener('click', e => { if (justDragged) return; const c = e.target.closest('.card'); if (c) openProject(+c.dataset.i); });
  gm.addEventListener('keydown', e => { const c = e.target.closest('.card'); if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openProject(+c.dataset.i); } });
  // Índice fijo de proyectos
  (() => {
    const list = document.getElementById('pidx'), peek = document.getElementById('pidx-peek'); if (!list) return;
    const IDX_ORDER = ['electricidad-del-oeste', 'congreso-ddhh', 'rampa-publicitaria', 'silla-rastro']; // los demás siguen en su orden
    const order = [...IDX_ORDER.map(id => projects.findIndex(p => p.id === id)).filter(i => i >= 0), ...projects.map((_, i) => i).filter(i => !IDX_ORDER.includes(projects[i].id))];
    list.innerHTML = order.map((i, pos) => [projects[i], i, pos]).map(([p, i, pos]) => `<li style="--k:${pos}"><a href="#p-${p.id}" data-i="${i}"><span class="th" data-th="${i}"></span><span class="n">${String(pos + 1).padStart(2, '0')}</span><span class="t">${esc(p.t)}</span><span class="c">${esc(p.c || '')}</span><span class="b">${esc(p.bajada || '')}</span><span class="y">${esc(p.y || '')}</span><span class="ar">→</span></a></li>`).join('');
    arrows(list);
    // miniaturas y vista previa = copia exacta de la tarjeta de la portada (misma imagen, fondo y color)
    const cardOf = (i, size) => { const src = gm.querySelector(`.card[data-i="${i}"]`); if (!src) return null; const c = src.cloneNode(true); c.removeAttribute('tabindex'); c.removeAttribute('role'); c.setAttribute('aria-hidden', 'true'); c.classList.add('card-copy'); c.style.width = size + 'px'; c.style.height = size + 'px'; return c; };
    list.querySelectorAll('[data-th]').forEach(t => { const c = cardOf(+t.dataset.th, 240); if (c) { c.style.transform = 'scale(' + (68 / 240) + ')'; t.appendChild(c); } });
    list.addEventListener('click', e => { const a = e.target.closest('a'); if (!a) return; e.preventDefault(); peek.classList.remove('on'); openProject(+a.dataset.i); });
    const fine = matchMedia('(hover:hover) and (pointer:fine)');
    list.addEventListener('mousemove', e => { const a = e.target.closest('a'); if (!a || !fine.matches) { peek.classList.remove('on'); return; } if (peek.dataset.i !== a.dataset.i) { peek.dataset.i = a.dataset.i; peek.replaceChildren(); const c = cardOf(+a.dataset.i, 300); if (c) peek.appendChild(c); } peek.style.left = Math.min(innerWidth - 170, e.clientX + 200) + 'px'; peek.style.top = e.clientY + 'px'; peek.classList.add('on'); });
    list.addEventListener('mouseleave', () => peek.classList.remove('on'));
    addEventListener('scroll', () => peek.classList.remove('on'), {passive:true});
    // se despliega debajo de "Proyectos" cuando la persona empieza a bajar
    const sec = document.getElementById('indice');
    // también funciona cuando la página se ve dentro de otra (el scroll lo hace la página de afuera): rueda, toque o teclado hacia abajo, o la portada que empieza a salir de la pantalla
    // solo se despliega después de que la persona toca, desliza, usa la rueda o el teclado (evita que se abra solo al cargar por el scroll que restaura el navegador o el visor)
    let acted = false; ['touchstart', 'wheel', 'keydown', 'pointerdown'].forEach(ev => addEventListener(ev, () => { acted = true; }, {passive:true, capture:true}));
    const tog = document.getElementById('idx-tog'), hero = document.querySelector('.hero');
    const setIdx = open => { sec.classList.toggle('open', open); hero.classList.toggle('idx-open', open); tog.setAttribute('aria-expanded', open); if (open) removeEventListener('scroll', unfold); };
    new MutationObserver(() => { const o = sec.classList.contains('open'); hero.classList.toggle('idx-open', o); tog.setAttribute('aria-expanded', o); }).observe(sec, {attributes:true, attributeFilter:['class']});
    // botón para desplegar/plegar la lista: siempre visible, abierta o cerrada
    tog.addEventListener('click', e => { e.stopPropagation(); acted = true; const o = !sec.classList.contains('open'); if (o) delete tog.dataset.closed; else tog.dataset.closed = '1'; setIdx(o); });
    const openIdx = () => { if (!acted || sec.classList.contains('open') || tog.dataset.closed) return; setIdx(true); };
    const unfold = () => { if (scrollY > 40) openIdx(); };
    addEventListener('scroll', unfold, {passive:true}); unfold();
    addEventListener('wheel', e => { if (e.deltaY > 0) openIdx(); }, {passive:true});
    let ty = null; addEventListener('touchstart', e => { ty = e.touches[0].clientY; }, {passive:true});
    addEventListener('touchmove', e => { if (ty != null && ty - e.touches[0].clientY > 40) openIdx(); }, {passive:true});
    addEventListener('keydown', e => { if (['ArrowDown', 'PageDown', ' ', 'End'].includes(e.key) && !e.target.closest('input,textarea')) openIdx(); });
    if ('IntersectionObserver' in window) { let full = false; new IntersectionObserver(([en]) => { if (en.intersectionRatio > 0.97) full = true; else if (full && en.intersectionRatio < 0.85) openIdx(); }, {threshold:[0, 0.5, 0.85, 0.97, 1]}).observe(document.querySelector('.hero')); }
    if (location.hash === '#indice') sec.classList.add('open');
    document.querySelectorAll('a[href="#indice"]').forEach(l => l.addEventListener('click', () => sec.classList.add('open')));
  })();
  const fromHash = () => { const k = projects.findIndex(p => '#p-' + p.id === location.hash); if (k >= 0) openProject(k); };
  fromHash();

  /* ——— Reconocimientos: filas desplegables ——— */
  const awRows = [...document.querySelectorAll('.aw-row')];
  const setAw = (r, open) => { r.classList.toggle('open', open); r.querySelector('.aw-btn').setAttribute('aria-expanded', open); };
  awRows.forEach(r => r.querySelector('.aw-btn').addEventListener('click', () => {
    const pin = !r.classList.contains('pinned');
    r.classList.toggle('pinned', pin); setAw(r, pin);
  }));
  // En compu: al acercar el mouse a una fila (a menos de RANGO px) se despliega sola
  const RANGO = 28;
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mx = -1, my = -1, raf = 0;
    const near = () => {
      raf = 0;
      document.querySelectorAll('.aw').forEach(list => {
        const box = list.getBoundingClientRect();
        const inside = mx >= box.left - RANGO && mx <= box.right + RANGO && my >= box.top - RANGO && my <= box.bottom + RANGO;
        let best = null, bestD = Infinity;
        if (inside) list.querySelectorAll('.aw-row').forEach(r => {
          const b = r.getBoundingClientRect();          // fila completa (incluye lo desplegado)
          const d = my < b.top ? b.top - my : my > b.bottom ? my - b.bottom : 0;
          if (d < bestD) { bestD = d; best = r; }
        });
        list.querySelectorAll('.aw-row').forEach(r => {
          if (r.classList.contains('pinned')) return;
          setAw(r, r === best && bestD <= RANGO);
        });
      });
    };
    addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(near); }, {passive:true});
  }
  document.querySelectorAll('.aw-go').forEach(b => b.addEventListener('click', () => {
    const k = projects.findIndex(p => p.id === b.dataset.project);
    if (k >= 0) openProject(k);
  }));

  /* ——— Visor de imágenes del proyecto (compu y celular) ——— */
  let lb = null, lbList = [], lbI = 0;
  function lbShow(i) {
    lbI = (i + lbList.length) % lbList.length;
    const im = lbList[lbI], st = lb.querySelector('.lb-stage');
    st.querySelector('.lb-media')?.remove();
    let el;
    if (im.tagName === 'VIDEO') {
      el = document.createElement('video');
      el.src = im.currentSrc || im.src; el.poster = im.poster || '';
      el.autoplay = true; el.loop = true; el.muted = true; el.playsInline = true; el.controls = true;
    } else { el = document.createElement('img'); el.src = im.currentSrc || im.src; el.alt = im.alt; }
    el.className = 'lb-media';
    st.prepend(el);
    const label = im.alt || im.getAttribute('aria-label') || '';
    lb.querySelector('.lb-n').textContent = `${lbI + 1} / ${lbList.length}`;
    const cap = lb.querySelector('.lb-cap');
    if (im.dataset.capT) { cap.classList.add('rich'); cap.innerHTML = `<b>${esc(im.dataset.capT)}</b>${im.dataset.capS ? `<small>${esc(im.dataset.capS)}</small>` : ''}<span>${esc(im.dataset.cap)}</span>`; }
    else { cap.classList.remove('rich'); cap.textContent = label; }
  }
  function lbOpen(img) {
    lbList = [...pp.querySelectorAll('.pv-media img, .pv-media video')];
    lb = document.createElement('div');
    lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Visor de imágenes');
    lb.innerHTML = `<div class="lb-top"><span class="lb-n"></span><button type="button" class="lb-x">Cerrar ✕</button></div>
      <div class="lb-stage"><button type="button" class="lb-prev" aria-label="Anterior">←</button><button type="button" class="lb-next" aria-label="Siguiente">→</button></div>
      <p class="lb-cap"></p>`;
    document.body.appendChild(lb);
    arrows(lb);
    lbShow(lbList.indexOf(img));
    requestAnimationFrame(() => lb.classList.add('in'));
    lb.querySelector('.lb-x').focus();
    lb.addEventListener('click', e => {
      if (e.target.closest('.lb-prev')) return lbShow(lbI - 1);
      if (e.target.closest('.lb-next')) return lbShow(lbI + 1);
      if (e.target.closest('.lb-x') || e.target === lb || e.target.classList.contains('lb-stage')) lbClose();
    });
    let sx = null, sy = null;
    lb.addEventListener('pointerdown', e => { sx = e.clientX; sy = e.clientY; });
    lb.addEventListener('pointerup', e => {
      if (sx === null) return;
      const dx = e.clientX - sx, dy = e.clientY - sy; sx = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) lbShow(lbI + (dx < 0 ? 1 : -1));
      else if (dy > 90) lbClose();
    });
  }
  function lbClose() {
    if (!lb) return;
    const el = lb; lb = null; el.classList.remove('in');
    setTimeout(() => el.remove(), 250);
  }
  pp.addEventListener('click', e => { const im = e.target.closest('.pv-media img, .pv-media video'); if (im) lbOpen(im); });
  addEventListener('keydown', e => {
    if (!lb) return;
    if (e.key === 'Escape') { e.stopImmediatePropagation(); lbClose(); }
    if (e.key === 'ArrowRight') lbShow(lbI + 1);
    if (e.key === 'ArrowLeft') lbShow(lbI - 1);
  }, true);

  /* ——— Regla de texto: el último renglón nunca queda con 3 palabras o menos ———
     Une las últimas 4 palabras con espacios que no cortan, así bajan juntas. */
  function noWidows(root) {
    root.querySelectorAll('p, li, dd, figcaption, .aw-more p').forEach(el => {
      const n = el.lastChild;
      if (!n || n.nodeType !== 3) return;
      if (el.classList.contains('bio')) { const t = n.textContent.replace(/\s+$/, '').split(/ +/); if (t.length > 2) n.textContent = t.slice(0, -2).join(' ') + ' ' + t.slice(-2).join('\u00a0'); return; }
      if (el.closest('.desc-tight .pv-text')) return;
      if (el.closest('.pv-ficha .ejes')) return; // los ejes llenan el renglón; el último renglón se resuelve con contenido
      if (!el.children.length && el.textContent.trim().split(/\s+/).length < 7) return;
      const t = n.textContent.replace(/\s+$/, '').split(/ +/);
      const K = el.closest('.case-txt') ? 2 : 4;
      if (t.length < K) return;
      n.textContent = t.slice(0, -K).join(' ') + (t.length > K ? ' ' : '') + t.slice(-K).join('\u00a0');
    });
  }
  noWidows(document);

  /* Reemplaza ← → ↗ ↓ por el mismo ícono de flecha en toda la web */
  function arrows(root) {
    const map = {'←':'ar-l','→':'ar-r','↗':'ar-ne','↓':'ar-d'};
    const PATHS = {'ar-l':'M10.5 3 5.5 8l5 5','ar-r':'M5.5 3l5 5-5 5','ar-ne':'M4.5 4.5H11.5V11.5','ar-d':'M3 5.5l5 5 5-5'};
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n =>
      /[←→↗↓]/.test(n.nodeValue) && !n.parentElement.closest('script,style,textarea,input') ? 1 : 3 });
    const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(n => {
      const f = document.createDocumentFragment();
      n.nodeValue.split(/([←→↗↓])/).forEach(part => {
        if (map[part]) {
          const i = document.createElement('span'); i.className = 'ar'; i.setAttribute('aria-hidden','true');
          i.innerHTML = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="${PATHS[map[part]]}"/></svg>`;
          f.appendChild(i);
        }
        else if (part) f.appendChild(document.createTextNode(part));
      });
      n.replaceWith(f);
    });
  }
  arrows(document.body);

  /* La bajada del proyecto ocupa siempre todo el ancho entre márgenes, en un renglón */
  function fitBajada() {
    const tt = pp.querySelector('.pv-hero.txt-title .pv-title');
    if (tt) { const b = pp.querySelector('.pv-bajada'); if (!b) return; b.style.fontSize = ''; if (innerWidth > 640 && pp.classList.contains('bajada-1l')) { const sp = b.querySelector('.b-long'), hero = b.parentElement; if (sp) { const avail = hero.getBoundingClientRect().right - parseFloat(getComputedStyle(hero).paddingRight) - sp.getBoundingClientRect().left; const w = sp.getBoundingClientRect().width; if (w > avail) b.style.fontSize = Math.floor(parseFloat(getComputedStyle(b).fontSize) * avail / w * 0.99 * 10) / 10 + 'px'; } } return; }
    const el = pp.querySelector('.pv-bajada'); if (!el) return;
    const span = [...el.children].find(c => getComputedStyle(c).display !== 'none') || el;
    el.style.fontSize = '100px';
    const w = span.getBoundingClientRect().width, avail = el.clientWidth;
    if (w) el.style.fontSize = Math.floor(100 * avail / w * 0.995 * 10) / 10 + 'px';
  }
  function lastLineWords(el){ const lines={}; const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT); let n; while(n=w.nextNode()){ const re=/[^\s\u00a0]+/g; let m; while(m=re.exec(n.textContent)){ const r=document.createRange(); r.setStart(n,m.index); r.setEnd(n,m.index+m[0].length); const rs=r.getClientRects(); if(!rs.length) continue; const y=Math.round(rs[rs.length-1].top); lines[y]=(lines[y]||0)+1; } } const ys=Object.keys(lines).map(Number).sort((a,b)=>a-b); return ys.length>1 ? lines[ys[ys.length-1]] : 99; }
  function badLines(el){ const lines={}; const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT); let n; while(n=w.nextNode()){ const re=/[^\s\u00a0]+/g; let m; while(m=re.exec(n.textContent)){ const r=document.createRange(); r.setStart(n,m.index); r.setEnd(n,m.index+m[0].length); const rs=r.getClientRects(); if(!rs.length) continue; for(const q of rs){ const y=Math.round(q.top); lines[y]=(lines[y]||0)+1; } } } const v=Object.keys(lines).map(Number).sort((a,b)=>a-b).map(y=>lines[y]); if(v.length<2) return false; return v.slice(0,-1).some(c=>c<2) || v[v.length-1]<3; }
  function lineCount(el){ const ys=new Set(); const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT); let n; while(n=w.nextNode()){ const re=/[^\s\u00a0]+/g; let m; while(m=re.exec(n.textContent)){ const r=document.createRange(); r.setStart(n,m.index); r.setEnd(n,m.index+m[0].length); for(const q of r.getClientRects()) ys.add(Math.round(q.top)); } } return ys.size; }
  function lastFill(el){ const lines={}; const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT); let n; while(n=w.nextNode()){ const re=/[^\s\u00a0]+/g; let m; while(m=re.exec(n.textContent)){ const r=document.createRange(); r.setStart(n,m.index); r.setEnd(n,m.index+m[0].length); for(const q of r.getClientRects()){ const y=Math.round(q.top); const L=lines[y]||(lines[y]={a:1e9,b:-1e9}); L.a=Math.min(L.a,q.left); L.b=Math.max(L.b,q.right); } } } const ys=Object.keys(lines).map(Number).sort((a,b)=>a-b); if(!ys.length) return {n:0,f:1}; const box=el.getBoundingClientRect(); const L=lines[ys[ys.length-1]]; return {n:ys.length,f:(L.b-L.a)/box.width}; }
  const DESC_MIN = 0.87; // renglón mínimo ≈ párrafo derecho de Biodata; máximo = ancho de la columna (línea roja)
  function fitPara(el){ el.style.letterSpacing=''; el.style.fontSize=''; el.style.maxWidth='none'; const C=el.getBoundingClientRect().width; if(!C) return; const base=lastFill(el).n; if(base<2) return; const fs0=parseFloat(getComputedStyle(el).fontSize); let best=null; for(const k of (el.closest('.pv-text')?[1]:[1,.98,.96,.94])){ el.style.fontSize=k===1?'':(fs0*k)+'px'; for(let w=C; w>=C*(el.closest('.pv-text')?DESC_MIN:0.72); w-=3){ el.style.maxWidth=w+'px'; const r=lastFill(el); if(r.n>base) continue; const score=Math.min(r.f,.92)+(w/C)*0.1+k*0.25+(r.n<base?0.2:0); if(!best||score>best.s) best={w,k,s:score}; } if(best && best.s>=0.92+0.07+0.25) break; } el.style.fontSize=best&&best.k!==1?(fs0*best.k)+'px':''; el.style.maxWidth=best?best.w+'px':'none'; }
  // Ficha: las celdas quedan a su altura natural (línea roja pegada al texto) y el espacio que antes daba el min-height pasa abajo de la ficha, así la descripción sigue empezando a la misma altura
  // Ejes: llenan el renglón hasta ~7px de la línea; si el último renglón queda con un solo eje, se aprieta apenas el espaciado y, si no alcanza, ese eje baja acompañado del anterior
  function fixEjes(){ const dd = pp.querySelector('.pv-ficha .ejes dd'); if (!dd) return; dd.style.letterSpacing = ''; dd.querySelectorAll('.ej-j').forEach(x => x.replaceWith(...x.childNodes)); const lone = () => { const s = [...dd.querySelectorAll('.ej')]; if (s.length < 2) return false; const t = e => Math.round(e.getClientRects()[e.getClientRects().length-1].top); return t(s[s.length-1]) !== t(s[s.length-2]); }; if (!lone()) return; for (const ls of [-0.005, -0.01, -0.015]) { dd.style.letterSpacing = ls + 'em'; if (!lone()) return; } dd.style.letterSpacing = ''; const s = [...dd.querySelectorAll('.ej')]; const a = s[s.length-2], b = s[s.length-1]; const j = document.createElement('span'); j.className = 'ej-j'; j.style.whiteSpace = 'nowrap'; a.before(j); let n = a; while (n) { const nx = n.nextSibling; j.appendChild(n); if (n === b) break; n = nx; } }
  function fixFicha(){ fixEjes(); const f = pp.querySelector('.pv-ficha'); if (!f) return; f.classList.remove('nat'); f.style.marginBottom = ''; if (innerWidth < 901) return; const h1 = f.getBoundingClientRect().height; f.classList.add('nat'); const h2 = f.getBoundingClientRect().height; if (h1 > h2) f.style.marginBottom = (h1 - h2) + 'px'; }
  // Descripción: el ancho más grande posible (hasta la línea roja) sin bajar del mínimo, y con el último renglón de al menos ~55 %
  function fitDesc(el){ el.style.fontSize=''; el.style.maxWidth='none'; const C=el.getBoundingClientRect().width; if(!C) return; let best=null; for(let w=C; w>=C*DESC_MIN; w-=2){ el.style.maxWidth=w+'px'; const r=lastFill(el); if(r.n<2){ best={w}; break; } if(r.f>=0.55){ best={w}; break; } if(!best||r.f>best.f) best={w,f:r.f}; } el.style.maxWidth=best?best.w+'px':'none'; }
  function tightenDesc(){ pp.querySelectorAll('.fb-side .case-txt p').forEach(fitPara); if(!pp.classList.contains('desc-tight')) return; pp.querySelectorAll('.pv-text p').forEach(fitDesc); }
  function fixShortLines(){ pp.querySelectorAll('.fb-note:not(.fb-quote) p, #pp:not(.desc-tight) .pv-text p').forEach(el=>{ el.style.maxWidth=''; el.style.fontSize=''; if(!badLines(el)) return; const W=el.getBoundingClientRect().width; for(let f=0.98; f>=0.8; f-=0.02){ el.style.maxWidth=(W*f)+'px'; if(!badLines(el)) return; } el.style.maxWidth=''; const fs=parseFloat(getComputedStyle(el).fontSize); for(let d=0.25; d<=1.5; d+=0.25){ el.style.fontSize=(fs-d)+'px'; if(!badLines(el)) return; for(let f=0.98; f>=0.86; f-=0.02){ el.style.maxWidth=(W*f)+'px'; if(!badLines(el)) return; } el.style.maxWidth=''; } el.style.fontSize=''; }); }
  addEventListener('resize', () => { if (!pp.hidden) { fitBajada(); fixShortLines(); tightenDesc(); fixFicha(); } });
  function fitLead(){ const el=document.querySelector('.c-lead'); if(!el)return; const ln=el.querySelector('.ln'); el.style.fontSize='100px'; const r=document.createRange(); r.selectNodeContents(ln); const w=r.getBoundingClientRect().width; if(w) el.style.fontSize=Math.floor(100*el.clientWidth/w*0.995*10)/10+'px'; }
  function fitAvail(){ document.querySelectorAll('.c-links .loc-t .av').forEach(av=>{ av.style.fontSize=''; const box=av.parentElement; let f=parseFloat(getComputedStyle(av).fontSize); while(av.scrollWidth>box.clientWidth+0.5 && f>8){ f-=0.25; av.style.fontSize=f+'px'; } }); }
  fitAvail(); addEventListener('resize', fitAvail); document.fonts && document.fonts.ready.then(fitAvail);
  fitLead(); addEventListener('resize', fitLead); document.fonts && document.fonts.ready.then(fitLead);
  // Resaltados en rojo: en compu se encienden al acercar el mouse (RANGO_HL px) al texto
  const RANGO_HL = 40;
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let hx = 0, hy = 0, hraf = 0;
    pp.addEventListener('mousemove', e => { hx = e.clientX; hy = e.clientY; if (!hraf) hraf = requestAnimationFrame(() => {
      hraf = 0;
      pp.querySelectorAll('.pv-text, .fb-note').forEach(b => {
        const r = b.getBoundingClientRect();
        const near = hx > r.left - RANGO_HL && hx < r.right + RANGO_HL && hy > r.top - RANGO_HL && hy < r.bottom + RANGO_HL;
        b.classList.toggle('hl-on', near);
      });
    }); }, {passive:true});
  }
  document.fonts && document.fonts.ready.then(() => { if (!pp.hidden) { fitBajada(); tightenDesc(); fixFicha(); } });

  /* ——— Descargar CV: dentro de Claude usa el permiso de descarga del visor; publicado en otro lado, el link baja el PDF directo ——— */
  document.querySelectorAll('[data-cv-dl]').forEach(a => a.addEventListener('click', async e => {
    if (!(window.claude && window.claude.use)) return;
    e.preventDefault();
    const href = a.getAttribute('href'), name = a.getAttribute('download') || 'CV.pdf';
    try {
      const dl = await window.claude.use('downloads');
      if (!dl) { window.open(href, '_blank', 'noopener'); return; }
      const blob = await (await fetch(href)).blob();
      await dl.save({filename: name, data: blob});
    } catch (err) {
      if (!err || err.code !== 'declined') { const w = window.open(href, '_blank', 'noopener'); if (!w) location.href = href; }
    }
  }));

  /* ——— Links del footer ——— */
  document.querySelectorAll('.foot a[data-go]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.dataset.go;
    if (id === 'inicio') { scrollTo({top:0, behavior: reduce ? 'auto' : 'smooth'}); return; }
    const f = document.getElementById(id);
    f.dataset.auto = 'done'; setOpen(f, true);
    f.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block:'start'});
  }));

  /* ——— Formulario ———
     En GitHub Pages: creá un formulario gratis en Formspree o Web3Forms
     y pegá acá la URL que te dan. Mientras esté vacío, funciona como vista previa. */
  const FORM_ENDPOINT = '';
  const form = document.getElementById('cform');
  const note = document.getElementById('f-note');
  const setErr = (id, msg) => document.getElementById(id).textContent = msg;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name = form.nombre.value.trim(), mail = form.email.value.trim(), msg = form.mensaje.value.trim();
    setErr('e-name', name ? '' : 'Escribí tu nombre.');
    setErr('e-mail', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) ? '' : 'Revisá el email: falta la @ o el dominio.');
    setErr('e-msg', msg ? '' : 'Contame algo del proyecto.');
    if (!name || !msg || document.getElementById('e-mail').textContent) return;
    note.classList.remove('ok');
    if (!FORM_ENDPOINT) {
      note.textContent = 'Vista previa: el formulario está listo, pero todavía no está conectado. El envío se activa al publicar la página en GitHub.';
      return;
    }
    const btn = form.querySelector('.send');
    btn.disabled = true; note.textContent = 'Enviando…';
    try {
      const r = await fetch(FORM_ENDPOINT, {method:'POST', body:new FormData(form), headers:{Accept:'application/json'}});
      if (!r.ok) throw 0;
      form.reset(); note.classList.add('ok');
      note.textContent = '¡Gracias! Recibí tu mensaje y te respondo pronto.';
    } catch (_) {
      note.textContent = 'No se pudo enviar. Probá de nuevo o escribime directo a ' + document.getElementById('mail').textContent;
    } finally { btn.disabled = false; }
  });

  /* ——— Copiar email ——— */
  const btn = document.getElementById('copy');
  btn.addEventListener('click', () => {
    const txt = document.getElementById('mail').textContent;
    const done = () => { btn.textContent = 'Copiado'; setTimeout(() => btn.textContent = 'Copiar', 1600); };
    try {
      navigator.clipboard.writeText(txt).then(done, () => { getSelection().selectAllChildren(document.getElementById('mail')); });
    } catch (_) { getSelection().selectAllChildren(document.getElementById('mail')); }
  });



  /* ——— Sobre mí: mazo de fotos (tocar o deslizar pasa a la siguiente) ——— */
  (function deck(){
    const st = document.getElementById('dk'); if (!st) return;
    const list = [2, 1, 3, 4, 5].map(n => `img/me/me-${n}.jpg`);
    const els = list.map((src, i) => { const el = document.createElement('div'); el.className = 'dk-card'; el.innerHTML = `<img src="${src}" alt="Lara Rosario Caminos" draggable="false"${i ? ' loading="lazy"' : ''}>`; st.insertBefore(el, st.lastElementChild); return el; });
    let order = els.map((_, i) => i), busy = false;
    const paint = () => order.forEach((idx, pos) => { const el = els[idx], rot = [0, -4, 5, -7, 3][pos] || 0; el.style.zIndex = 50 - pos; el.style.transform = `translate(${pos * 6}px, ${pos * 4}px) rotate(${rot}deg) scale(${1 - pos * .03})`; });
    const next = () => { if (busy) return; busy = true; els[order[0]].style.transform = 'translate(120%, -6%) rotate(18deg)'; setTimeout(() => { order.push(order.shift()); paint(); busy = false; }, 280); };
    let sx = null;
    st.addEventListener('pointerdown', e => { sx = e.clientX; });
    st.addEventListener('pointerup', e => { if (sx === null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 40 || Math.abs(dx) < 6) next(); });
    paint();
    /* pasa sola cada 2,5 s si nadie la toca; tocar reinicia la cuenta */
    const reduceM = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let timer = 0, visible = false;
    const arm = () => { clearTimeout(timer); if (reduceM) return; timer = setTimeout(() => { if (visible && !document.hidden) next(); arm(); }, 2500); };
    new IntersectionObserver(es => { visible = es.some(e => e.isIntersecting); }).observe(st);
    st.addEventListener('pointerdown', arm);
    arm();
  })();
  /* ——— Foto de Sobre mí: MorphSlider (React Bits) portado a WebGL sin dependencias ——— */
  (function morphPortrait() {
    const box = document.querySelector('.portrait');
    if (!box) return;
    const srcs = [1, 2, 3, 4, 5].map(n => `img/me/me-${n}.jpg`);
    box.textContent = '';
    box.classList.add('is-morph');
    const fallback = document.createElement('img');
    fallback.src = srcs[0]; fallback.alt = 'Lara Rosario Caminos'; fallback.className = 'morph-fallback';
    box.appendChild(fallback);
    const canvas = document.createElement('canvas');
    canvas.className = 'morph-canvas'; canvas.setAttribute('aria-hidden', 'true');
    box.appendChild(canvas);
    let faded = false;
    function useFade() {
      if (faded) return; faded = true; canvas.remove(); box.classList.remove('is-ready');
      let k = 0; setInterval(() => { k = (k + 1) % srcs.length; const n = new Image(); n.className = 'morph-fallback fade-in'; n.alt = fallback.alt; n.src = srcs[k];
        box.appendChild(n); setTimeout(() => { [...box.querySelectorAll('.morph-fallback')].slice(0, -1).forEach(x => x.remove()); }, 1400); }, 2500);
    }
    const gl = canvas.getContext('webgl', { antialias: true, premultipliedAlpha: false });
    if (!gl) return useFade();
    const VS = 'attribute vec2 p;varying vec2 vUv;void main(){vUv=p*0.5+0.5;vUv.y=1.0-vUv.y;gl_Position=vec4(p,0.0,1.0);}';
    const FS = `precision highp float;
uniform sampler2D tC;uniform sampler2D tN;uniform vec2 uR;uniform vec2 uSC;uniform vec2 uSN;
uniform float uP;uniform float uI;uniform float uS;uniform float uA;uniform float uD;uniform float uT;uniform float uRed;
varying vec2 vUv;const float PI=3.14159265359;
float h21(vec2 p){vec3 q=fract(vec3(p.xyx)*0.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float nz(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);return mix(mix(h21(i),h21(i+vec2(1,0)),u.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x),u.y);}
float fbm(vec2 p){float v=0.0,a=0.5;for(int i=0;i<5;i++){v+=a*nz(p);p*=2.0;a*=0.5;}return v;}
vec2 cover(vec2 uv,vec2 r,vec2 im){float rA=r.x/max(r.y,1.0),iA=im.x/max(im.y,1.0);vec2 s=vec2(1.0);float k=rA/max(iA,1e-4);if(k>1.0)s.y=1.0/k;else s.x=k;return (uv-0.5)*s+0.5;}
void main(){float p=clamp(uP,0.0,1.0);float env=sin(p*PI);vec2 uv=vUv;
uv+=vec2(sin(uT*0.25+uv.y*4.0),cos(uT*0.22+uv.x*4.0))*uD*0.008;uv=(uv-0.5)*(1.0-uD*0.02*(0.5+0.5*sin(uT*0.4)))+0.5;
vec2 uc=uv,un=uv;float m=smoothstep(0.0,1.0,p);
if(uRed<0.5){float n=fbm(uv*uS+uT*0.03);float w=fbm(uv*uS*1.7-uT*0.02);vec2 g=vec2(n,w)-0.5;uc=uv+g*uI*0.5*p;un=uv-g*uI*0.5*(1.0-p);m=smoothstep(n-0.15,n+0.15,p);}
vec2 sc=cover(uc,uR,uSC),sn=cover(un,uR,uSN);float ca=uRed<0.5?uA*env*0.03:0.0;
vec3 cc=vec3(texture2D(tC,sc+vec2(ca,0)).r,texture2D(tC,sc).g,texture2D(tC,sc-vec2(ca,0)).b);
vec3 cn=vec3(texture2D(tN,sn+vec2(ca,0)).r,texture2D(tN,sn).g,texture2D(tN,sn-vec2(ca,0)).b);
gl_FragColor=vec4(mix(cc,cn,m),1.0);}`;
    const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
    const prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = n => gl.getUniformLocation(prog, n);
    const u = { tC: U('tC'), tN: U('tN'), uR: U('uR'), uSC: U('uSC'), uSN: U('uSN'), uP: U('uP'), uI: U('uI'), uS: U('uS'), uA: U('uA'), uD: U('uD'), uT: U('uT'), uRed: U('uRed') };
    const reduceM = matchMedia('(prefers-reduced-motion: reduce)').matches;
    gl.uniform1f(u.uI, 0.5); gl.uniform1f(u.uS, 2.4); gl.uniform1f(u.uA, 0.0); gl.uniform1f(u.uD, 0.35); gl.uniform1f(u.uRed, reduceM ? 1 : 0);
    gl.uniform1i(u.tC, 0); gl.uniform1i(u.tN, 1);
    const tex = [], size = [];
    const blank = () => { const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([145, 0, 0, 255])); return t; };
    srcs.forEach((s, i) => {
      tex[i] = blank(); size[i] = [4, 5];
      const im = new Image();
      im.onload = () => {
        const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
        try { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im); } catch (_) { return useFade(); }
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        tex[i] = t; size[i] = [im.naturalWidth, im.naturalHeight];
        if (i === 0) box.classList.add('is-ready');
      };
      im.src = s;
    });
    let cur = 0, nxt = 0, prog01 = 0, tStart = 0, animating = false, visible = true, raf = 0, timer = 0;
    const DUR = 850, HOLD = 2500;
    const ease = x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    const resize = () => {
      const r = box.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(r.width * d)); canvas.height = Math.max(1, Math.round(r.height * d));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    new ResizeObserver(resize).observe(box); resize();
    new IntersectionObserver(es => { visible = es.some(e => e.isIntersecting); if (visible && !raf) raf = requestAnimationFrame(frame); }).observe(box);
    const schedule = () => { clearTimeout(timer); timer = setTimeout(() => { if (!document.hidden && visible) { nxt = (cur + 1) % srcs.length; tStart = performance.now(); animating = true; } else schedule(); }, HOLD); };
    function frame(now) {
      raf = 0; if (!visible) return;
      if (animating) {
        const k = Math.min(1, (now - tStart) / (reduceM ? 400 : DUR)); prog01 = ease(k);
        if (k >= 1) { cur = nxt; prog01 = 0; animating = false; schedule(); }
      }
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex[cur]);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, tex[animating ? nxt : cur]);
      gl.uniform2f(u.uR, canvas.width, canvas.height); gl.uniform2f(u.uSC, size[cur][0], size[cur][1]);
      const sn = size[animating ? nxt : cur]; gl.uniform2f(u.uSN, sn[0], sn[1]);
      gl.uniform1f(u.uP, prog01); gl.uniform1f(u.uT, reduceM ? 0 : now * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    }
    schedule();
    raf = requestAnimationFrame(frame);
  })();

  /* ——— Textura de fondo: PixelBlast (React Bits) portado a JS sin React ——— */
  const PixelBlastFx = (() => {
    const MAX_CLICKS = 10, INTRO_SECONDS = 1.8;
    const SHAPES = { square: 0, circle: 1, triangle: 2, diamond: 3, cross: 4, ring: 5 };
    const HOVERS = { none: 0, grow: 1, reveal: 2 };
    const bayer2 = (x, y) => (Math.floor(x) / 2 + Math.floor(y) * Math.floor(y) * 0.75) % 1;
    const bayer8 = (x, y) => (bayer2(x / 4, y / 4) * 0.25 + bayer2(x / 2, y / 2)) * 0.25 + bayer2(x, y);
    const BAYER_TABLE = Array.from({ length: 64 }, (_, i) => bayer8(i % 8, Math.floor(i / 8)).toFixed(6)).join(', ');
    const RANGE_MIN = -6, RANGE_MAX = 10;
    const VERTEX = `#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;
    const PACKING = `
const float RANGE_MIN = ${RANGE_MIN.toFixed(1)};
const float RANGE_MAX = ${RANGE_MAX.toFixed(1)};
vec2 pack16(float value) {
  float x = floor(clamp((value - RANGE_MIN) / (RANGE_MAX - RANGE_MIN), 0.0, 1.0) * 65535.0 + 0.5);
  float hi = floor(x / 256.0);
  return vec2(hi, x - hi * 256.0) / 255.0;
}
float unpack16(vec2 c) {
  float x = floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5);
  return RANGE_MIN + x / 65535.0 * (RANGE_MAX - RANGE_MIN);
}
`;
    const CELL_FRAGMENT = `#version 300 es
precision highp float;
precision highp int;
uniform vec2 uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform int uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform vec2 uClickPos[${MAX_CLICKS}];
uniform float uClickAge[${MAX_CLICKS}];
uniform ivec2 uOrigin;
uniform vec2 uDrift;
uniform int uHover;
uniform vec2 uMouse;
uniform float uMouseRadius;
uniform float uMousePresence;
uniform float uIntro;
uniform sampler2D uPrev;
uniform float uDecay;
uniform float uFresh;
out vec4 outCell;
${PACKING}
float hash11(float n) { return fract(sin(n) * 43758.5453); }
float vnoise(vec3 p) {
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0, 0.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n100 = hash11(dot(ip + vec3(1.0, 0.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n010 = hash11(dot(ip + vec3(0.0, 1.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n110 = hash11(dot(ip + vec3(1.0, 1.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n001 = hash11(dot(ip + vec3(0.0, 0.0, 1.0), vec3(1.0, 57.0, 113.0)));
  float n101 = hash11(dot(ip + vec3(1.0, 0.0, 1.0), vec3(1.0, 57.0, 113.0)));
  float n011 = hash11(dot(ip + vec3(0.0, 1.0, 1.0), vec3(1.0, 57.0, 113.0)));
  float n111 = hash11(dot(ip + vec3(1.0, 1.0, 1.0), vec3(1.0, 57.0, 113.0)));
  vec3 w = fp * fp * fp * (fp * (fp * 6.0 - 15.0) + 10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0 = mix(x00, x10, w.y);
  float y1 = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}
float fbm2(vec2 uv, float t) {
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < 5; ++i) {
    sum += amp * vnoise(p * freq);
    freq *= 1.25;
    amp *= 1.0;
  }
  return sum * 0.5 + 0.5;
}
void main() {
  ivec2 texel = ivec2(gl_FragCoord.xy);
  float aspectRatio = uResolution.x / uResolution.y;
  float cellPixelSize = 8.0 * uPixelSize;
  vec2 cellId = vec2(texel + uOrigin);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);
  float base = fbm2(uv + uDrift, uTime * 0.05);
  base = base * 0.5 - 0.65;
  float feed = base + (uDensity - 0.5) * 0.3;
  if (uEnableRipples == 1) {
    for (int i = 0; i < ${MAX_CLICKS}; ++i) {
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      vec2 cuv = (((pos - uResolution * 0.5 - cellPixelSize * 0.5) / uResolution)) * vec2(aspectRatio, 1.0);
      float t = max(uClickAge[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = uRippleSpeed * t;
      float ring = exp(-pow((r - waveR) / uRippleThickness, 2.0));
      float atten = exp(-1.0 * t) * exp(-10.0 * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }
  if (uIntro < 1.0) {
    vec2 center = (-cellPixelSize * 0.5 / uResolution) * vec2(aspectRatio, 1.0);
    float reach = length(vec2(aspectRatio, 1.0)) * 0.5 + 0.2;
    float eased = 1.0 - pow(1.0 - uIntro, 2.4);
    float front = eased * reach;
    float r = distance(uv, center);
    float shown = smoothstep(front + 0.04, front - 0.06, r);
    float ring = exp(-pow((r - front) / 0.07, 2.0)) * (1.0 - uIntro);
    feed = mix(-1.0, feed, shown);
    feed = max(feed, ring * 1.4);
  }
  float brush = 0.0;
  if (uHover > 0) {
    vec2 d = (cellCoord + cellPixelSize * 0.5 + uResolution * 0.5 - uMouse) / max(uMouseRadius, 1.0);
    brush = exp(-dot(d, d)) * uMousePresence;
  }
  vec4 prev = texelFetch(uPrev, texel, 0) * (1.0 - uFresh);
  float trail = max(brush, max(prev.a * uDecay - 1.0 / 255.0, 0.0));
  if (uHover == 2) feed += trail * 0.9;
  outCell = vec4(pack16(feed), clamp((feed + 0.5) * 0.5, 0.0, 1.0), trail);
}`;
    const MAIN_FRAGMENT = `#version 300 es
precision highp float;
precision highp int;
uniform vec3 uColor;
uniform vec3 uAccent;
uniform vec2 uResolution;
uniform float uTime;
uniform float uClock;
uniform float uPixelSize;
uniform float uPixelJitter;
uniform float uEdgeFade;
uniform int uShapeType;
uniform sampler2D uCells;
uniform ivec2 uOrigin;
uniform ivec2 uCellCount;
uniform float uSoftness;
uniform float uSmoothing;
uniform float uGlow;
uniform float uTwinkle;
uniform float uLightMode;
uniform float uTransparent;
uniform float uNoise;
uniform int uHover;
uniform float uScroll;
uniform vec4 uRects[160];
uniform int uRectN;
uniform float uFeather;
out vec4 fragColor;
${PACKING}
const float BAYER[64] = float[64](${BAYER_TABLE});
vec2 gDx;
vec2 gDy;
float aaFrom(vec2 grad) { return abs(dot(grad, gDx)) + abs(dot(grad, gDy)); }
float maskSquare(vec2 p, float cov, float soft) {
  if (soft <= 0.0) return cov;
  float side = 0.5 * sqrt(clamp(cov, 0.0, 1.0));
  vec2 c = p - 0.5;
  vec2 q = abs(c) - side;
  float d = max(q.x, q.y);
  vec2 grad = q.x > q.y ? vec2(sign(c.x), 0.0) : vec2(0.0, sign(c.y));
  float aa = max(aaFrom(grad), 1e-4);
  return 1.0 - smoothstep(-aa * 0.5, aa * 0.5, d);
}
float maskCircle(vec2 p, float cov) {
  float r = sqrt(cov) * 0.25;
  vec2 c = p - 0.5;
  float len = length(c);
  float d = len - r;
  float aa = 0.5 * aaFrom(c / max(len, 1e-5));
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}
float maskDiamond(vec2 p, float cov) {
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  float pixelSize = uPixelSize;
  vec2 screen = gl_FragCoord.xy;
  vec4 empty = vec4(0.0);
  vec2 fragCoord = screen - uResolution * 0.5 - vec2(0.0, uScroll);
  gDx = dFdx(fragCoord) / pixelSize;
  gDy = dFdy(fragCoord) / pixelSize;
  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  ivec2 texel = clamp(ivec2(cellId) - uOrigin, ivec2(0), uCellCount - 1);
  vec2 smoothAt = (fragCoord / cellPixelSize - vec2(uOrigin)) / vec2(uCellCount);
  vec4 blended = texture(uCells, smoothAt);
  float smoothFeed = blended.b * 2.0 - 0.5;
  float feed = smoothFeed;
  float trail = uHover == 1 ? blended.a : 0.0;
  if (uSmoothing < 1.0) {
    vec4 cell = texelFetch(uCells, texel, 0);
    feed = mix(unpack16(cell.rg), smoothFeed, uSmoothing);
  }
  if (feed < -0.12 * uSoftness && smoothFeed < 0.2) { fragColor = empty; return; }
  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fragCoord / pixelSize - pixelId;
  ivec2 cellBits = ivec2(mod(pixelId, 8.0));
  float bayer = BAYER[cellBits.y * 8 + cellBits.x] - 0.5;
  float margin = feed + bayer - 0.5;
  float bw = uSoftness > 0.0 ? smoothstep(-0.12 * uSoftness, 0.12 * uSoftness, margin) : step(0.0, margin);
  float h = fract(sin(dot(pixelId, vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float heat = max(trail, clamp((feed - 1.0) * 2.5, 0.0, 1.0) * min(uGlow * 2.0, 1.0));
  float coverage = bw * jitterScale * (1.0 + heat * 0.35);
  float M;
  if (uShapeType == 1) M = maskCircle(pixelUV, coverage);
  else if (uShapeType == 3) M = maskDiamond(pixelUV, coverage);
  else M = maskSquare(pixelUV, coverage, uSoftness);
  if (uTwinkle > 0.0) {
    float rate = 1.5 + 3.0 * fract(h * 7.31);
    float wave = 0.5 + 0.5 * sin(uClock * rate + h * 37.0);
    M *= 1.0 - uTwinkle * 0.55 * wave * wave;
  }
  float density = clamp(smoothFeed, 0.0, 1.0);
  float glow = 0.0;
  if (uGlow > 0.0) {
    float bloom = smoothstep(0.2, 1.0, density);
    glow = bloom * bloom * uGlow * (uLightMode > 0.5 ? 0.12 : 0.22);
  }
  float fade = 1.0;
  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    vec2 edgeA = clamp(norm / uEdgeFade, 0.0, 1.0);
    vec2 edgeB = clamp((1.0 - norm) / uEdgeFade, 0.0, 1.0);
    vec2 sa = edgeA * edgeA * edgeA * (edgeA * (edgeA * 6.0 - 15.0) + 10.0);
    vec2 sb = edgeB * edgeB * edgeB * (edgeB * (edgeB * 6.0 - 15.0) + 10.0);
    fade *= sa.x * sa.y * sb.x * sb.y;
  }
  float dmin = 1e5;
  for (int i = 0; i < 160; ++i) {
    if (i >= uRectN) break;
    vec4 r = uRects[i];
    vec2 q = max(r.xy - gl_FragCoord.xy, gl_FragCoord.xy - r.zw);
    float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
    dmin = min(dmin, d);
  }
  vec2 np = gl_FragCoord.xy / (uFeather * 1.6);
  vec2 ni = floor(np), nf = fract(np); nf = nf * nf * (3.0 - 2.0 * nf);
  float nz = mix(mix(hash(ni), hash(ni + vec2(1.0, 0.0)), nf.x), mix(hash(ni + vec2(0.0, 1.0)), hash(ni + vec2(1.0, 1.0)), nf.x), nf.y);
  float keep = smoothstep(0.0, uFeather, dmin + (nz - 0.5) * uFeather * 0.9);
  fade *= keep;
  M = clamp(M, 0.0, 1.0) * fade;
  glow *= fade;
  float hot = clamp(heat, 0.0, 1.0);
  float tone = smoothstep(0.3, 1.0, density) * 0.85;
  vec3 color = mix(uColor, uAccent, max(tone, hot));
  vec3 lit = uLightMode > 0.5 ? color * (1.0 - 0.35 * hot) : mix(color, vec3(1.0), 0.45 * hot);
  if (uNoise > 0.0) {
    float n = hash(floor(gl_FragCoord.xy) + floor(uTime * 60.0));
    lit = clamp(lit + (n - 0.5) * uNoise, 0.0, 1.0);
  }
  vec3 haze = uLightMode > 0.5 ? mix(color, vec3(1.0), 0.35) : color;
  float alpha = M + glow * (1.0 - M);
  vec3 premul = lit * M + haze * glow * (1.0 - M);
  fragColor = vec4(premul, alpha);
}`;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const compile = (gl, type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (gl.getShaderParameter(s, gl.COMPILE_STATUS)) return s; gl.deleteShader(s); return null; };
    const link = (gl, frag) => {
      const v = compile(gl, gl.VERTEX_SHADER, VERTEX), f = compile(gl, gl.FRAGMENT_SHADER, frag), prog = gl.createProgram();
      if (!v || !f || !prog) return null;
      gl.attachShader(prog, v); gl.attachShader(prog, f); gl.linkProgram(prog); gl.deleteShader(v); gl.deleteShader(f);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { gl.deleteProgram(prog); return null; }
      const u = {}, n = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; i++) { const info = gl.getActiveUniform(prog, i); if (!info) continue; const name = info.name.replace(/\[0\]$/, ''); u[name] = gl.getUniformLocation(prog, name); }
      return { program: prog, uniforms: u };
    };
    const hex = h => { h = String(h).replace('#', ''); const n = parseInt(h.slice(0, 6), 16); return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; };

    return function mount(container, opts) {
      const s = Object.assign({ variant: 'square', pixelSize: 3, color: '#B497CF', patternScale: 2, patternDensity: 1, pixelSizeJitter: 0,
        enableRipples: true, rippleIntensityScale: 1, rippleThickness: 0.1, rippleSpeed: 0.3, speed: 0.5, edgeFade: 0.5, noiseAmount: 0,
        softness: 0.6, smoothing: 1, glow: 0.4, twinkle: 0.25, drift: 0.2, driftAngle: 30, hoverEffect: 'reveal', hoverRadius: 140,
        autoRipple: 0, intro: true, lightMode: false }, opts);
      s.accentColor = s.accentColor || s.color;
      const shape = SHAPES[s.variant] ?? 0, hover = HOVERS[s.hoverEffect] ?? 0;
      const canvas = document.createElement('canvas'); canvas.className = 'pb-canvas'; canvas.setAttribute('aria-hidden', 'true');
      container.appendChild(canvas);
      const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false });
      if (!gl) return () => canvas.remove();
      const cellShader = link(gl, CELL_FRAGMENT), mainShader = link(gl, MAIN_FRAGMENT);
      if (!cellShader || !mainShader) return () => canvas.remove();
      const cu = cellShader.uniforms, mu = mainShader.uniforms, vao = gl.createVertexArray();
      const targets = [0, 1].map(() => {
        const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
        [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER].forEach(k => gl.texParameteri(gl.TEXTURE_2D, k, gl.LINEAR));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        const fb = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, fb); gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0);
        return { texture: t, framebuffer: fb };
      });
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      const reduceM = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const view = { width: 1, height: 1, ratio: 1 }, cells = { x: 0, y: 0, w: 1, h: 1, key: '' };
      const pointer = { x: 0, y: 0, inside: false }, mouse = { x: 0, y: 0, ready: false };
      const clickPos = new Float32Array(MAX_CLICKS * 2).fill(-1), clickAt = new Float32Array(MAX_CLICKS), clickAge = new Float32Array(MAX_CLICKS);
      let clickIndex = 0, current = 0, fresh = true, elapsed = 0, clock = 0, presence = 0, driftX = 0, driftY = 0;
      let introClock = s.intro && !reduceM ? 0 : 1, nextAuto = 1.2, raf = 0, last = 0, visible = true, quiet = 0, dead = false;
      const timeOffset = Math.random() * 1000;
      const scrollEl = s.scrollEl || null;
      const scrollPx = () => Math.round((scrollEl ? scrollEl.scrollTop : window.scrollY) * view.ratio);
      const rectBuf = new Float32Array(160 * 4); let rectN = 0, rectAt = 0;
      const maskSel = s.mask || null, maskRoot = s.maskRoot || document;
      const collect = () => {
        rectN = 0; if (!maskSel) return;
        const H = innerHeight, R = view.ratio, ch = canvas.height;
        const push = (b, pad) => {
          if (rectN >= 160 || b.width < 1 || b.height < 1 || b.bottom < -60 || b.top > H + 60) return;
          const o = rectN * 4;
          rectBuf[o] = (b.left - pad) * R; rectBuf[o + 1] = ch - (b.bottom + pad) * R;
          rectBuf[o + 2] = (b.right + pad) * R; rectBuf[o + 3] = ch - (b.top - pad) * R;
          rectN++;
        };
        const rg = document.createRange();
        for (const el of maskRoot.querySelectorAll(maskSel)) {
          if (rectN >= 160) break;
          const b = el.getBoundingClientRect();
          if (b.width < 1 || b.height < 1 || b.bottom < -60 || b.top > H + 60) continue;
          if (s.maskSkip && el.closest(s.maskSkip)) continue;
          if (el.closest('.fold:not(.is-open) .body')) continue;
          if (el.matches(s.maskText || '')) {
            rg.selectNodeContents(el);
            let line = null;
            for (const r of rg.getClientRects()) {
              if (r.width < 1) continue;
              if (line && Math.abs(r.top - line.top) < 4) { line.left = Math.min(line.left, r.left); line.right = Math.max(line.right, r.right); line.bottom = Math.max(line.bottom, r.bottom); }
              else { if (line) push(line, 4); line = { left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: 1, height: 1 }; }
            }
            if (line) push(line, 4);
          } else push(b, 6);
        }
      };
      const layoutCells = () => {
        const cps = 8 * s.pixelSize * view.ratio, w = canvas.width, h = canvas.height;
        const sc = scrollPx(), x0 = Math.floor((-w / 2 - cps) / cps), x1 = Math.floor((w / 2 + cps) / cps), y0 = Math.floor((-h / 2 - sc - cps) / cps), y1 = Math.floor((h / 2 - sc + cps) / cps);
        const width = Math.max(1, Math.min(2048, x1 - x0 + 1)), height = Math.max(1, Math.min(2048, y1 - y0 + 1)), key = `${x0}:${y0}:${width}:${height}`;
        if (key === cells.key) return;
        Object.assign(cells, { key, x: x0, y: y0, w: width, h: height });
        for (const t of targets) { gl.bindTexture(gl.TEXTURE_2D, t.texture); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null); }
        fresh = true;
      };
      const stepCells = decay => {
        const src = targets[current], dst = targets[1 - current];
        gl.bindFramebuffer(gl.FRAMEBUFFER, dst.framebuffer); gl.viewport(0, 0, cells.w, cells.h); gl.disable(gl.BLEND);
        gl.useProgram(cellShader.program); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, src.texture);
        gl.uniform1i(cu.uPrev, 0); gl.uniform2f(cu.uResolution, canvas.width, canvas.height); gl.uniform1f(cu.uTime, timeOffset + elapsed * s.speed);
        gl.uniform1f(cu.uPixelSize, s.pixelSize * view.ratio); gl.uniform1f(cu.uScale, s.patternScale); gl.uniform1f(cu.uDensity, s.patternDensity);
        gl.uniform1i(cu.uEnableRipples, s.enableRipples ? 1 : 0); gl.uniform1f(cu.uRippleSpeed, s.rippleSpeed); gl.uniform1f(cu.uRippleThickness, s.rippleThickness);
        gl.uniform1f(cu.uRippleIntensity, s.rippleIntensityScale); gl.uniform2fv(cu.uClickPos, clickPos); gl.uniform1fv(cu.uClickAge, clickAge);
        gl.uniform2i(cu.uOrigin, cells.x, cells.y); gl.uniform2f(cu.uDrift, driftX, driftY); gl.uniform1i(cu.uHover, hover);
        gl.uniform2f(cu.uMouse, mouse.x, mouse.y - scrollPx()); gl.uniform1f(cu.uMouseRadius, s.hoverRadius * view.ratio); gl.uniform1f(cu.uMousePresence, presence);
        gl.uniform1f(cu.uIntro, introClock); gl.uniform1f(cu.uDecay, decay); gl.uniform1f(cu.uFresh, fresh ? 1 : 0);
        gl.bindVertexArray(vao); gl.drawArrays(gl.TRIANGLES, 0, 3); gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        current = 1 - current; fresh = false;
      };
      const draw = () => {
        gl.viewport(0, 0, canvas.width, canvas.height); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(mainShader.program); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, targets[current].texture);
        gl.uniform1i(mu.uCells, 0); gl.uniform3fv(mu.uColor, hex(s.color)); gl.uniform3fv(mu.uAccent, hex(s.accentColor));
        gl.uniform2f(mu.uResolution, canvas.width, canvas.height); gl.uniform1f(mu.uTime, timeOffset + elapsed * s.speed); gl.uniform1f(mu.uClock, clock);
        gl.uniform1f(mu.uPixelSize, s.pixelSize * view.ratio); gl.uniform1f(mu.uPixelJitter, s.pixelSizeJitter); gl.uniform1f(mu.uEdgeFade, s.edgeFade);
        gl.uniform1i(mu.uShapeType, shape); gl.uniform2i(mu.uOrigin, cells.x, cells.y); gl.uniform2i(mu.uCellCount, cells.w, cells.h);
        gl.uniform1f(mu.uSoftness, s.softness); gl.uniform1f(mu.uSmoothing, s.smoothing); gl.uniform1f(mu.uGlow, s.glow);
        gl.uniform1f(mu.uTwinkle, reduceM ? 0 : s.twinkle); gl.uniform1f(mu.uLightMode, s.lightMode ? 1 : 0); gl.uniform1f(mu.uTransparent, 1);
        gl.uniform1f(mu.uNoise, s.noiseAmount); gl.uniform1i(mu.uHover, hover); gl.uniform1f(mu.uScroll, scrollPx()); gl.uniform4fv(mu.uRects, rectBuf); gl.uniform1i(mu.uRectN, rectN); gl.uniform1f(mu.uFeather, 46 * view.ratio);
        gl.bindVertexArray(vao); gl.drawArrays(gl.TRIANGLES, 0, 3); gl.bindVertexArray(null);
      };
      const resize = () => {
        view.width = Math.max(1, container.clientWidth); view.height = Math.max(1, container.clientHeight);
        view.ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(view.width * view.ratio); canvas.height = Math.round(view.height * view.ratio);
        if (!mouse.ready) { mouse.ready = true; mouse.x = canvas.width / 2; mouse.y = canvas.height / 2; }
        collect(); layoutCells(); stepCells(0); draw(); wake();
      };
      const addRipple = (x, y) => { clickPos[clickIndex * 2] = x * view.ratio; clickPos[clickIndex * 2 + 1] = (view.height - y) * view.ratio - scrollPx(); clickAt[clickIndex] = clock; clickIndex = (clickIndex + 1) % MAX_CLICKS; wake(); };
      const frame = now => {
        raf = 0; if (dead || !visible || document.hidden) return;
        const dt = last ? clamp((now - last) / 1000, 0, 1 / 20) : 0; last = now;
        if (!reduceM) elapsed += dt; clock += dt;
        if (!reduceM && s.drift) { const a = s.driftAngle * Math.PI / 180; driftX += Math.cos(a) * s.drift * dt * 0.05; driftY += Math.sin(a) * s.drift * dt * 0.05; }
        if (!reduceM && s.enableRipples && s.autoRipple > 0 && introClock >= 1) { nextAuto -= dt; if (nextAuto <= 0) { nextAuto = s.autoRipple * (0.7 + Math.random() * 0.6); addRipple((0.15 + Math.random() * 0.7) * view.width, (0.15 + Math.random() * 0.7) * view.height); } }
        for (let k = 0; k < MAX_CLICKS; k++) clickAge[k] = (clock - clickAt[k]) * 0.5;
        const follow = 1 - Math.exp(-dt / 0.08);
        if (pointer.inside) { mouse.x += (pointer.x * view.ratio - mouse.x) * follow; mouse.y += ((view.height - pointer.y) * view.ratio - mouse.y) * follow; }
        presence += ((pointer.inside ? 1 : 0) - presence) * (1 - Math.exp(-dt / 0.25));
        if (now - rectAt > 120) { collect(); rectAt = now; }
        layoutCells(); stepCells(hover ? Math.exp(-dt / 0.45) : 0); draw();
        if (introClock < 1) introClock = Math.min(1, introClock + dt / INTRO_SECONDS);
        const busy = !reduceM || introClock < 1 || presence > 0.001;
        quiet = busy ? 0 : quiet + dt;
        if (quiet < 1.5) raf = requestAnimationFrame(frame);
      };
      function wake() { quiet = 0; if (!raf && visible && !document.hidden && !dead) { last = 0; raf = requestAnimationFrame(frame); } }
      const locate = e => { const r = container.getBoundingClientRect(); const x = e.clientX - r.left, y = e.clientY - r.top; return { x, y, inside: x >= 0 && y >= 0 && x <= r.width && y <= r.height }; };
      const onMove = e => { const { x, y, inside } = locate(e); const was = pointer.inside; pointer.inside = inside; if (inside) { pointer.x = x; pointer.y = y; if (!was) { mouse.x = x * view.ratio; mouse.y = (view.height - y) * view.ratio; } } if (inside || was) wake(); };
      const onDown = e => { const { x, y, inside } = locate(e); if (inside && !reduceM && s.enableRipples) addRipple(x, y); };
      const ro = new ResizeObserver(resize); ro.observe(container);
      const io = new IntersectionObserver(es => { visible = es.some(x => x.isIntersecting); if (visible) wake(); }); io.observe(container);
      addEventListener('pointermove', onMove, { passive: true }); addEventListener('pointerdown', onDown, { passive: true });
      document.addEventListener('visibilitychange', wake);
      const onScroll = () => { collect(); rectAt = performance.now(); if (!raf) { layoutCells(); stepCells(0); draw(); } wake(); };
      (scrollEl || window).addEventListener('scroll', onScroll, { passive: true });
      resize();
      return () => {
        dead = true; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
        (scrollEl || window).removeEventListener('scroll', onScroll); removeEventListener('pointermove', onMove); removeEventListener('pointerdown', onDown); document.removeEventListener('visibilitychange', wake);
        gl.getExtension('WEBGL_lose_context')?.loseContext(); canvas.remove();
      };
    };
  })();
  const TEX_LIGHT = {variant:'circle', pixelSize:4, color:'#c8c8c3', accentColor:'#a8a8a2', patternScale:2.4, patternDensity:0.95, softness:0.7, glow:0.12, twinkle:0.2, speed:0.3, drift:0.15, driftAngle:20, hoverEffect:'reveal', hoverRadius:120, rippleIntensityScale:0.7, edgeFade:0.3, lightMode:true};
  const TEX_DARK = Object.assign({}, TEX_LIGHT, {color:'#2c2c2c', accentColor:'#4a4a4a', glow:0.15, lightMode:false});
  const MASK_TEXT = 'p, h1, h2, h3, h4, li, dt, dd, label, .title, .eyebrow, .wordmark, .lb-cap, .pv-lbl, .aw-btn, .aw-more';
  const MASK_SEL = MASK_TEXT + ', input, textarea, .sign, img, video, iframe, .apps, .c-left, .c-form, .tags, .pv-award, .progs, .yt-frame, .media, .chips, .portrait, .card, .pp-next, .pp-logo, .aw-sign, .send';
  let fxStop = null;
  const siteTex = document.getElementById('site-tex');
  if (siteTex) PixelBlastFx(siteTex, Object.assign({}, TEX_LIGHT, {intro:false, enableRipples:false, mask: MASK_SEL, maskText: MASK_TEXT, maskRoot: document, maskSkip: '.hero, #pp, .pillnav'}));
  function mountTexture(p) {
    if (fxStop) { fxStop(); fxStop = null; }
    const box = pp.querySelector('.pp-tex'); if (!box) return;
    fxStop = PixelBlastFx(box, Object.assign({}, p.dark ? TEX_DARK : TEX_LIGHT, {scrollEl: pp, mask: MASK_SEL, maskText: MASK_TEXT, maskRoot: pp}));
  }

})();
// Carrusel de exhibidores (mobile): avanza solo cada 2,5 s y se pausa 2,5 s al tocarlo
(() => {
  const mq = matchMedia('(max-width:640px)');
  const held = new WeakMap();
  document.addEventListener('touchstart', e => { const r = e.target.closest && e.target.closest('.fb-exh'); if (r) held.set(r, Date.now()); }, {passive:true});
  setInterval(() => {
    if (!mq.matches) return;
    document.querySelectorAll('.pv-media .fb-exh').forEach(r => {
      if (Date.now() - (held.get(r) || 0) < 2500) return;
      const b = r.getBoundingClientRect(); if (b.bottom < 0 || b.top > innerHeight) return;
      const figs = [...r.querySelectorAll('figure')]; if (figs.length < 2) return;
      const step = figs[1].offsetLeft - figs[0].offsetLeft;
      // vaivén 1 → 2 → 3 → 2 → 1 → 2 …: la segunda siempre queda en el medio
      const max = r.scrollWidth - r.clientWidth, n = figs.length;
      const touched = held.get(r) && held.get(r) > (r._t || 0);
      const i = (r._i == null || touched) ? Math.min(n - 1, Math.round(r.scrollLeft / step)) : r._i;
      let dir = r._dir || 1;
      if (i >= n - 1) dir = -1; else if (i <= 0) dir = 1;
      r._dir = dir; r._i = i + dir; r._t = Date.now();
      r.scrollTo({left: Math.max(0, Math.min(max, r._i * step)), behavior: 'smooth'});
    });
  }, 2500);
})();
