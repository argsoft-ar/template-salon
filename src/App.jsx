import React, { useState } from 'react';
import {
  Star,
  Play,
  ArrowRight,
  Calendar,
  Users,
  PartyPopper,
  CheckCircle2,
  Menu,
  X,
  UtensilsCrossed,
  Sparkles,
  Trees,
  ShieldCheck,
  Crown,
  Car,
  MapPin,
  Clock,
  Phone,
  FileText,
  MessageCircle,
} from 'lucide-react';
import './App.css';

/* ==========================================================================
   CONSTANTE MAESTRA DE DATOS (WHITE-LABEL SITE_DATA)
   Permite desacoplar el 100% de los contenidos, imágenes y configuraciones.
   ========================================================================== */
export const SITE_DATA = {
  brand: {
    name: "AURA EVENTOS",
    shortName: "AURA",
    tagline: "Salón de Fiestas & Eventos Exclusivos",
  },
  navigation: [
    { label: "El Salón", href: "#salon" },
    { label: "Experiencias", href: "#experiencias" },
    { label: "Galería", href: "#galeria" },
    { label: "Servicios", href: "#servicios" },
    { label: "Testimonios", href: "#testimonios" },
  ],
  hero: {
    badge: "Más de 500 eventos inolvidables realizados",
    title: "El escenario perfecto para tus momentos únicos.",
    subtitle:
      "Arquitectura moderna, gastronomía de autor y tecnología de última generación. Diseñamos experiencias a medida para bodas, fiestas de 15 y eventos corporativos.",
    ctaPrimary: "Cotizar mi Evento",
    ctaSecondary: "Recorrido Virtual 360°",
    backgroundImage:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=85",
  },
  availabilityWidget: {
    title: "Consultar Disponibilidad",
    eventTypes: [
      "Bodas",
      "Fiesta de 15 Años",
      "Evento Corporativo",
      "Aniversario / Cumpleaños",
    ],
    guestOptions: [
      "50 a 100 invitados",
      "100 a 200 invitados",
      "Más de 250 invitados",
    ],
    estimatedMonths: [
      "Noviembre 2026",
      "Diciembre 2026",
      "Enero 2027",
      "Febrero 2027",
      "Marzo 2027",
    ],
    buttonText: "Verificar Fecha",
    confirmationMessage:
      "¡Hay disponibilidad preliminar para tu fecha! Completá tu WhatsApp para enviarte la propuesta.",
  },
  experiences: {
    eyebrow: "EXPERIENCIAS A MEDIDA",
    title: "Un espacio versátil que se adapta a tu celebración",
    cards: [
      {
        id: "bodas",
        title: "Bodas & Uniones",
        description:
          "Jardín parquizado para ceremonias al atardecer y salón principal de doble altura sin columnas.",
        tag: "Capacidad hasta 350 personas",
        image:
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "quince",
        title: "Fiestas de 15 Años",
        description:
          "Pista interactiva LED, cabina de DJ elevada, barra de tragos de autor y suite privada.",
        tag: "Tecnología de show incluida",
        image:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85",
      },
      {
        id: "corporativos",
        title: "Eventos Corporativos",
        description:
          "Auditorio modular, pantallas gigantes 4K, conectividad de alta velocidad y catering ejecutivo.",
        tag: "Formato jornada o gala",
        image:
          "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
  gallery: {
    eyebrow: "RECORRIDO VISUAL",
    title: "Cada rincón pensado al detalle",
    categories: [
      "Todo",
      "Salón Principal",
      "Jardín & Exterior",
      "Gastronomía",
      "Pista & Show",
    ],
    items: [
      {
        id: 1,
        title: "Recepción en Jardín Central",
        category: "Jardín & Exterior",
        image:
          "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85",
        featured: true,
      },
      {
        id: 2,
        title: "Plato Principal de Autor",
        category: "Gastronomía",
        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85",
        featured: false,
      },
      {
        id: 3,
        title: "Pista LED y Robots de Luces",
        category: "Pista & Show",
        image:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
        featured: false,
      },
      {
        id: 4,
        title: "Salón Principal y Doble Altura",
        category: "Salón Principal",
        image:
          "https://images.unsplash.com/photo-1545232979-fbf68fe9b10d?auto=format&fit=crop&w=1200&q=85",
        featured: false,
      },
      {
        id: 5,
        title: "Sector Lounge VIP",
        category: "Salón Principal",
        image:
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",
        featured: false,
      },
      {
        id: 6,
        title: "Mesa Principal Imperial",
        category: "Gastronomía",
        image:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85",
        featured: false,
      },
    ],
  },
  services: {
    eyebrow: "SERVICIO INTEGRAL",
    title: "Todo resuelto en un solo lugar, sin preocupaciones",
    items: [
      {
        id: 1,
        title: "Gastronomía Propia",
        description:
          "Cocina de autor en planta con menús adaptados a cada etapa de la noche y opciones especiales.",
        icon: "UtensilsCrossed",
      },
      {
        id: 2,
        title: "Sonido, Iluminación y Video",
        description:
          "Equipamiento lineal profesional, cabezales móviles, pantallas LED y DJ residente.",
        icon: "Sparkles",
      },
      {
        id: 3,
        title: "Jardín y Recepción Exterior",
        description:
          "Más de 1.500 m² de espacio verde iluminado, ideal para ceremonias y recepciones al aire libre.",
        icon: "Trees",
      },
      {
        id: 4,
        title: "Grupo Electrógeno y Seguridad",
        description:
          "Generador propio de transferencia automática para energía garantizada al 100% y vigilancia privada.",
        icon: "ShieldCheck",
      },
      {
        id: 5,
        title: "Suite Exclusiva",
        description:
          "Habitación privada climatizada con baño en suite y asistencia permanente para los homenajeados.",
        icon: "Crown",
      },
      {
        id: 6,
        title: "Estacionamiento Privado",
        description:
          "Predio interno pavimentado y monitoreado por cámaras con acceso directo al foyer del salón.",
        icon: "Car",
      },
    ],
  },
  testimonials: {
    eyebrow: "LO QUE DICEN NUESTROS CLIENTES",
    title: "Historias reales en Aura Eventos",
    items: [
      {
        id: 1,
        name: "Sofía & Martín",
        tag: "Boda · 220 invitados",
        quote:
          "“Desde la degustación del menú hasta el último tema en la pista, la coordinación fue impecable. Nuestros invitados siguen hablando de la comida.”",
        rating: 5,
      },
      {
        id: 2,
        name: "Familia Gómez",
        tag: "15 Años de Valentina · 180 invitados",
        quote:
          "“La puesta de luces y pantallas superó todo lo que imaginamos. Nos sentimos acompañados en cada detalle organizativo.”",
        rating: 5,
      },
      {
        id: 3,
        name: "Grupo Sur Logística",
        tag: "Cierre de Año Corporativo · 300 invitados",
        quote:
          "“Excelente acústica, puntualidad en el servicio gastronómico y un estacionamiento súper cómodo para toda la empresa.”",
        rating: 5,
      },
    ],
  },
  footerCta: {
    title: "¿Querés conocer el salón en persona?",
    text: "Agendá una visita guiada personalizada con nuestros organizadores y recibí un presupuesto a medida en el día.",
    btnPrimary: "Agendar Visita por WhatsApp",
    btnSecondary: "Descargar Brochure PDF",
    contact: {
      address: "Av. Espora 1450, Zona Sur, Gran Buenos Aires",
      hours: "Atención de Martes a Sábados de 11:00 a 20:00 hs",
      phone: "+54 11 4567-8900",
      whatsappUrl:
        "https://wa.me/5491145678900?text=Hola%20Aura%20Eventos,%20quiero%20agendar%20una%20visita%20guiada%20y%20conocer%20el%20salon",
    },
    copyright: "© 2026 Aura Eventos. Todos los derechos reservados.",
    signature: "Desarrollado a medida por ARGSOFT",
  },
};

/* ==========================================================================
   MAPEO DE ICONOS DINÁMICOS DE LUCIDE
   ========================================================================== */
function ServiceIcon({ name, size = 26 }) {
  switch (name) {
    case 'UtensilsCrossed':
      return <UtensilsCrossed size={size} />;
    case 'Sparkles':
      return <Sparkles size={size} />;
    case 'Trees':
      return <Trees size={size} />;
    case 'ShieldCheck':
      return <ShieldCheck size={size} />;
    case 'Crown':
      return <Crown size={size} />;
    case 'Car':
      return <Car size={size} />;
    default:
      return <Sparkles size={size} />;
  }
}

/* ==========================================================================
   COMPONENTE PRINCIPAL APP
   ========================================================================== */
export default function App() {
  // Estado para el menú hamburguesa móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estados para el Widget de disponibilidad
  const [eventType, setEventType] = useState(SITE_DATA.availabilityWidget.eventTypes[0]);
  const [guestCount, setGuestCount] = useState(SITE_DATA.availabilityWidget.guestOptions[0]);
  const [estimatedMonth, setEstimatedMonth] = useState(SITE_DATA.availabilityWidget.estimatedMonths[0]);
  const [isWidgetSubmitted, setIsWidgetSubmitted] = useState(false);
  const [clientWhatsapp, setClientWhatsapp] = useState('');

  // Estado para el filtro de la Galería Bento
  const [selectedCategory, setSelectedCategory] = useState("Todo");

  // Estado para el modal de Recorrido Virtual 360°
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  // Manejador del widget
  const handleVerifyDate = (e) => {
    e.preventDefault();
    setIsWidgetSubmitted(true);
  };

  const handleWhatsappSend = (e) => {
    e.preventDefault();
    const cleanPhone = clientWhatsapp.replace(/\D/g, '');
    const message = encodeURIComponent(
      `¡Hola Aura Eventos! Estuve consultando disponibilidad preliminar en la web para: ${eventType}, ${guestCount}, fecha estimada: ${estimatedMonth}. Mi WhatsApp de contacto es: ${cleanPhone || 'el de esta conversación'}. ¿Podrían enviarme la cotización?`
    );
    window.open(`https://wa.me/5491145678900?text=${message}`, '_blank');
  };

  // Filtrado de la galería según la categoría seleccionada
  const filteredGallery =
    selectedCategory === "Todo"
      ? SITE_DATA.gallery.items
      : SITE_DATA.gallery.items.filter((item) => item.category === selectedCategory);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="aura-landing">
      {/* --------------------------------------------------------------------
          A. HEADER / BARRA DE NAVEGACIÓN (.navbar)
         -------------------------------------------------------------------- */}
      <header className="navbar">
        <div className="container navbar-container">
          {/* Isotipo geométrico + Nombre de Marca */}
          <a href="#" className="navbar-brand" aria-label="Aura Eventos Inicio">
            <div className="brand-isotype">
              <div className="brand-isotype-inner" />
            </div>
            <span className="brand-name">
              AURA <span>EVENTOS</span>
            </span>
          </a>

          {/* Enlaces centrales de navegación (Desktop) */}
          <nav>
            <ul className="navbar-links">
              {SITE_DATA.navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="navbar-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón CTA derecho y hamburguesa móvil */}
          <div className="navbar-actions">
            <button
              className="btn-primary"
              onClick={() => scrollToSection('#disponibilidad')}
            >
              Consultar Fecha
            </button>

            <button
              className="navbar-hamburger"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú desplegable para vista móvil (390px) */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu-links">
            {SITE_DATA.navigation.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="mobile-menu-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="btn-primary"
            onClick={() => scrollToSection('#disponibilidad')}
          >
            Consultar Fecha
          </button>
        </div>
      </header>

      {/* --------------------------------------------------------------------
          B. HERO SECTION (.hero)
         -------------------------------------------------------------------- */}
      <section
        id="salon"
        className="hero"
        style={{ backgroundImage: `url(${SITE_DATA.hero.backgroundImage})` }}
      >
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-badge">
            <Star size={16} className="hero-badge-star" fill="var(--color-primary)" />
            <span>{SITE_DATA.hero.badge}</span>
          </div>

          <h1 className="hero-title">{SITE_DATA.hero.title}</h1>
          <p className="hero-subtitle">{SITE_DATA.hero.subtitle}</p>

          <div className="hero-button-group">
            <button
              className="btn-primary"
              onClick={() => scrollToSection('#disponibilidad')}
            >
              <span>{SITE_DATA.hero.ctaPrimary}</span>
              <ArrowRight size={18} />
            </button>

            <button
              className="btn-secondary"
              onClick={() => setIsTourModalOpen(true)}
            >
              <Play size={16} fill="currentColor" />
              <span>{SITE_DATA.hero.ctaSecondary}</span>
            </button>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          C. WIDGET INTERACTIVO DE DISPONIBILIDAD Y PRE-COTIZACIÓN (.availability-widget)
         -------------------------------------------------------------------- */}
      <div id="disponibilidad" className="container availability-widget-wrapper">
        <div className="availability-widget">
          <form onSubmit={handleVerifyDate}>
            <div className="availability-grid">
              {/* Select 1: Tipo de Evento */}
              <div className="form-field">
                <label className="form-label" htmlFor="select-event-type">
                  <PartyPopper size={14} />
                  Tipo de Evento
                </label>
                <select
                  id="select-event-type"
                  className="form-select"
                  value={eventType}
                  onChange={(e) => {
                    setEventType(e.target.value);
                    setIsWidgetSubmitted(false);
                  }}
                >
                  {SITE_DATA.availabilityWidget.eventTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select 2: Cantidad de Invitados */}
              <div className="form-field">
                <label className="form-label" htmlFor="select-guests">
                  <Users size={14} />
                  Cantidad de Invitados
                </label>
                <select
                  id="select-guests"
                  className="form-select"
                  value={guestCount}
                  onChange={(e) => {
                    setGuestCount(e.target.value);
                    setIsWidgetSubmitted(false);
                  }}
                >
                  {SITE_DATA.availabilityWidget.guestOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select 3: Mes Estimado */}
              <div className="form-field">
                <label className="form-label" htmlFor="select-month">
                  <Calendar size={14} />
                  Mes Estimado
                </label>
                <select
                  id="select-month"
                  className="form-select"
                  value={estimatedMonth}
                  onChange={(e) => {
                    setEstimatedMonth(e.target.value);
                    setIsWidgetSubmitted(false);
                  }}
                >
                  {SITE_DATA.availabilityWidget.estimatedMonths.map((month, idx) => (
                    <option key={idx} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {/* Botón de Acción */}
              <div className="form-field">
                <button type="submit" className="widget-btn">
                  {SITE_DATA.availabilityWidget.buttonText}
                </button>
              </div>
            </div>
          </form>

          {/* Feedback limpio condicional desplegado al presionar el botón */}
          {isWidgetSubmitted && (
            <div className="widget-feedback">
              <div className="widget-feedback-content">
                <div className="widget-feedback-icon">
                  <CheckCircle2 size={22} />
                </div>
                <div className="widget-feedback-text">
                  <p>
                    <strong>¡Excelente elección!</strong> Hay disponibilidad preliminar para{' '}
                    <strong>{eventType}</strong> ({guestCount}) en <strong>{estimatedMonth}</strong>.
                  </p>
                  <p>{SITE_DATA.availabilityWidget.confirmationMessage}</p>
                </div>
              </div>

              <form onSubmit={handleWhatsappSend} style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '380px' }}>
                <input
                  type="tel"
                  placeholder="Ej: 11 9876-5432"
                  value={clientWhatsapp}
                  onChange={(e) => setClientWhatsapp(e.target.value)}
                  className="form-input"
                  required
                />
                <button type="submit" className="btn-primary" style={{ padding: '0 20px', height: '50px' }}>
                  <MessageCircle size={18} />
                  <span>Cotizar</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* --------------------------------------------------------------------
          D. SECCIÓN: EXPERIENCIAS POR TIPO DE EVENTO (.experiences-section)
         -------------------------------------------------------------------- */}
      <section id="experiencias" className="experiences-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{SITE_DATA.experiences.eyebrow}</span>
            <h2 className="section-title-light">{SITE_DATA.experiences.title}</h2>
            <p className="section-subtitle-light">
              Espacios climatizados, versátiles y concebidos con diseño escenográfico de vanguardia para asegurar el éxito rotundo de cada formato.
            </p>
          </div>

          <div className="experiences-grid">
            {SITE_DATA.experiences.cards.map((card) => (
              <article key={card.id} className="experience-card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="experience-card-image"
                  loading="lazy"
                />
                <div className="experience-card-overlay" />
                <div className="experience-card-body">
                  <span className="experience-tag">{card.tag}</span>
                  <h3 className="experience-title">{card.title}</h3>
                  <p className="experience-desc">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          E. SECCIÓN: GALERÍA INTERACTIVA BENTO GRID (.gallery-section)
         -------------------------------------------------------------------- */}
      <section id="galeria" className="gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{SITE_DATA.gallery.eyebrow}</span>
            <h2 className="section-title-dark">{SITE_DATA.gallery.title}</h2>
            <p className="section-subtitle-dark">
              Una atmósfera de sofisticación donde la luz, las texturas nobles y la naturaleza se fusionan armónicamente.
            </p>
          </div>

          {/* Filtros de la Galería */}
          <div className="gallery-filters">
            {SITE_DATA.gallery.categories.map((category, idx) => (
              <button
                key={idx}
                className={`gallery-filter-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grilla Asimétrica Bento */}
          <div className="gallery-bento-grid">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className={`gallery-item ${item.featured ? 'featured' : ''}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-item-overlay" />
                <div className="gallery-badge">
                  <span className="gallery-badge-dot" />
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          F. SECCIÓN: SERVICIOS INTEGRALES ALL-INCLUSIVE (.services-section)
         -------------------------------------------------------------------- */}
      <section id="servicios" className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{SITE_DATA.services.eyebrow}</span>
            <h2 className="section-title-light">{SITE_DATA.services.title}</h2>
            <p className="section-subtitle-light">
              Olvidate de coordinar decenas de proveedores aislados. Nuestro equipo centraliza toda la operación bajo estándares de hotelería premium.
            </p>
          </div>

          <div className="services-grid">
            {SITE_DATA.services.items.map((srv) => (
              <div key={srv.id} className="service-card">
                <div className="service-icon-wrapper">
                  <ServiceIcon name={srv.icon} size={28} />
                </div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-description">{srv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          G. SECCIÓN: PRUEBA SOCIAL Y RESEÑAS (.testimonials-section)
         -------------------------------------------------------------------- */}
      <section id="testimonios" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">{SITE_DATA.testimonials.eyebrow}</span>
            <h2 className="section-title-dark">{SITE_DATA.testimonials.title}</h2>
            <p className="section-subtitle-dark">
              La tranquilidad de celebrar sabiendo que cada minuto está en manos de profesionales apasionados.
            </p>
          </div>

          <div className="testimonials-grid">
            {SITE_DATA.testimonials.items.map((test) => (
              <div key={test.id} className="testimonial-card">
                <div>
                  <div className="testimonial-stars">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--color-primary)" stroke="none" />
                    ))}
                  </div>
                  <p className="testimonial-quote">{test.quote}</p>
                </div>
                <div className="testimonial-author">
                  <span className="testimonial-name">{test.name}</span>
                  <span className="testimonial-tag">{test.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
          H. PRE-FOOTER DE CONVERSIÓN Y FOOTER INSTITUCIONAL (.footer)
         -------------------------------------------------------------------- */}
      <footer className="footer">
        <div className="container footer-cta-wrapper">
          <div className="footer-cta-card">
            {/* Columna Izquierda: Llamado a la acción */}
            <div className="footer-cta-left">
              <span className="eyebrow" style={{ marginBottom: 0 }}>
                ATENCIÓN PERSONALIZADA
              </span>
              <h3 className="footer-cta-title">{SITE_DATA.footerCta.title}</h3>
              <p className="footer-cta-text">{SITE_DATA.footerCta.text}</p>
              <div className="footer-cta-buttons">
                <a
                  href={SITE_DATA.footerCta.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={18} />
                  <span>{SITE_DATA.footerCta.btnPrimary}</span>
                </a>
                <button
                  className="btn-secondary"
                  onClick={() => alert("El brochure oficial en PDF está listo para descarga. Te redirigimos con un asesor para enviártelo.")}
                >
                  <FileText size={18} />
                  <span>{SITE_DATA.footerCta.btnSecondary}</span>
                </button>
              </div>
            </div>

            {/* Columna Derecha: Información de contacto */}
            <div className="footer-cta-right">
              <div className="contact-item">
                <MapPin size={22} className="contact-icon" />
                <div>
                  <strong>Dirección:</strong>
                  <p>{SITE_DATA.footerCta.contact.address}</p>
                </div>
              </div>

              <div className="contact-item">
                <Clock size={22} className="contact-icon" />
                <div>
                  <strong>Horarios de Visitas:</strong>
                  <p>{SITE_DATA.footerCta.contact.hours}</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={22} className="contact-icon" />
                <div>
                  <strong>Teléfono Directo:</strong>
                  <p>{SITE_DATA.footerCta.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pie de página inferior institucional */}
        <div className="footer-bottom">
          <div className="container footer-bottom-container">
            <p>{SITE_DATA.footerCta.copyright}</p>
            <p>
              <span className="footer-signature">{SITE_DATA.footerCta.signature}</span>
            </p>
          </div>
        </div>
      </footer>

      {/* --------------------------------------------------------------------
          MODAL INTERACTIVO: RECORRIDO VIRTUAL 360°
         -------------------------------------------------------------------- */}
      {isTourModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsTourModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Experiencia Inmersiva 360°</h3>
              <button
                className="modal-close"
                onClick={() => setIsTourModalOpen(false)}
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85"
                alt="Vista 360 del salón principal"
                className="modal-image-preview"
              />
              <p className="modal-desc">
                Explorá virtualmente cada rincón de Aura Eventos: la majestuosidad de nuestro salón de doble altura, el parque exterior de 1.500 m² y la suite nupcial privada.
              </p>
              <div className="modal-actions">
                <button
                  className="btn-outline-dark"
                  onClick={() => setIsTourModalOpen(false)}
                >
                  Cerrar
                </button>
                <a
                  href={SITE_DATA.footerCta.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={18} />
                  <span>Agendar Recorrido Presencial</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
