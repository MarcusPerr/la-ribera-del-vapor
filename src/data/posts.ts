export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  content: string;
}

export const categories = [
  { name: "Todos", slug: "todos" },
  { name: "Guías", slug: "guias" },
  { name: "Legal", slug: "legal" },
  { name: "Análisis", slug: "analisis" },
  { name: "CBD", slug: "cbd" },
  { name: "Ciencia", slug: "ciencia" },
];

export const posts: BlogPost[] = [
  {
    id: "guia-principiantes-vaporizacion",
    title: "Guía para Principiantes: Todo lo que Necesitas Saber sobre la Vaporización de Hierbas Secas",
    excerpt:
      "Si estás empezando en el mundo de la vaporización, esta guía completa te explicará los conceptos básicos, tipos de vaporizadores y cómo dar tus primeros pasos de forma segura y responsable.",
    category: "Guías",
    categoryColor: "bg-primary-700",
    date: "15 Enero 2025",
    readTime: "12 min",
    image: "/images/guia-principiantes.jpg",
    featured: true,
    content: `
<h2>¿Qué es la Vaporización de Hierbas Secas?</h2>
<p>La vaporización de hierbas secas es un método de extracción de los compuestos activos de las plantas mediante calor controlado, sin llegar a la combustión. A diferencia de fumar, donde las temperaturas superan los 800°C y se generan miles de sustancias tóxicas, un vaporizador trabaja entre los 150°C y 230°C, liberando los cannabinoides y terpenos deseados sin producir humo.</p>

<h2>¿Por qué Vaporizar es Mejor que Fumar?</h2>
<p>La principal ventaja de la vaporización frente a la combustión es la <strong>reducción drástica de sustancias nocivas</strong>. Al no haber combustión, no se generan alquitranes, monóxido de carbono ni las miles de sustancias químicas que acompañan al humo.</p>

<h3>Beneficios principales:</h3>
<ul>
<li><strong>Sin combustión:</strong> No se produce humo, sino vapor, lo que reduce la exposición a toxinas hasta en un 95%.</li>
<li><strong>Mayor eficiencia:</strong> Se aprovecha mejor el material vegetal, necesitando menos cantidad para obtener los mismos efectos.</li>
<li><strong>Sabor puro:</strong> Los terpenos se conservan mucho mejor, ofreciendo una experiencia organoléptica superior.</li>
<li><strong>Control de temperatura:</strong> Puedes seleccionar la temperatura exacta para extraer los compuestos deseados.</li>
<li><strong>Menos olor:</strong> El vapor se disipa rápidamente, lo que resulta ideal para uso discreto.</li>
</ul>

<h2>Tipos de Vaporizadores</h2>
<h3>1. Vaporizadores Portátiles</h3>
<p>Son compactos, funcionan con batería y puedes llevarlos a cualquier parte. Ideales para usuarios que buscan comodidad y discreción. Modelos como el Mighty+ o el Pax Plus son referentes en esta categoría.</p>

<h3>2. Vaporizadores de Escritorio (Desktop)</h3>
<p>Ofrecen la máxima calidad de vapor y están diseñados para uso doméstico. El Volcano es el vaporizador de escritorio más icónico y sigue siendo el estándar de la industria tras décadas en el mercado.</p>

<h3>3. Vaporizadores de Pluma (Pen-style)</h3>
<p>Los más compactos y económicos. Aunque algunos son de buena calidad, muchos modelos baratos ofrecen un rendimiento limitado y pueden no ser la mejor opción para hierba seca.</p>

<h2>Temperaturas Recomendadas</h2>
<p>La temperatura es clave en la experiencia de vaporización. Aquí tienes una guía rápida:</p>
<ul>
<li><strong>150-170°C:</strong> Vapor ligero, ideal para terpenos delicados y sesiones relajantes.</li>
<li><strong>170-190°C:</strong> Equilibrio perfecto entre sabor y potencia. La zona ideal para la mayoría de usuarios.</li>
<li><strong>190-210°C:</strong> Vapor denso y efectos más intensos. Perfecto para uso terapéutico con CBD.</li>
<li><strong>210-230°C:</strong> Máxima extracción. Solo recomendado al final de la sesión o para usuarios experimentados.</li>
</ul>

<blockquote>Recuerda: La vaporización es una herramienta, no un fin en sí misma. Úsala de forma responsable y siempre dentro del marco legal vigente en tu comunidad autónoma.</blockquote>

<h2>Primeros Pasos</h2>
<p>Para empezar, te recomendamos: adquirir un vaporizador de calidad reconocida, moler la hierba de forma uniforme (no demasiado fina), no sobrecargar la cámara y empezar con temperaturas bajas para ir subiendo gradualmente. La paciencia y la experimentación son tus mejores aliadas.</p>
    `,
  },
  {
    id: "legalidad-cannabis-cbd-espana",
    title: "Legalidad del Cannabis y CBD en España: Guía Actualizada 2025",
    excerpt:
      "Conoce el marco legal actual del cannabis y el CBD en España, las diferencias entre uso recreativo, terapéutico y industrial, y qué dice la normativa vigente.",
    category: "Legal",
    categoryColor: "bg-amber-700",
    date: "28 Diciembre 2024",
    readTime: "10 min",
    image: "/images/legal.jpg",
    featured: true,
    content: `
<h2>Marco Legal del Cannabis en España</h2>
<p>La situación legal del cannabis en España es compleja y presenta particularidades que es fundamental conocer. A diferencia de otros países europeos, España tiene un marco normativo con matices importantes que todo usuario debe comprender.</p>

<h2>¿Está Legalizado el Cannabis en España?</h2>
<p>El cannabis con fines recreativos <strong>no está legalizado en España</strong>. Sin embargo, la legislación presenta un vacío legal respecto al cultivo y consumo en espacio privado, lo que ha permitido el surgimiento de los Cannabis Social Clubs (CSC).</p>

<h3>Ley Orgánica de Protección de la Seguridad Ciudadana (LOSC)</h3>
<p>La LOSC, conocida como "Ley Mordaza", considera como infracción administrativa (no delito) el consumo en lugares públicos y la posesión de pequeñas cantidades. Las sanciones pueden ir de 601 a 30.000 euros.</p>

<h3>Cannabis Social Clubs</h3>
<p>Los CSC operan en una zona gris legal. Se basan en el derecho a la libre asociación y al cultivo compartido para miembros. Los requisitos suelen incluir:</p>
<ul>
<li>Ser mayor de edad (18 o 21 años según la comunidad)</li>
<li>Estar previamente recomendado por un socio existente</li>
<li>No consumir en espacios públicos</li>
<li>No distribuir fuera del club</li>
</ul>

<blockquote>Nota importante: La situación de los CSC varía significativamente según la comunidad autónoma. Algunas regiones tienen regulaciones más restrictivas que otras.</blockquote>

<h2>Legalidad del CBD en España</h2>
<p>El CBD (cannabidiol) derivado del cáñamo industrial tiene un marco legal diferente al del cannabis con alto contenido en THC:</p>

<h3>Productos de CBD de uso tópico</h3>
<p>Los cosméticos y productos tópicos con CBD son legales y están regulados por la Agencia Española de Medicamentos y Productos Sanitarios (AEMPS). Deben cumplir la normativa cosmética europea.</p>

<h3>Aceites y productos de ingestión</h3>
<p>La venta de aceite de CBD para consumo oral se encuentra en un terreno más complejo. La AEMPS ha emitido resoluciones que prohíben la comercialización de CBD como suplemento alimenticio, aunque esta situación está en constante evolución.</p>

<h3>Cáñamo Industrial</h3>
<p>El cultivo de cáñamo industrial con menos de 0.2% de THC está permitido en España bajo el Real Decreto 1729/1999, siempre que se cumplan los requisitos establecidos y se utilicen variedades certificadas por la Unión Europea.</p>

<h2>Vaporización y Legalidad</h2>
<p>Los vaporizadores de hierbas secas son dispositivos legales en España. Se venden abiertamente como dispositivos de aromaterapia. Sin embargo:</p>
<ul>
<li>El uso de vaporizadores en espacios públicos puede estar sujeto a las mismas sanciones que el consumo</li>
<li>La posesión del dispositivo en sí no constituye infracción</li>
<li>Es recomendable usarlo siempre en espacios privados</li>
</ul>

<h2>Conclusión y Recomendaciones</h2>
<p>Siempre mantente informado sobre la legislación vigente en tu comunidad autónoma. Las normativas pueden cambiar y la información de este artículo es orientativa. Consulta siempre con un profesional legal si tienes dudas específicas.</p>
    `,
  },
  {
    id: "mejores-vaporizadores-portatiles-2025",
    title: "Los 6 Mejores Vaporizadores Portátiles de 2025: Análisis y Comparativa",
    excerpt:
      "Analizamos los vaporizadores portátiles más destacados del mercado actual, evaluando calidad de vapor, autonomía, facilidad de uso y relación calidad-precio.",
    category: "Análisis",
    categoryColor: "bg-blue-700",
    date: "10 Enero 2025",
    readTime: "15 min",
    image: "/images/vaporizadores.jpg",
    featured: false,
    content: `
<h2>Comparativa de Vaporizadores Portátiles 2025</h2>
<p>Elegir un vaporizador portátil puede ser abrumador por la cantidad de opciones disponibles. Hemos probado y analizado los modelos más populares para ofrecerte esta guía de compra definitiva.</p>

<h2>1. Storz & Bickel Mighty+</h2>
<p>El Mighty+ sigue siendo el rey de los vaporizadores portátiles. Fabricado en Alemania, ofrece una calidad de vapor excepcional gracias a su sistema de calentamiento híbrido (convección + conducción).</p>
<ul>
<li><strong>Calidad de vapor:</strong> 9.5/10</li>
<li><strong>Autonomía:</strong> ~90 minutos</li>
<li><strong>Tiempo de calentamiento:</strong> ~60 segundos</li>
<li><strong>Precio aproximado:</strong> 280-320€</li>
</ul>

<h2>2. Pax Plus</h2>
<p>El Pax Plus es la evolución del icónico Pax 3. Ultracompacto, elegante y con cuatro modos de experiencia preconfigurados que simplifican su uso enormemente.</p>
<ul>
<li><strong>Calidad de vapor:</strong> 8/10</li>
<li><strong>Autonomía:</strong> ~90 minutos</li>
<li><strong>Tiempo de calentamiento:</strong> ~20 segundos</li>
<li><strong>Precio aproximado:</strong> 200-230€</li>
</ul>

<h2>3. Arizer Solo III</h2>
<p>La tercera generación del Solo mejora notablemente en todos los aspectos: calentamiento más rápido, mejor flujo de aire y la calidad de vapor que caracteriza a Arizer.</p>
<ul>
<li><strong>Calidad de vapor:</strong> 9/10</li>
<li><strong>Autonomía:</strong> ~120 minutos</li>
<li><strong>Tiempo de calentamiento:</strong> ~50 segundos</li>
<li><strong>Precio aproximado:</strong> 200-240€</li>
</ul>

<h2>4. DaVinci IQ2</h2>
<p>Un vaporizador americano de alta gama con sistema de calentamiento por convección pura y un diseño que prioriza la pureza del vapor con camino de aire de cerámica y zirconia.</p>
<ul>
<li><strong>Calidad de vapor:</strong> 8.5/10</li>
<li><strong>Autonomía:</strong> ~60 minutos</li>
<li><strong>Tiempo de calentamiento:</strong> ~45 segundos</li>
<li><strong>Precio aproximado:</strong> 220-260€</li>
</ul>

<h2>5. Firefly 2+</h2>
<p>El Firefly 2+ es el vaporizador de convección dinámica por excelencia. Calienta instantáneamente al inhalar, lo que lo hace muy eficiente y perfecto para sesiones cortas.</p>
<ul>
<li><strong>Calidad de vapor:</strong> 9/10</li>
<li><strong>Autonomía:</strong> ~45 minutos</li>
<li><strong>Tiempo de calentamiento:</strong> ~3 segundos</li>
<li><strong>Precio aproximado:</strong> 200-240€</li>
</ul>

<h2>6. XMAX V3 Pro</h2>
<p>La mejor opción económica de esta lista. Ofrece calentamiento por convección híbrida, modo sesión y modo a demanda, todo por menos de 100€. Una relación calidad-precio imbatible.</p>
<ul>
<li><strong>Calidad de vapor:</strong> 7.5/10</li>
<li><strong>Autonomía:</strong> ~60 minutos</li>
<li><strong>Tiempo de calentamiento:</strong> ~30 segundos</li>
<li><strong>Precio aproximado:</strong> 80-100€</li>
</ul>

<h2>Conclusión</h2>
<p>El mejor vaporizador depende de tus necesidades y presupuesto. Para la máxima calidad de vapor sin importar el tamaño, el Mighty+ es insuperable. Si buscas algo más discreto, el Pax Plus o el Arizer Solo III son excelentes opciones. Y si tu presupuesto es ajustado, el XMAX V3 Pro te sorprenderá.</p>
    `,
  },
  {
    id: "cbd-vaporizacion-guia-completa",
    title: "CBD y Vaporización: Guía Completa para un Uso Responsable",
    excerpt:
      "Todo lo que necesitas saber sobre la vaporización de CBD: beneficios, diferencias con otros métodos de consumo, y cómo elegir el producto adecuado.",
    category: "CBD",
    categoryColor: "bg-emerald-700",
    date: "5 Enero 2025",
    readTime: "11 min",
    image: "/images/cbd.jpg",
    featured: false,
    content: `
<h2>¿Qué es el CBD y por qué Vaporizarlo?</h2>
<p>El cannabidiol (CBD) es uno de los más de 100 cannabinoides presentes en la planta de cannabis. A diferencia del THC, el CBD <strong>no es psicoactivo</strong>, lo que significa que no produce el "colocón" asociado al cannabis recreativo. La vaporización se ha consolidado como uno de los métodos más eficientes para consumir CBD.</p>

<h2>Ventajas de la Vaporización de CBD</h2>
<h3>Biodisponibilidad Superior</h3>
<p>La vaporización ofrece una biodisponibilidad del 34-46%, significativamente superior a la vía oral (6-20%). Esto significa que tu cuerpo absorbe una mayor cantidad de CBD con menos producto.</p>

<h3>Inicio Rápido de Efectos</h3>
<p>Los efectos se perciben en 1-3 minutos tras la inhalación, lo que permite un control preciso de la dosificación. Los efectos suelen durar entre 2 y 4 horas.</p>

<h3>Sin Combustión</h3>
<p>La vaporización elimina los riesgos asociados a la combustión, siendo un método significativamente menos dañino para las vías respiratorias.</p>

<h2>Tipos de Productos de CBD para Vaporizar</h2>
<h3>Flores de CBD</h3>
<p>Son los cogollos de cáñamo con alto contenido en CBD (hasta 20%) y menos de 0.2% de THC. Ofrecen la experiencia más completa gracias al efecto séquito (la sinergia entre todos los compuestos de la planta).</p>

<h3>Extracciones y Concentrados</h3>
<p>Incluyen resinas, hash CBD, rosin y otros extractos. Mayor concentración de CBD pero requieren vaporizadores compatibles con concentrados.</p>

<h3>Temperaturas Óptimas para CBD</h3>
<ul>
<li><strong>160-180°C:</strong> Ideal para flores de CBD. Vapor suave y sabroso.</li>
<li><strong>180-200°C:</strong> Extracción más completa. Mayor densidad de vapor.</li>
<li><strong>200-220°C:</strong> Para sesiones intensas o extracciones concentradas.</li>
</ul>

<blockquote>El punto de ebullición del CBD es aproximadamente 160-180°C, por lo que temperaturas superiores a 180°C garantizan una extracción eficiente.</blockquote>

<h2>¿Es Legal Vaporizar CBD?</h2>
<p>El CBD derivado de cáñamo industrial (con menos de 0.2% de THC) es legal en la mayoría de países europeos. En España, la situación es matizada: la venta de flores de CBD ha sido objeto de debate, pero muchos establecimientos las comercializan bajo normativa de productos de coleccionismo o aromaterapia. Infórmate siempre de la normativa local vigente.</p>

<h2>Consejos para un Uso Responsable</h2>
<ul>
<li>Empieza con dosis bajas y ve aumentando gradualmente</li>
<li>Compra siempre en establecimientos de confianza con análisis de laboratorio</li>
<li>Verifica el contenido de THC (debe ser inferior al 0.2%)</li>
<li>Consulta con un profesional de la salud si tomas otros medicamentos</li>
<li>No conduzcas ni manejes maquinaria tras consumir CBD vaporizado</li>
</ul>
    `,
  },
  {
    id: "diferencias-fumar-vaporizar",
    title: "Fumar vs. Vaporizar: Lo que la Ciencia Dice sobre Cada Método",
    excerpt:
      "Un análisis basado en evidencia científica sobre las diferencias entre fumar y vaporizar cannabis, abordando salud, eficiencia y experiencia.",
    category: "Ciencia",
    categoryColor: "bg-purple-700",
    date: "20 Diciembre 2024",
    readTime: "9 min",
    image: "/images/fumar-vs-vaporizar.jpg",
    featured: false,
    content: `
<h2>Fumar vs. Vaporizar: Una Comparación Científica</h2>
<p>El debate entre fumar y vaporizar cannabis lleva años siendo objeto de estudio científico. En este artículo repasamos las principales diferencias respaldadas por la investigación académica.</p>

<h2>Temperatura y Combustión</h2>
<p>La diferencia fundamental radica en la temperatura:</p>
<ul>
<li><strong>Fumar (combustión):</strong> Al encender un porro o pipa, la temperatura alcanza entre 600°C y 900°C. A estas temperaturas se produce pirólisis, generando más de 7.000 sustancias químicas, muchas de ellas cancerígenas.</li>
<li><strong>Vaporizar:</strong> El dispositivo calienta la hierba entre 150°C y 230°C, por debajo del punto de combustión. Solo se liberan los compuestos volátiles deseados sin generar las toxinas de la combustión.</li>
</ul>

<h2>Impacto en la Salud Pulmonar</h2>
<h3>Estudios Clave</h3>
<p>Un estudio publicado en el Journal of Cannabis Research (2021) encontró que los usuarios de vaporizadores presentaban menores niveles de biomarcadores de daño pulmonar que los fumadores. Otro estudio de la Universidad de Michigan (2018) demostró que los pacientes que cambiaron de fumar a vaporizar experimentaron mejoras en la función respiratoria.</p>

<h3>Sustancias Eliminadas al Vaporizar</h3>
<ul>
<li>Alquitranes y brea</li>
<li>Monóxido de carbono (reducido en un 90%+)</li>
<li>Hidrocarburos aromáticos policíclicos</li>
<li>Aminas heterocíclicas</li>
<li>Partículas finas de ceniza</li>
</ul>

<h2>Eficiencia y Ahorro</h2>
<p>La vaporización es significativamente más eficiente en la extracción de cannabinoides. Mientras que al fumar se pierde hasta un 50% de los compuestos activos por combustión incompleta y humo de superficie, un buen vaporizador puede extraer el 80-90% del THC o CBD disponible.</p>

<p>Esto se traduce en que <strong>necesitas entre un 30% y un 40% menos de material</strong> para obtener los mismos efectos con un vaporizador que fumando.</p>

<h2>Sabor y Experiencia</h2>
<p>Los terpenos —compuestos responsables del aroma y sabor del cannabis— son volátiles y se degradan fácilmente con el calor excesivo. Al vaporizar, los terpenos se preservan mucho mejor, ofreciendo:</p>
<ul>
<li>Sabores más puros y diferenciados entre variedades</li>
<li>Mayor apreciación del perfil aromático completo</li>
<li>Experiencia más suave y menos irritante para la garganta</li>
</ul>

<h2>Conclusiones</h2>
<p>La evidencia científica es clara: la vaporización es un método menos dañino y más eficiente que la combustión. Si bien ningún método de inhalación está completamente exento de riesgos, la vaporización representa una reducción de daños significativa para quienes eligen consumir cannabis o CBD.</p>
    `,
  },
  {
    id: "temperaturas-ideales-cannabis",
    title: "La Guía Definitiva de Temperaturas para Vaporizar Cannabis",
    excerpt:
      "Descubre las temperaturas exactas para extraer cada cannabinoide y terpeno, y cómo ajustar tu vaporizador para personalizar tu experiencia.",
    category: "Guías",
    categoryColor: "bg-primary-700",
    date: "12 Diciembre 2024",
    readTime: "8 min",
    image: "/images/temperaturas.jpg",
    featured: false,
    content: `
<h2>La Ciencia detrás de las Temperaturas</h2>
<p>Cada compuesto del cannabis tiene un punto de ebullición específico. Comprender estos puntos te permite personalizar tu experiencia de vaporización de forma precisa, extrayendo exactamente lo que buscas en cada momento.</p>

<h2>Puntos de Ebullición de los Cannabinoides</h2>
<ul>
<li><strong>THC (Tetrahidrocannabinol):</strong> 157°C — El principal compuesto psicoactivo. A temperaturas más altas se libera más cantidad.</li>
<li><strong>CBD (Cannabidiol):</strong> 160-180°C — El cannabinoide no psicoactivo con mayor interés terapéutico.</li>
<li><strong>CBC (Cannabichromene):</strong> 220°C — Antiinflamatorio y potencialmente antidepresivo.</li>
<li><strong>CBG (Cannabigerol):</strong> 185°C — El "cannabinoide madre" con propiedades antibacterianas.</li>
<li><strong>CBN (Cannabinol):</strong> 185°C — Conocido por sus propiedades sedantes.</li>
<li><strong>THCV (Tetrahidrocannabivarina):</strong> 220°C — Supresor del apetito, potencial en diabetes.</li>
</ul>

<h2>Zonas de Temperatura</h2>
<h3>Zona 1: Sutil (150-170°C)</h3>
<p>Ideal para sesiones matutinas o cuando buscas un efecto ligero. Predominan los terpenos más volátiles (limoneno, pineno) con sus propiedades energizantes y de concentración. Vapor muy ligero.</p>

<h3>Zona 2: Equilibrada (170-185°C)</h3>
<p>La zona más popular. Buena extracción de THC y CBD con un equilibrio perfecto entre sabor y potencia. Los terpenos como el mirceno y linalol comienzan a liberarse, aportando relajación.</p>

<h3>Zona 3: Intensa (185-200°C)</h3>
<p>Para efectos más potentes y uso terapéutico. Vapor denso y nubes visibles. Excelente para CBD y sesiones de relajación profunda. Se liberan CBG y CBN.</p>

<h3>Zona 4: Máxima Extracción (200-230°C)</h3>
<p>Para extraer hasta el último cannabinoide. El sabor será más tostado y el vapor más denso. Recomendada para el final de la sesión o cuando se busca la máxima extracción.</p>

<h2>Estrategia de Sesión Recomendada</h2>
<p>Una técnica popular es la <strong>"escalada de temperatura"</strong>: empieza a 170°C para disfrutar del sabor puro, sube a 185°C a mitad de sesión para una extracción equilibrada, y termina a 200-210°C para exprimir al máximo el material.</p>

<blockquote>Recuerda: temperaturas superiores a 230°C acercan el material al punto de combustión y pueden generar sabores desagradables. Mantente siempre por debajo de este umbral.</blockquote>
    `,
  },
  {
    id: "sistema-endocannabinoide-explicado",
    title: "El Sistema Endocannabinoide: La Clave para Entender el Cannabis",
    excerpt:
      "Una explicación accesible del sistema endocannabinoide, cómo funciona y por qué es fundamental para entender los efectos del cannabis y el CBD.",
    category: "Ciencia",
    categoryColor: "bg-purple-700",
    date: "1 Diciembre 2024",
    readTime: "10 min",
    image: "/images/endocannabinoide.jpg",
    featured: false,
    content: `
<h2>¿Qué es el Sistema Endocannabinoide?</h2>
<p>El sistema endocannabinoide (SEC) es uno de los sistemas biológicos más importantes del cuerpo humano. Descubierto en la década de 1990 mientras investigaban los efectos del THC, este sistema juega un papel fundamental en la regulación de numerosas funciones corporales.</p>

<h2>Componentes del SEC</h2>
<h3>1. Receptores Cannabinoides</h3>
<p>Los principales receptores son:</p>
<ul>
<li><strong>CB1:</strong> Localizados principalmente en el sistema nervioso central (cerebro y médula espinal). También presentes en pulmones, hígado y riñones. Son los responsables de los efectos psicoactivos del THC.</li>
<li><strong>CB2:</strong> Se encuentran principalmente en el sistema inmunológico y en los tejidos periféricos. Su activación está relacionada con efectos antiinflamatorios e inmunomoduladores.</li>
</ul>

<h3>2. Endocannabinoides</h3>
<p>Son los cannabinoides que produce nuestro propio cuerpo:</p>
<ul>
<li><strong>Anandamida (AEA):</strong> Conocida como la "molécula de la felicidad". Regula el estado de ánimo, el apetito y la percepción del dolor.</li>
<li><strong>2-AG (2-Araquidonoilglicerol):</strong> El endocannabinoide más abundante. Involucrado en la regulación del sistema inmunológico y la función cardiovascular.</li>
</ul>

<h3>3. Enzimas</h3>
<p>Las enzimas FAAH y MAGL se encargan de degradar los endocannabinoides una vez han cumplido su función, manteniendo el equilibrio del sistema.</p>

<h2>Funciones que Regula el SEC</h2>
<p>El sistema endocannabinoide es un sistema de <strong>homeostasis</strong>, es decir, mantiene el equilibrio del cuerpo. Regula:</p>
<ul>
<li>El dolor y la inflamación</li>
<li>El estado de ánimo y la ansiedad</li>
<li>El apetito y la digestión</li>
<li>El sueño</li>
<li>La memoria y el aprendizaje</li>
<li>La función inmunológica</li>
<li>La temperatura corporal</li>
<li>La reproducción y fertilidad</li>
</ul>

<h2>¿Cómo Interactúa el Cannabis con el SEC?</h2>
<p>El THC imita a la anandamida, uniéndose directamente a los receptores CB1 (por eso produce el "colocón"). El CBD, por su parte, no se une directamente a los receptores CB1/CB2 sino que modula su actividad e inhibe la enzima FAAH, lo que aumenta los niveles naturales de anandamida.</p>

<h2>Por qué es Importante</h2>
<p>Comprender el SEC nos ayuda a entender por qué el cannabis tiene tantos efectos diferentes en el cuerpo y cómo el CBD puede ser beneficioso sin ser psicoactivo. También abre la puerta a investigaciones sobre el "déficit endocannabinoide clínico" como posible factor en condiciones como la fibromialgia, migrañas y el síndrome del intestino irritable.</p>
    `,
  },
  {
    id: "limpieza-mantenimiento-vaporizador",
    title: "Mantenimiento y Limpieza de tu Vaporizador: Guía Paso a Paso",
    excerpt:
      "Aprende a mantener tu vaporizador en perfecto estado para asegurar la mejor calidad de vapor, prolongar la vida útil del dispositivo y proteger tu inversión.",
    category: "Guías",
    categoryColor: "bg-primary-700",
    date: "18 Noviembre 2024",
    readTime: "7 min",
    image: "/images/limpieza.jpg",
    featured: false,
    content: `
<h2>¿Por qué es Importante la Limpieza?</h2>
<p>Un vaporizador limpio no solo produce un vapor de mejor calidad y sabor, sino que también funciona de manera más eficiente y dura más tiempo. La resina acumulada puede afectar el rendimiento, alterar el sabor y incluso dañar componentes internos.</p>

<h2>Frecuencia Recomendada</h2>
<ul>
<li><strong>Después de cada sesión:</strong> Cepillado rápido de la cámara y vaciado del material usado.</li>
<li><strong>Semanalmente:</strong> Limpieza profunda de la cámara, boquilla y cedazos.</li>
<li><strong>Mensualmente:</strong> Limpieza completa incluyendo el camino de aire y revisión general del dispositivo.</li>
</ul>

<h2>Materiales Necesarios</h2>
<ul>
<li>Alcohol isopropílico (90% o superior)</li>
<li>Cotonitos (hisopos de algodón)</li>
<li>Cepillo de cerdas suaves (muchos vaporizadores lo incluyen)</li>
<li>Paño de microfibra</li>
<li>Papel de cocina absorbente</li>
<li>Agua tibia</li>
</ul>

<h2>Limpieza Paso a Paso</h2>
<h3>Paso 1: Enfriar el Dispositivo</h3>
<p>Nunca intentes limpiar un vaporizador caliente. Espera al menos 30 minutos después de usarlo para manipular las piezas.</p>

<h3>Paso 2: Desmontar las Piezas Extraíbles</h3>
<p>Retira la boquilla, el cedazo, la cámara de hierbas y cualquier otra pieza desmontable según las instrucciones de tu modelo.</p>

<h3>Paso 3: Limpiar la Cámara</h3>
<p>Usa el cepillo para eliminar restos de hierba. Para la resina acumulada, moja un cotonito en alcohol isopropílico y frota suavemente. Deja secar completamente antes de rearmar.</p>

<h3>Paso 4: Boquilla y Camino de Aire</h3>
<p>Pasa un cotonito con alcohol por el interior de la boquilla y el camino de aire. Si tu modelo incluye tubos de vidrio o acero, sumérgelos en alcohol durante 15-30 minutos y luego enjuaga con agua tibia.</p>

<h3>Paso 5: Cedazos y Filtros</h3>
<p>Los cedazos suelen ser la parte que más residuo acumula. Sumérgelos en alcohol, frota con un cepillo pequeño y enjuaga bien. Si están muy deteriorados, considera reemplazarlos.</p>

<h3>Paso 6: Secado y Rearme</h3>
<p>Asegúrate de que todas las piezas estén completamente secas antes de rearmar. El alcohol residual puede dañar componentes electrónicos y afectar el sabor.</p>

<blockquote>Consejo profesional: Enciende el vaporizador a temperatura máxima durante un minuto tras la limpieza para evaporar cualquier residuo de humedad antes del próximo uso.</blockquote>
    `,
  },
];

export const legalDisclaimer = `⚠️ <strong>Aviso Legal:</strong> La información proporcionada en este blog tiene fines exclusivamente informativos y educativos. No pretende promover, incitar ni facilitar el consumo de sustancias ilegales. En España, el consumo de cannabis con fines recreativos está prohibido en espacios públicos y su posesión puede ser sancionada administrativamente. El CBD derivado de cáñamo industrial (&lt;0.2% THC) se encuentra dentro de un marco legal específico. Recomendamos siempre consultar la legislación vigente en tu comunidad autónoma y consultar con profesionales de la salud antes de consumir cualquier producto derivado del cannabis. La Ribera del Vapor no se responsabiliza del uso indebido de la información aquí publicada.`;
