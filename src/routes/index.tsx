import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import infoImage from "@/assets/info-section.jpg";
import heroMain from "@/assets/hero-main.jpg";
import cityMexico from "@/assets/city-mexico.jpg";
import cityMiami from "@/assets/city-miami.jpg";
import cityMadrid from "@/assets/city-madrid.jpg";
import cityBogota from "@/assets/city-bogota.jpg";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Globe2,
  Quote,
  ChevronLeft,
  ChevronRight, 
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  Building2,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = ["/images/HeroSection1.png", "/images/MisionImg.png"];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />

      {/* HERO — Deep navy strategic */}
      <section id="top" className="relative overflow-hidden bg-[#F5F5F5] pt-24 md:pt-10">
        <div className="grid min-h-[75vh] lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex items-center">
            <div className="mx-auto w-full max-w-xl px-2 py-16 md:px-12 lg:px-2">
              <h1 className="text-5xl font-extrabold tracking-tight text-[#111] md:text-6xl lg:text-5xl leading-tight flex flex-col gap-3">
                <span className="text-[#0D3B7F]">Instituciones más sólidas.</span>

                <span>Pacientes más sanos.</span>

                <span className="text-[#0D3B7F] relative inline-block">
                  Éxito garantizado.
                  <span className="absolute inset-0 text-[#0D3B7F] blur-sm opacity-60 animate-pulse">
                    Éxito garantizado.
                  </span>
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-500">
                Más de 25 años de experiencia brindando soluciones de alta tecnología y excelencia
                en el sector de la salud global.
              </p>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0D3B7F] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#222]"
                >
                  Conoce nuestros Servicios
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="relative overflow-hidden bg-[#ececec] h-[800px]">
            {heroImages.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                  index === heroIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28" style={{ background: "var(--background-original)" }}>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">
              Quiénes somos
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0D3B7F] leading-tight">
              Un Grupo Comprometido con la{" "}
              <span className="inline-block brightness-195 text-[#0D3B7F]">Salud Global</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-5 text-[#0D3B7F]/75 text-lg leading-relaxed">
            <p>
              Somos un conjunto de empresas enfocado en diferentes áreas de la salud. Establecidos
              sólidamente en el Estado de la Florida, Estados Unidos, expandimos nuestro impacto a
              nivel mundial.
            </p>

            <p>
              Trabajamos hombro a hombro con cada cliente para diseñar estrategias claras, ágiles y
              profundamente personalizadas.
            </p>
          </div>
        </div>

        
        <section className="mx-auto max-w-7xl px-6 mt-20">
          <h3 className="text-center text-sm uppercase tracking-[0.25em] text-[#238CCC] font-semibold mb-10">
            Presencia Internacional
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
            { name: "Estados Unidos", code: "us" },
            { name: "Portugal", code: "pt" },
            { name: "Chile", code: "cl" },
            { name: "Panamá", code: "pa" },
            { name: "Guatemala", code: "gt" },
            { name: "Brasil", code: "br" },
            { name: "Perú", code: "pe" },
            { name: "Ecuador", code: "ec" },
            { name: "Bolivia", code: "bo" },
            { name: "Venezuela", code: "ve" },
            { name: "Puerto Rico", code: "pr" },
              ].map((country) => (
              <div
                key={country.code}
                className="group relative rounded-2xl border border-[#238CCC]/15 bg-white/60 backdrop-blur-md px-4 py-5 text-center transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg"
              >
                {/* FLAG */}
                <img
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={country.name}
                  className="mx-auto mb-3 h-10 w-10 object-cover rounded-full shadow-sm"
                />

                {/* NAME */}
                <span className="text-sm font-medium text-[#0D3B7F]">{country.name}</span>

                {/* glow hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-[#238CCC]/5" />
              </div>
            ))}
          </div>
        </section>
      <GlobalPresence />
      </section>

      {/* SERVICES */}
      <section
  id="services"
  className="relative py-28 overflow-hidden"
  style={{ background: "var(--gradient-fresh)" }}
>
  {/* Decorative blobs */}
  <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] bg-white/10 rounded-full animate-blob" />
  <div
    className="pointer-events-none absolute -bottom-32 -left-24 w-[400px] h-[400px] bg-white/5 rounded-full animate-blob"
    style={{ animationDelay: "-7s" }}
  />

  <div className="relative mx-auto max-w-7xl px-6">
    {/* Header */}
    <div className="max-w-3xl">
      <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">
        Nuestros servicios
      </span>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
        Soluciones Médicas Especializadas
      </h2>

      <p className="mt-4 text-white/80 text-base md:text-lg">
        Ofrecemos una gama integral de servicios de vanguardia diseñados para cubrir múltiples áreas del sector salud.
      </p>
    </div>

    {/* Grid */}
    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          t: "Medicina Clínica",
          d: "Atención médica especializada y de alta calidad.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v18M3 12h18" />
            </svg>
          ),
        },
        {
          t: "Medicina Regenerativa",
          d: "Restauración de la salud celular y tejidos mediante terapias innovadoras.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L6.5 20l2-7L3 9h7z" />
            </svg>
          ),
        },
        {
          t: "Investigación Médica",
          d: "Desarrollo científico y protocolos de vanguardia para la medicina del futuro.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 3h6m-7 6h8m-9 6h10" />
            </svg>
          ),
        },
        {
          t: "Manufactura y Distribución",
          d: "Producción y logística global de insumos médicos confiables.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          ),
        },
        {
          t: "Inmunología y Alergias",
          d: "Diagnóstico avanzado y tratamientos para el sistema inmunológico.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l4 10-4 10-4-10 4-10z" />
            </svg>
          ),
        },
        {
          t: "Innovación en Salud",
          d: "Creación de nuevos proyectos y soluciones médicas de alto impacto.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M2 12h20" />
            </svg>
          ),
        },
      ].map((s, i) => (
        <div
          key={s.t}
          className="group relative p-7 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-[#0D3B7F] hover:-translate-y-2 hover:shadow-2xl"
          style={{
            animation: `rise .8s cubic-bezier(.2,.7,.2,1) ${i * 0.1}s both`,
          }}
        >
          {/* Icon */}
          <div className="flex items-center justify-between">
            <div className="p-2 rounded-lg bg-white/10 group-hover:bg-[#0D3B7F]/10 transition">
              {s.icon}
            </div>
            <span className="text-xs opacity-40 group-hover:opacity-100 font-bold">
              0{i + 1}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-5 text-xl font-semibold">{s.t}</h3>

          {/* Description */}
          <p className="mt-2 text-sm opacity-80 group-hover:opacity-90">
            {s.d}
          </p>

          {/* Glow line */}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0D3B7F] group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>
  </div>
      </section>

      

      {/* INFO SECTION */}
      <InfoSection />
      

      {/* LOGOS MARQUEE */}
      <LogosCarousel />

      {/* CTA */}
      <section id="cta" className="relative py-28 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/CTAImage.png')",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative mx-auto max-w-7xl px-6">
    <div className="grid md:grid-cols-2 items-center min-h-[500px]">
      
      {/* LEFT EMPTY (puedes usarlo para aire visual o logo) */}
      <div className="hidden md:block" />

      {/* RIGHT CONTENT */}
      <div className="text-right text-white">
        <Globe2 className="w-12 h-12 ml-auto text-white/90 animate-float" />

        <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          Liderazgo con<br />
          <span className="text-[#38bdf8]">Impacto Global</span>
        </h2>

        <p className="mt-5 text-lg text-white/80 max-w-md ml-auto">
          Conectamos el futuro de la medicina a través de alianzas estratégicas internacionales y filiales en Latinoamérica, Europa y Estados Unidos. Un compromiso de excelencia que garantiza el éxito de cada proyecto.
        </p>

        <div className="mt-8 flex justify-end">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium text-white transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #238CCC, #38bdf8)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            Agendar una conversación
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
      </section>

      {/* CONTACT FORM */}
      <ContactSection />

      {/* FOOTER */}
      <footer className="border-t border-[#0D3B7F]/10 py-8 bg-[#f5f5f5]">
  <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-5">
    
    {/* LOGO */}
    <div className="flex items-center gap-4">
      <img
        src="/images/LogoMain1.png"
        alt="Foster Stern Group"
        className="h-12 w-auto object-contain"
        draggable={false}
      />

      
    </div>

    {/* LINKS */}
    <div className="flex items-center gap-6 text-sm">
      <a
        href="/aviso-de-privacidad"
        className="text-[#0D3B7F]/70 hover:text-[#0D3B7F] transition-colors duration-300"
      >
        Aviso de privacidad
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Foster Stern Group transformó por completo nuestra estrategia patrimonial. Su acompañamiento es excepcional.",
    name: "María Restrepo",
    role: "CEO, Restrepo Holdings",
  },
  {
    quote:
      "Profesionales con visión clara y un trato genuinamente humano. Confío plenamente en su criterio.",
    name: "Andrés Villamizar",
    role: "Director Financiero, Grupo Andina",
  },
  {
    quote:
      "La claridad y disciplina con que estructuran cada decisión nos dio tranquilidad y resultados reales.",
    name: "Lucía Bermúdez",
    role: "Fundadora, Bermúdez & Co.",
  },
  {
    quote:
      "Más que asesores, son verdaderos socios estratégicos en el crecimiento de nuestro patrimonio familiar.",
    name: "Javier Ocampo",
    role: "Family Office",
  },
];

function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const prev = () => setI((p) => (p - 1 + total) % total);
  const next = () => setI((p) => (p + 1) % total);
  const t = testimonials[i];
  return (
    <section id="testimonials" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">
              Clientes
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0D3B7F]">
              Voces que confían en nosotros.
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-12 h-12 rounded-full border border-[#0D3B7F]/15 grid place-items-center text-[#0D3B7F] hover:bg-[#238CCC] hover:text-white hover:border-transparent transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="w-12 h-12 rounded-full border border-[#0D3B7F]/15 grid place-items-center text-[#0D3B7F] hover:bg-[#238CCC] hover:text-white hover:border-transparent transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          key={i}
          className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 bg-white border border-[#238CCC]/10 animate-rise"
          style={{ boxShadow: "var(--shadow-fresh)" }}
        >
          <Quote className="w-14 h-14 text-[#238CCC]/25 absolute top-8 right-8" />
          <p className="text-2xl md:text-3xl font-medium text-[#0D3B7F] leading-snug max-w-3xl">
            "{t.quote}"
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full grid place-items-center text-white font-bold animate-gradient"
              style={{ backgroundImage: "var(--gradient-fresh)" }}
            >
              {t.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <div className="font-semibold text-[#0D3B7F]">{t.name}</div>
              <div className="text-sm text-[#0D3B7F]/60">{t.role}</div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Ir al testimonio ${idx + 1}`}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: idx === i ? 32 : 12,
                  background: idx === i ? "var(--gradient-fresh)" : "rgba(13,59,127,0.15)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const offices = [
  {
    city: "Ciudad de México",
    country: "México",
    region: "Sede principal",
    image: cityMexico,
    coords: { x: 24, y: 52 },
    timezone: "GMT-6",
    address: "Polanco, CDMX",
    team: "45+ asesores",
    note: "Nuestra oficina principal, donde nació la firma hace más de dos décadas.",
  },
  {
    city: "Miami",
    country: "Estados Unidos",
    region: "Oficina regional",
    image: cityMiami,
    coords: { x: 30, y: 48 },
    timezone: "GMT-5",
    address: "Brickell Avenue",
    team: "20+ asesores",
    note: "Puente estratégico para clientes con intereses internacionales en USD.",
  },
  {
    city: "Bogotá",
    country: "Colombia",
    region: "Oficina LATAM",
    image: cityBogota,
    coords: { x: 32, y: 62 },
    timezone: "GMT-5",
    address: "Zona Financiera, Chicó",
    team: "15+ asesores",
    note: "Acompañamos familias y empresas en su expansión regional.",
  },
  {
    city: "Madrid",
    country: "España",
    region: "Oficina Europa",
    image: cityMadrid,
    coords: { x: 51, y: 40 },
    timezone: "GMT+1",
    address: "Paseo de la Castellana",
    team: "12+ asesores",
    note: "Nuestra puerta de entrada al mercado europeo y patrimonio transatlántico.",
  },
];

function GlobalPresence() {
  const [active, setActive] = useState(0);
  const a = offices[active];

  return (
    <section
      id="presence"
      className="relative overflow-hidden py-24"
      style={{ background: "#f7f7f7" }}
    >
      {/* subtle background glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[320px] w-[320px] opacity-10"
        style={{
          background: "linear-gradient(135deg,#238CCC,#d7edf8)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#238CCC]">
            Presencia Global
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0D3B7F] md:text-5xl">
            Operaciones conectadas
            <br />
            alrededor del mundo.
          </h2>

          <p className="mt-5 leading-relaxed text-[#0D3B7F]/70">
            Coordinamos equipos y operaciones internacionales con presencia
            estratégica en múltiples regiones.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-5">
          {/* MAP */}
          <div className="border border-black/5 bg-white p-5 md:p-7 lg:col-span-3">
            <div
              className="relative aspect-[16/10] overflow-hidden border border-[#238CCC]/10 bg-white"
            >
              {/* world map */}
              <img
                src="/images/mapWorld.png"
                alt="World map"
                className="absolute inset-0 h-full w-full object-contain opacity-15"
              />

              {/* dotted overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #238CCC22 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* pins */}
              {offices.map((o, idx) => {
                const isActive = idx === active;

                return (
                  <button
                    key={o.city}
                    type="button"
                    onClick={() => setActive(idx)}
                    onMouseEnter={() => setActive(idx)}
                    aria-label={`Ver oficina ${o.city}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${o.coords.x}%`,
                      top: `${o.coords.y}%`,
                    }}
                  >
                    <div className="flex flex-col items-center">
                      {/* pin */}
                      <div
                        className={`h-3.5 w-3.5 border-2 transition-all duration-300 ${
                          isActive
                            ? "scale-125 border-[#238CCC] bg-[#238CCC]"
                            : "border-[#238CCC] bg-white"
                        }`}
                      />

                      {/* label */}
                      <span
                        className={`mt-2 text-[11px] font-medium uppercase tracking-wider transition-colors duration-300 ${
                          isActive
                            ? "text-[#0D3B7F]"
                            : "text-[#0D3B7F]/50 group-hover:text-[#0D3B7F]"
                        }`}
                      >
                        {o.city}
                      </span>
                    </div>
                  </button>
                );
              })}

              {/* bottom stat */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 text-sm text-[#0D3B7F]/70">
                <Globe2 className="h-4 w-4 text-[#238CCC]" />
                <span>{offices.length} oficinas internacionales</span>
              </div>
            </div>

            {/* city tabs */}
            <div className="mt-5 flex flex-wrap gap-2">
              {offices.map((o, idx) => (
                <button
                  key={o.city}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`border px-4 py-2 text-sm transition-all duration-300 ${
                    idx === active
                      ? "border-[#0D3B7F] bg-[#0D3B7F] text-white"
                      : "border-black/10 bg-white text-[#0D3B7F]/70 hover:border-[#238CCC]"
                  }`}
                >
                  {o.city}
                </button>
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div
            key={a.city}
            className="overflow-hidden border border-black/5 bg-white lg:col-span-2"
          >
            {/* image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={a.image}
                alt={`${a.city}, ${a.country}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.05) 20%, rgba(13,59,127,0.82) 100%)",
                }}
              />

              <div className="absolute left-5 top-5">
                <span className="border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur">
                  {a.region}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-3xl font-semibold tracking-tight">
                  {a.city}
                </h3>

                <p className="mt-1 text-sm text-white/75">{a.country}</p>
              </div>
            </div>

            {/* content */}
            <div className="p-6">
              <p className="text-sm leading-relaxed text-[#0D3B7F]/72">
                {a.note}
              </p>

              <div className="mt-6 space-y-4">
                {/* address */}
                <div className="flex items-start gap-3 border-t border-black/5 pt-4">
                  <Building2 className="mt-0.5 h-4 w-4 text-[#238CCC]" />

                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#0D3B7F]/45">
                      Dirección
                    </div>

                    <div className="mt-1 text-sm font-medium text-[#0D3B7F]">
                      {a.address}
                    </div>
                  </div>
                </div>

                {/* team */}
                <div className="flex items-start gap-3 border-t border-black/5 pt-4">
                  <Users className="mt-0.5 h-4 w-4 text-[#238CCC]" />

                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#0D3B7F]/45">
                      Equipo
                    </div>

                    <div className="mt-1 text-sm font-medium text-[#0D3B7F]">
                      {a.team}
                    </div>
                  </div>
                </div>

                {/* timezone */}
                <div className="flex items-start gap-3 border-t border-black/5 pt-4">
                  <Clock className="mt-0.5 h-4 w-4 text-[#238CCC]" />

                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#0D3B7F]/45">
                      Horario
                    </div>

                    <div className="mt-1 text-sm font-medium text-[#0D3B7F]">
                      {a.timezone}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosCarousel() {
  const logos = [
    "/images/FSGRD.svg",
    "/images/FSGMX.svg",
    "/images/FSGCO.svg",
    "/images/FSGESP.svg",
  ];

  const row = [...logos, ...logos];

  return (
    <section
      className="relative py-20 overflow-hidden border-y border-[#0D3B7F]/10"
      style={{ background: "#f5f5f5" }}
    >
      {/* HEADER */}
      <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#0D3B7F] font-bold">
          Empresas que confían en nosotros
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#0D3B7F]">
          Construimos relaciones sólidas.
        </h2>
      </div>

      {/* CAROUSEL */}
      <div className="relative">
        <div
          className="flex items-center gap-8 marquee-track"
          style={{ width: "max-content" }}
        >
          {row.map((logo, idx) => (
            <div
  key={idx}
  className="flex items-center justify-center shrink-0 w-[260px] h-[130px] rounded-3xl border border-[#0D3B7F]/10 bg-white transition-all duration-300 hover:-translate-y-1"
  style={{
    boxShadow: "0 10px 30px rgba(13,59,127,0.06)",
  }}
>
  <img
    src={logo}
    alt={`logo-${idx}`}
    className="max-w-[180px] max-h-[70px] object-contain opacity-80 hover:opacity-100 transition-all duration-300"
    draggable={false}
  />
</div>
          ))}
        </div>

        {/* FADE LEFT */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-32"
          style={{
            background:
              "linear-gradient(to right, #f5f5f5 0%, rgba(245,245,245,0) 100%)",
          }}
        />

        {/* FADE RIGHT */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-32"
          style={{
            background:
              "linear-gradient(to left, #f5f5f5 0%, rgba(245,245,245,0) 100%)",
          }}
        />
      </div>
    </section>
  );
}

function InfoSection() {
  const words = ["Visión", "Confianza", "Estrategia", "Futuro"];
  // El contenedor mide su ancho solo por minWidth, ya que las palabras están
  // en position:absolute y no aportan ancho al padre. Debe cubrir la palabra
  // más larga o el texto se recorta (ej. "Estrategia", "Confianza").
  const longestWordChars = Math.max(...words.map((w) => w.length));
  return (
    <section id="info" className="relative py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute top-20 -left-32 w-[380px] h-[380px] opacity-25 animate-blob"
        style={{ background: "var(--gradient-fresh)", filter: "blur(70px)" }}
      />
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-rise">
          <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">
            Lo que nos mueve
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-[#0D3B7F] leading-[1.1]">
            Construimos con{" "}
            <span
              className="relative inline-block align-baseline overflow-hidden h-[1.1em]"
              style={{ minWidth: `${longestWordChars + 0.5}ch`, perspective: "800px" }}
            >
              {words.map((w, idx) => (
                <span
                  key={w}
                  className="word-rotate-item text-shimmer"
                  style={{ animationDelay: `${idx * 4}s` }}
                >
                  {w}
                </span>
              ))}
            </span>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-[#0D3B7F]/75 max-w-xl">
            Cada decisión que tomamos nace de un principio simple: cuidar lo que más importa para
            nuestros clientes. Fusionamos análisis riguroso con sensibilidad humana para crear
            estrategias que resisten el paso del tiempo y se adaptan a cada nueva etapa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-[#238CCC]/10 text-[#0D3B7F] text-sm font-medium">
              Asesoría personalizada
            </span>
            <span className="px-4 py-2 rounded-full bg-[#238CCC]/10 text-[#0D3B7F] text-sm font-medium">
              Análisis estratégico
            </span>
            <span className="px-4 py-2 rounded-full bg-[#238CCC]/10 text-[#0D3B7F] text-sm font-medium">
              Resultados a largo plazo
            </span>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute inset-0 rounded-[2rem] -rotate-3"
            style={{ background: "var(--gradient-fresh)", boxShadow: "var(--shadow-deep)" }}
          />
          <img
            src={infoImage}
            alt="Equipo Foster Stern Group colaborando"
            width={1024}
            height={1024}
            loading="lazy"
            className="info-image relative rounded-[2rem] w-full h-auto object-cover border-8 border-white"
            style={{ boxShadow: "var(--shadow-fresh)" }}
          />
        </div>
      </div>
    </section>
  );
}

const contactTitles = ["Hablemos", "Conectemos", "Construyamos", "Empecemos"];

function ContactSection() {
  const [form, setForm] = useState({
    company: "",
    contact: "",
    phone: "",
    email: "",
    address: "",
    specialty: "",
    message: "",
  });

  const [focus, setFocus] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onChange =
    (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);

    setForm({
      company: "",
      contact: "",
      phone: "",
      email: "",
      address: "",
      specialty: "",
      message: "",
    });
  };

  const field = (
    key: keyof typeof form,
    label: string,
    type = "text",
    textarea = false
  ) => {
    const active = focus === key || form[key].length > 0;

    return (
      <label className="relative block">
        <span
          className="absolute left-5 transition-all duration-200 pointer-events-none"
          style={{
            top: active ? "10px" : textarea ? "22px" : "50%",
            transform: active
              ? "translateY(0)"
              : textarea
                ? "translateY(0)"
                : "translateY(-50%)",
            fontSize: active ? "11px" : "15px",
            letterSpacing: active ? "0.08em" : "0",
            textTransform: active ? "uppercase" : "none",
            color: active ? "#0D3B7F" : "#7a7a7a",
            fontWeight: active ? 700 : 400,
          }}
        >
          {label}
        </span>

        {textarea ? (
          <textarea
            rows={5}
            required
            value={form[key]}
            onChange={onChange(key)}
            onFocus={() => setFocus(key)}
            onBlur={() => setFocus(null)}
            className="w-full rounded-2xl border border-[#dcdcdc] bg-[#f5f5f5] px-5 pt-8 pb-4 outline-none transition-all duration-300 resize-none text-[#0D3B7F] focus:border-[#0D3B7F] focus:bg-white"
          />
        ) : (
          <input
            type={type}
            required
            value={form[key]}
            onChange={onChange(key)}
            onFocus={() => setFocus(key)}
            onBlur={() => setFocus(null)}
            className="w-full rounded-2xl border border-[#dcdcdc] bg-[#f5f5f5] px-5 pt-7 pb-3 outline-none transition-all duration-300 text-[#0D3B7F] focus:border-[#0D3B7F] focus:bg-white"
          />
        )}
      </label>
    );
  };

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "#f5f5f5" }}
    >
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span
            className="uppercase tracking-[0.25em] text-sm font-bold"
            style={{ color: "#0D3B7F" }}
          >
            Contacto
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#0D3B7F" }}
          >
            Hablemos de tu empresa.
          </h2>

          <p className="mt-5 text-lg text-[#4b5563] max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo lo antes
            posible.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={submit}
          className="rounded-[2rem] border border-[#e5e5e5] bg-white p-8 md:p-12"
          style={{
            boxShadow: "0 10px 40px rgba(13,59,127,0.06)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-5">
            {field("company", "Nombre de la empresa")}
            {field("contact", "Nombre completo del contacto")}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            {field("phone", "Teléfono directo", "tel")}
            {field("email", "Correo electrónico", "email")}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            {field("address", "Dirección")}
            {field("specialty", "Especialidad")}
          </div>

          <div className="mt-5">
            {field("message", "Mensaje", "text", true)}
          </div>

          <button
            type="submit"
            className="mt-8 w-full md:w-auto px-10 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "#0D3B7F",
            }}
          >
            {sent ? "Mensaje enviado" : "Enviar información"}
          </button>
        </form>
      </div>
    </section>
  );
}