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

const heroImages = ["/images/HeroSection1.webp", "/images/hero-main.jpg"];

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
      <section id="top" className="relative overflow-hidden bg-[#F7F7F7] pt-24 md:pt-10">
        <div className="grid min-h-[75vh] lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex items-center">
            <div className="mx-auto w-full max-w-xl px-2 py-16 md:px-12 lg:px-20">
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

        {/* 🌍 PRESENCIA INTERNACIONAL */}
        <section className="mx-auto max-w-7xl px-6 mt-20">
          <h3 className="text-center text-sm uppercase tracking-[0.25em] text-[#238CCC] font-semibold mb-10">
            Presencia Internacional
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: "República Dominicana", code: "do" },
              { name: "Colombia", code: "co" },
              { name: "México", code: "mx" },
              { name: "Costa Rica", code: "cr" },
              { name: "Argentina", code: "ar" },
              { name: "España", code: "es" },
              { name: "China", code: "cn" },
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
      <footer className="border-t border-[#0D3B7F]/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#0D3B7F]/60">
          <div className="flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-lg grid place-items-center text-white text-xs font-bold"
              style={{ background: "var(--gradient-fresh)" }}
            >
              FS
            </span>
            <span>© {new Date().getFullYear()} Foster Stern Group</span>
          </div>
          <div>Confianza · Visión · Resultados</div>
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
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--background-original)" }}
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[460px] h-[460px] opacity-25 animate-blob"
        
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-32 w-[380px] h-[380px] opacity-20 animate-blob"
        style={{
          background: "linear-gradient(135deg,#238CCC,#a7d8f0)",
          filter: "blur(70px)",
          animationDelay: "-6s",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* INTERACTIVE MAP */}
          <div
            className="lg:col-span-3 relative rounded-[2rem] p-6 md:p-8 bg-white border border-[#238CCC]/15"
            style={{ boxShadow: "var(--shadow-fresh)" }}
          >
            <div
              className="relative aspect-[16/10] rounded-2xl overflow-hidden"
              style={{ background: "linear-gradient(160deg,#eaf4fb 0%,#d3e8f5 100%)" }}
            >
              {/* dotted world-ish backdrop */}
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage: "radial-gradient(circle, #238CCC33 1.2px, transparent 1.2px)",
                  backgroundSize: "18px 18px",
                }}
                aria-hidden="true"
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
                    aria-pressed={isActive}
                    className="absolute -translate-x-1/2 -translate-y-full group"
                    style={{ left: `${o.coords.x}%`, top: `${o.coords.y}%` }}
                  >
                    <span className="relative grid place-items-center">
                      {isActive && (
                        <span
                          className="absolute w-10 h-10 rounded-full animate-pulse-ring"
                          style={{ background: "var(--gradient-fresh)" }}
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`relative grid place-items-center w-9 h-9 rounded-full text-white transition-transform duration-300 ease-out ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                        style={{
                          background: "var(--gradient-fresh)",
                          boxShadow: "var(--shadow-fresh)",
                        }}
                      >
                        <MapPin className="w-4 h-4" />
                      </span>
                      <span
                        className={`mt-1 px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all duration-300 ${isActive ? "bg-[#0D3B7F] text-white" : "bg-white/90 text-[#0D3B7F] group-hover:bg-[#0D3B7F] group-hover:text-white"}`}
                      >
                        {o.city}
                      </span>
                    </span>
                  </button>
                );
              })}

              {/* corner stat */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm">
                <Globe2 className="w-4 h-4 text-[#238CCC]" />
                <span className="text-[#0D3B7F] font-semibold">{offices.length} oficinas</span>
                <span className="text-[#0D3B7F]/60">en 4 países</span>
              </div>
            </div>

            {/* tabs */}
            <div className="mt-6 flex flex-wrap gap-2">
              {offices.map((o, idx) => (
                <button
                  key={o.city}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${idx === active ? "text-white" : "bg-[#238CCC]/10 text-[#0D3B7F] hover:bg-[#238CCC]/20"}`}
                  style={
                    idx === active
                      ? {
                          backgroundImage: "var(--gradient-fresh)",
                          boxShadow: "var(--shadow-fresh)",
                        }
                      : undefined
                  }
                >
                  {o.city}
                </button>
              ))}
            </div>
          </div>

          {/* DETAIL CARD */}
          <div
            key={a.city}
            className="lg:col-span-2 relative rounded-[2rem] overflow-hidden bg-white border border-[#238CCC]/15 animate-rise"
            style={{ boxShadow: "var(--shadow-fresh)" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={a.image}
                alt={`${a.city}, ${a.country}`}
                width={1024}
                height={768}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(13,59,127,0) 40%, rgba(13,59,127,0.85) 100%)",
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] uppercase tracking-wider text-[#0D3B7F] font-semibold">
                  {a.region}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-3xl font-bold leading-tight">{a.city}</div>
                <div className="text-sm opacity-90">{a.country}</div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#0D3B7F]/75 leading-relaxed">{a.note}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-[#238CCC]/8">
                  <Building2 className="w-4 h-4 mx-auto text-[#238CCC]" />
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-[#0D3B7F]/60">
                    Dirección
                  </div>
                  <div className="text-xs font-semibold text-[#0D3B7F] mt-0.5 leading-tight">
                    {a.address}
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-[#238CCC]/8">
                  <Users className="w-4 h-4 mx-auto text-[#238CCC]" />
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-[#0D3B7F]/60">
                    Equipo
                  </div>
                  <div className="text-xs font-semibold text-[#0D3B7F] mt-0.5 leading-tight">
                    {a.team}
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-[#238CCC]/8">
                  <Clock className="w-4 h-4 mx-auto text-[#238CCC]" />
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-[#0D3B7F]/60">
                    Horario
                  </div>
                  <div className="text-xs font-semibold text-[#0D3B7F] mt-0.5 leading-tight">
                    {a.timezone}
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
    "Andina Capital",
    "Restrepo Holdings",
    "Bermúdez & Co.",
    "Ocampo Family",
    "Grupo Mérida",
    "Bravo Partners",
    "Cordillera Group",
    "Solaris Wealth",
  ];
  const row = [...logos, ...logos];
  return (
    <section className="py-16 border-y border-[#238CCC]/10 bg-[#eaf4fb]/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-8 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">
          Confían en nosotros
        </span>
      </div>
      <div className="relative">
        <div className="flex gap-6 marquee-track" style={{ width: "max-content" }}>
          {row.map((name, idx) => (
            <div
              key={idx}
              className="shrink-0 px-8 py-5 rounded-2xl bg-white border border-[#238CCC]/10 text-[#0D3B7F] font-semibold tracking-tight"
              style={{ boxShadow: "0 8px 20px -15px rgba(13,59,127,0.2)" }}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#eaf4fb] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#eaf4fb] to-transparent" />
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
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [accept, setAccept] = useState(false);
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState<string | null>(null);

  const onChange = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accept) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
    setAccept(false);
  };

  const field = (key: keyof typeof form, label: string, Icon: any, type = "text") => {
    const active = focus === key || form[key].length > 0;
    return (
      <label className="relative block">
        <span
          className="absolute left-12 transition-all pointer-events-none text-[#0D3B7F]/60"
          style={{
            top: active ? "6px" : "50%",
            transform: active ? "translateY(0)" : "translateY(-50%)",
            fontSize: active ? "11px" : "15px",
            letterSpacing: active ? "0.1em" : "0",
            textTransform: active ? "uppercase" : "none",
            fontWeight: active ? 600 : 400,
            color: active ? "#238CCC" : undefined,
          }}
        >
          {label}
        </span>
        <Icon
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${active ? "text-[#238CCC]" : "text-[#0D3B7F]/40"}`}
        />
        <input
          type={type}
          required
          value={form[key]}
          onChange={onChange(key)}
          onFocus={() => setFocus(key)}
          onBlur={() => setFocus(null)}
          className="w-full pl-12 pr-4 pt-6 pb-2 rounded-2xl bg-white border border-[#238CCC]/15 outline-none transition-all focus:border-[#238CCC] focus:shadow-[0_0_0_4px_rgba(35,140,204,0.12)] text-[#0D3B7F]"
        />
      </label>
    );
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--gradient-soft)" }}
    >
      <div
        className="pointer-events-none absolute top-10 right-0 w-[420px] h-[420px] opacity-25 animate-blob"
        style={{ background: "var(--gradient-fresh)", filter: "blur(70px)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">
            Contacto
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-[#0D3B7F] leading-[1.1]">
            <span
              className="relative inline-block align-baseline overflow-hidden h-[1.1em]"
              style={{ minWidth: "8ch", perspective: "800px" }}
            >
              {contactTitles.map((w, idx) => (
                <span
                  key={w}
                  className="word-rotate-item text-shimmer"
                  style={{ animationDelay: `${idx * 4}s` }}
                >
                  {w}
                </span>
              ))}
            </span>{" "}
            <span className="text-[#0D3B7F]">hoy mismo.</span>
          </h2>
          <p className="mt-5 text-lg text-[#0D3B7F]/70">
            Déjanos tus datos y un asesor te contactará en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* FORM */}
          <form
            onSubmit={submit}
            className="lg:col-span-3 p-8 md:p-10 rounded-[2rem] bg-white border border-[#238CCC]/15 animate-rise"
            style={{ boxShadow: "var(--shadow-fresh)" }}
          >
            <div className="grid md:grid-cols-2 gap-5">
              {field("name", "Nombre completo", User)}
              {field("phone", "Teléfono", Phone, "tel")}
            </div>
            <div className="mt-5">{field("email", "Correo electrónico", Mail, "email")}</div>

            <label className="relative block mt-5">
              <span
                className="absolute left-12 transition-all pointer-events-none text-[#0D3B7F]/60"
                style={{
                  top: focus === "message" || form.message.length > 0 ? "10px" : "22px",
                  fontSize: focus === "message" || form.message.length > 0 ? "11px" : "15px",
                  letterSpacing: focus === "message" || form.message.length > 0 ? "0.1em" : "0",
                  textTransform:
                    focus === "message" || form.message.length > 0 ? "uppercase" : "none",
                  fontWeight: focus === "message" || form.message.length > 0 ? 600 : 400,
                  color: focus === "message" || form.message.length > 0 ? "#238CCC" : undefined,
                }}
              >
                Mensaje
              </span>
              <MessageSquare
                className={`absolute left-4 top-5 w-5 h-5 transition-colors ${focus === "message" || form.message.length > 0 ? "text-[#238CCC]" : "text-[#0D3B7F]/40"}`}
              />
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={onChange("message")}
                onFocus={() => setFocus("message")}
                onBlur={() => setFocus(null)}
                className="w-full pl-12 pr-4 pt-7 pb-3 rounded-2xl bg-white border border-[#238CCC]/15 outline-none transition-all focus:border-[#238CCC] focus:shadow-[0_0_0_4px_rgba(35,140,204,0.12)] text-[#0D3B7F] resize-none"
              />
            </label>

            <label className="mt-5 flex items-start gap-3 cursor-pointer group">
              <span
                className={`mt-0.5 w-5 h-5 rounded-md grid place-items-center border-2 transition-all ${accept ? "border-transparent text-white" : "border-[#0D3B7F]/25 text-transparent"}`}
                style={accept ? { backgroundImage: "var(--gradient-fresh)" } : undefined}
              >
                <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={3} />
              </span>
              <input
                type="checkbox"
                checked={accept}
                onChange={(e) => setAccept(e.target.checked)}
                className="sr-only"
              />
              <span className="text-sm text-[#0D3B7F]/75 leading-relaxed">
                He leído y acepto el{" "}
                <a href="#" className="text-[#238CCC] font-semibold hover:underline">
                  aviso de privacidad
                </a>{" "}
                y el tratamiento de mis datos.
              </span>
            </label>

            <button
              type="submit"
              disabled={!accept}
              className="mt-7 inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-full text-white font-medium animate-gradient disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-fresh)", boxShadow: "var(--shadow-fresh)" }}
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> ¡Mensaje enviado!
                </>
              ) : (
                <>
                  Enviar mensaje <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* MAP + LOCATION */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div
              className="rounded-[2rem] overflow-hidden border border-[#238CCC]/15 bg-white animate-rise"
              style={{ boxShadow: "var(--shadow-fresh)", animationDelay: "0.1s" }}
            >
              <iframe
                title="Ubicación Foster Stern Group"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-99.1776%2C19.4250%2C-99.1576%2C19.4350&layer=mapnik&marker=19.4300%2C-99.1676"
                className="w-full h-72 border-0"
                loading="lazy"
              />
            </div>
            <div
              className="p-6 rounded-[2rem] bg-white border border-[#238CCC]/15 animate-rise"
              style={{ boxShadow: "var(--shadow-fresh)", animationDelay: "0.2s" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 shrink-0 rounded-2xl grid place-items-center text-white animate-gradient"
                  style={{ backgroundImage: "var(--gradient-fresh)" }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">
                    Oficina principal
                  </div>
                  <div className="mt-1 font-semibold text-[#0D3B7F]">
                    Av. Paseo de la Reforma 250
                  </div>
                  <div className="text-sm text-[#0D3B7F]/70">Piso 18, Cuauhtémoc, CDMX</div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <a
                  href="tel:+525555555555"
                  className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#238CCC]/8 text-[#0D3B7F] hover:bg-[#238CCC]/15 transition"
                >
                  <Phone className="w-4 h-4 text-[#238CCC]" /> +52 55 5555 5555
                </a>
                <a
                  href="mailto:contacto@fosterstern.com"
                  className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#238CCC]/8 text-[#0D3B7F] hover:bg-[#238CCC]/15 transition"
                >
                  <Mail className="w-4 h-4 text-[#238CCC]" /> Escríbenos
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}