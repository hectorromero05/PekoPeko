import "./App.css";

const phoneNumber = "+523326872690";
const whatsapp = "https://wa.me/523326872690";
const address = "Argentina #20, entre Pedro Moreno y Morelos";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Argentina%2020%20Guadalajara%20Jalisco";
const instagramUrl = "https://instagram.com/pekopekogdl";
const facebookUrl = "https://facebook.com/pekopekogdl";

const ramenCategories = [
  "Caldo mixto",
  "Caldo marudori",
  "Nabe Yaki Ramen",
  "Caldo vegano",
  "Tallarín salteado",
  "Fideos orientales",
];

const ramenItems = [
  {
    name: "Chashu Soya",
    price: "$240",
    category: "Caldo mixto",
    image: "/ramen.jpg",
    desc: "Ramen con caldo profundo de soya, chashu suave, fideos y toppings clásicos.",
  },
  {
    name: "Chashu Miso",
    price: "$250",
    category: "Caldo mixto",
    image: "/ramen2.jpg",
    desc: "Miso aromático, chashu doradito y un golpe umami perfecto para antojo fuerte.",
  },
  {
    name: "Chashu Tonkotsu",
    price: "$260",
    category: "Caldo marudori",
    image: "/ramen.jpg",
    desc: "Caldo cremoso estilo japonés con cerdo, fideos firmes y sabor intenso.",
  },
  {
    name: "Ebi Miso",
    price: "$280",
    category: "Caldo marudori",
    image: "/ramen2.jpg",
    desc: "Miso con notas de camarón, verduras, fideos orientales y textura reconfortante.",
  },
  {
    name: "Tan Tan Men",
    price: "$250",
    category: "Nabe Yaki Ramen",
    image: "/ramen.jpg",
    desc: "Picor sabroso, ajonjolí, carne sazonada y caldo especiado para amantes del ramen.",
  },
  {
    name: "Spicy Curry",
    price: "$260",
    category: "Nabe Yaki Ramen",
    image: "/ramen2.jpg",
    desc: "Curry japonés picante, caldo potente y toppings que levantan el sabor.",
  },
  {
    name: "Buta Kimchi",
    price: "$250",
    category: "Fideos orientales",
    image: "/ramen.jpg",
    desc: "Cerdo con kimchi, fideos orientales y ese toque fermentado, ácido y picosito.",
  },
  {
    name: "Miso Yaki Udon",
    price: "$240",
    category: "Tallarín salteado",
    image: "/ramen2.jpg",
    desc: "Udon salteado con miso, verduras y salsa de la casa estilo callejón japonés.",
  },
  {
    name: "Kimchi Yaki Udon",
    price: "$250",
    category: "Tallarín salteado",
    image: "/ramen.jpg",
    desc: "Udon grueso salteado con kimchi, especias y mucho carácter asiático.",
  },
  {
    name: "Gyu Yaki Udon",
    price: "$280",
    category: "Tallarín salteado",
    image: "/ramen2.jpg",
    desc: "Udon salteado con res, vegetales y salsa intensa para cerrar con antojo.",
  },
];

const starters = [
  ["Gua Bao", "$80", "Pan al vapor con relleno jugoso, salsa oriental y topping fresco."],
  ["Pan al vapor", "$50 / $60", "Elige tu relleno favorito y disfruta un bocado suave y calientito."],
  ["Edamame", "$60 / $70", "Cocido o salteado, ideal para abrir mesa y compartir."],
  ["Karaage vegano", "$100", "Tofu crujiente con textura firme y sazón estilo karaage."],
  ["Gyozas", "$110", "Dumplings doraditos, relleno sabroso y salsa para dipear."],
  ["Kimchi Hiyayakko", "$90", "Tofu frío con kimchi preparado y salsa de ajonjolí."],
  ["Yu Lin Ji", "$160", "Pollo marinado con salsa agridulce y toque crujiente."],
  ["Dak Gang Jeon", "$200", "Pollo frito coreano con salsa picosa, cacahuate y cebollín."],
  ["Harumaki", "$70", "Rollitos primavera crujientes con relleno oriental."],
];

const favorites = [
  ["Ramen especial", "Caldo caliente, fideos y toppings al estilo PEKO PEKO.", "/ramen.jpg", "🍜"],
  ["Gua Bao", "Pan suave al vapor con relleno antojable.", "/gua-bao.jpg", "🥟"],
  ["Gyozas", "Doraditas, jugosas y perfectas para compartir.", "/gyozas.jpg", "🥢"],
  ["Karaage", "Crujiente, sabroso y con salsa de la casa.", "/karaage.jpg", "🔥"],
  ["Bebidas asiáticas", "Refrescantes, coloridas y listas para la foto.", "/bebida.jpg", "🧋"],
];

const gallery = ["/ramen.jpg", "/gua-bao.jpg", "/gyozas.jpg", "/karaage.jpg", "/local.jpg", "/bebida.jpg"];

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="brand" href="#inicio"><span className="panda">🐼</span> PEKO PEKO</a>
        <div className="nav-links">
          <a href="#menu">Menú</a><a href="#galeria">Galería</a><a href="#ubicacion">Ubicación</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </nav>

      <header className="hero" id="inicio">
        <div className="hero-content">
          <p className="kicker">ラーメン · Guadalajara · pekopekogdl</p>
          <h1>PEKO PEKO</h1>
          <p>Ramen, entradas asiáticas y sabor japonés en Guadalajara.</p>
          <div className="hero-buttons"><a href="#menu">Ver menú</a><a href={mapsUrl} target="_blank" rel="noreferrer" className="secondary">Cómo llegar</a><a href={whatsapp} target="_blank" rel="noreferrer" className="outline">Contactar</a></div>
        </div>
        <div className="hero-bowl" aria-hidden="true"><span>🍜</span><strong>NO palillos desechables</strong></div>
      </header>

      <section className="notice-strip">
        <div>📍 {address}</div><div>🥢 No usar palillos desechables</div><div>🍰 Pregunta por nuestros postres y platillos de temporada</div>
      </section>

      <section className="section menu" id="menu">
        <p className="section-label">Menú digital</p><h2>Ramen</h2>
        <div className="category-row">{ramenCategories.map((cat) => <span key={cat}>{cat}</span>)}</div>
        <div className="ramen-grid">{ramenItems.map((item) => <MenuCard key={item.name} {...item} />)}</div>
      </section>

      <section className="section starters"><p className="section-label">Entradas</p><h2>Para compartir</h2><div className="starter-grid">{starters.map(([name, price, desc]) => <SmallCard key={name} name={name} price={price} desc={desc} />)}</div></section>

      <section className="section favorites"><p className="section-label">Favoritos de la casa</p><h2>Antojos PEKO PEKO</h2><div className="favorite-grid">{favorites.map(([name, desc, image, emoji]) => <FavoriteCard key={name} name={name} desc={desc} image={image} emoji={emoji} />)}</div></section>

      <section className="experience"><p className="section-label">Experiencia PEKO PEKO</p><h2>Urbano, casual y bien calientito</h2><div className="experience-grid">{["Ramen servido caliente", "Entradas para compartir", "Ambiente casual japonés", "Platillos de temporada"].map((item) => <div key={item}><span>✦</span><h3>{item}</h3></div>)}</div></section>

      <section className="section gallery" id="galeria"><p className="section-label">Galería</p><h2>Sabores que se antojan</h2><div className="gallery-grid">{gallery.map((img, index) => <div className="gallery-item" key={img}><img src={img} alt={`PEKO PEKO galería ${index + 1}`} onError={hideBrokenImage} /></div>)}</div></section>

      <section className="location" id="ubicacion"><div><p className="section-label">Ubicación</p><h2>Ven por tu ramen</h2><p>{address}</p><a href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Google Maps</a></div><iframe title="Mapa aproximado de PEKO PEKO en Guadalajara" src="https://www.google.com/maps?q=Guadalajara,Jalisco&output=embed" loading="lazy"></iframe></section>

      <section className="social"><p className="section-label">Redes</p><h2>@pekopekogdl</h2><p>Instagram/Facebook: pekopekogdl</p><div className="hero-buttons"><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href={facebookUrl} target="_blank" rel="noreferrer" className="secondary">Facebook</a></div></section>

      <footer><h3>PEKO PEKO</h3><p>Ramen y comida asiática en Guadalajara</p><p>{address}</p><p>Redes sociales: @pekopekogdl · {phoneNumber}</p><p>Pregunta por postres y platillos de temporada</p></footer>
      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">💬</a>
    </div>
  );
}

function MenuCard({ name, price, desc, category, image }) {
  return <article className="menu-card"><div className="food-image"><img src={image} alt={name} onError={hideBrokenImage} /><span>🍜</span></div><div className="menu-card-body"><span className="tag">{category}</span><h3>{name}</h3><p>{desc}</p><strong>{price}</strong></div></article>;
}

function SmallCard({ name, price, desc }) {
  return <article className="small-card"><div><h3>{name}</h3><p>{desc}</p></div><strong>{price}</strong></article>;
}

function FavoriteCard({ name, desc, image, emoji }) {
  return <article className="favorite-card"><div className="favorite-image"><img src={image} alt={name} onError={hideBrokenImage} /><span>{emoji}</span></div><h3>{name}</h3><p>{desc}</p></article>;
}

function hideBrokenImage(event) {
  event.currentTarget.style.display = "none";
}
