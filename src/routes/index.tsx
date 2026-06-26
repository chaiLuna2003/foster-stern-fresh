import { createFileRoute } from "@tanstack/react-router";
import heroWave from "@/assets/hero-wave.jpg";
import infoImage from "@/assets/info-section.jpg";
import { ArrowRight, Compass, ShieldCheck, Sparkles, TrendingUp, Users, Globe2, Quote, ChevronLeft, ChevronRight, MapPin, Phone, Mail, User, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foster Stern Group — Estrategia financiera con visión" },
      { name: "description", content: "Foster Stern Group acompaña a sus clientes con estrategia financiera, asesoría experta y soluciones a medida." },
      { property: "og:title", content: "Foster Stern Group" },
      { property: "og:description", content: "Estrategia financiera y asesoramiento de confianza." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV - bubble fixed */}
      <header className="fixed top-0 inset-x-0 z-50" style={{ padding: "15px" }}>
        <div className="mx-auto max-w-7xl backdrop-blur-xl bg-white/75 border border-[#238CCC]/15 flex items-center justify-between px-6 h-16" style={{ borderRadius: "20px", boxShadow: "0 10px 30px -15px rgba(13,59,127,0.25)" }}>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl text-white font-bold" style={{ background: "var(--gradient-fresh)" }}>
              FS
              <span className="absolute inset-0 rounded-xl animate-pulse-ring" style={{ background: "var(--gradient-fresh)" }} />
            </span>
            <span className="font-semibold tracking-tight text-[#0D3B7F]">Foster Stern Group</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#0D3B7F]/80">
            <a href="#about" className="hover:text-[#238CCC] transition">Quiénes somos</a>
            <a href="#values" className="hover:text-[#238CCC] transition">Valores</a>
            <a href="#services" className="hover:text-[#238CCC] transition">Servicios</a>
            <a href="#testimonials" className="hover:text-[#238CCC] transition">Clientes</a>
            <a href="#contact" className="hover:text-[#238CCC] transition">Contacto</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium animate-gradient" style={{ backgroundImage: "var(--gradient-fresh)", boxShadow: "var(--shadow-fresh)" }}>
            Hablemos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32">
        {/* floating blobs */}
        <div className="pointer-events-none absolute -top-20 -left-32 w-[480px] h-[480px] opacity-40 animate-blob" style={{ background: "var(--gradient-fresh)", filter: "blur(60px)" }} />
        <div className="pointer-events-none absolute top-40 -right-32 w-[420px] h-[420px] opacity-30 animate-blob" style={{ background: "linear-gradient(135deg,#238CCC,#a7d8f0)", filter: "blur(70px)", animationDelay: "-5s" }} />

        <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#238CCC]/10 text-[#0D3B7F] text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Estrategia con propósito
            </span>
            <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-[1.05] text-[#0D3B7F]">
              Construimos <span className="text-shimmer">decisiones financieras</span> que perduran.
            </h1>
            <p className="mt-6 text-lg text-[#0D3B7F]/70 max-w-xl">
              En Foster Stern Group acompañamos a nuestros clientes con visión estratégica, claridad y un compromiso real por su crecimiento.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-medium animate-gradient" style={{ backgroundImage: "var(--gradient-fresh)", boxShadow: "var(--shadow-fresh)" }}>
                Conoce quiénes somos <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#0D3B7F]/15 text-[#0D3B7F] font-medium hover:bg-[#238CCC]/5 transition">
                Nuestros servicios
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[["25+","Años"],["120+","Clientes"],["$3B","Asesorados"]].map(([n,l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold text-[#0D3B7F]">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-[#0D3B7F]/60 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-[2.5rem] rotate-3" style={{ background: "var(--gradient-fresh)", boxShadow: "var(--shadow-deep)" }} />
            <img
              src={heroWave}
              alt="Foster Stern Group visual"
              width={1024}
              height={1024}
              className="relative rounded-[2.5rem] w-full h-auto object-cover border-8 border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-5 py-4 flex items-center gap-3" style={{ boxShadow: "var(--shadow-fresh)" }}>
              <div className="w-10 h-10 rounded-xl grid place-items-center text-white" style={{ background: "var(--gradient-fresh)" }}>
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[#0D3B7F]/60">Crecimiento promedio</div>
                <div className="text-lg font-bold text-[#0D3B7F]">+18.4%</div>
              </div>
            </div>
          </div>
        </div>

        {/* wave divider */}
        <svg className="absolute bottom-0 inset-x-0 w-full h-24 animate-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C320,128 720,0 1440,80 L1440,120 L0,120 Z" fill="#eaf4fb" />
        </svg>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">Quiénes somos</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0D3B7F] leading-tight">
              Un equipo dedicado a hacer crecer tu patrimonio con integridad.
            </h2>
          </div>
          <div className="space-y-5 text-[#0D3B7F]/75 text-lg leading-relaxed">
            <p>
              Foster Stern Group es una firma de asesoría financiera independiente fundada sobre la confianza, la transparencia y una visión a largo plazo.
            </p>
            <p>
              Trabajamos hombro a hombro con cada cliente para diseñar estrategias claras, ágiles y profundamente personalizadas — porque cada historia financiera merece su propio camino.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">Nuestros valores</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0D3B7F]">Lo que nos define cada día.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, t: "Integridad", d: "Actuamos con honestidad absoluta. Tu confianza es el activo más valioso que protegemos." },
              { icon: Compass, t: "Visión", d: "Pensamos a largo plazo, anticipando tendencias y oportunidades para tu futuro." },
              { icon: Users, t: "Cercanía", d: "Cada cliente es único. Te acompañamos como socios estratégicos, no como proveedores." },
            ].map(({icon:Icon,t,d}, i) => (
              <div key={t} className="group relative p-8 rounded-3xl bg-white border border-[#238CCC]/10 transition hover:-translate-y-2 hover:border-[#238CCC]/30" style={{ boxShadow: "0 10px 30px -20px rgba(13,59,127,0.25)", animation: `rise .8s cubic-bezier(.2,.7,.2,1) ${i*0.1}s both` }}>
                <div className="w-14 h-14 rounded-2xl grid place-items-center text-white mb-5 animate-gradient" style={{ backgroundImage: "var(--gradient-fresh)" }}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0D3B7F]">{t}</h3>
                <p className="mt-3 text-[#0D3B7F]/70 leading-relaxed">{d}</p>
                <div className="absolute -bottom-px left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition" style={{ background: "var(--gradient-fresh)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-28 overflow-hidden" style={{ background: "var(--gradient-fresh)" }}>
        <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] bg-white/10 rounded-full animate-blob" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 w-[400px] h-[400px] bg-white/5 rounded-full animate-blob" style={{ animationDelay: "-7s" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">Qué hacemos</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Soluciones financieras con un toque humano.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Asesoría Patrimonial", d: "Diseño estratégico de tu patrimonio personal y familiar." },
              { t: "Inversiones", d: "Carteras balanceadas con visión global y disciplina." },
              { t: "Planeación Fiscal", d: "Optimización eficiente y responsable de tus obligaciones." },
              { t: "Sucesión", d: "Estructuras que protegen a las próximas generaciones." },
            ].map((s,i) => (
              <div key={s.t} className="group p-7 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white transition hover:bg-white hover:text-[#0D3B7F] hover:-translate-y-1" style={{ animation: `rise .8s cubic-bezier(.2,.7,.2,1) ${i*0.08}s both` }}>
                <div className="text-4xl font-bold opacity-40 group-hover:opacity-100 transition">0{i+1}</div>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm opacity-80">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <TestimonialsCarousel />

      {/* INFO SECTION */}
      <InfoSection />

      {/* LOGOS MARQUEE */}
      <LogosCarousel />

      {/* CTA */}
      <section id="cta" className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center" style={{ background: "var(--gradient-soft)", boxShadow: "var(--shadow-fresh)" }}>
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-20 animate-blob" style={{ background: "var(--gradient-fresh)", filter: "blur(80px)" }} />
            <div className="relative">
              <Globe2 className="w-12 h-12 mx-auto text-[#238CCC] animate-float" />
              <h2 className="mt-6 text-4xl md:text-6xl font-bold text-[#0D3B7F] leading-tight">
                Empecemos a construir <br/> <span className="text-shimmer">tu próxima etapa.</span>
              </h2>
              <p className="mt-5 text-lg text-[#0D3B7F]/70 max-w-xl mx-auto">
                Conversemos sobre cómo podemos acompañarte a alcanzar tus metas financieras.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-medium animate-gradient" style={{ backgroundImage: "var(--gradient-fresh)", boxShadow: "var(--shadow-deep)" }}>
                Agendar una conversación <ArrowRight className="w-4 h-4" />
              </a>
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
            <span className="w-7 h-7 rounded-lg grid place-items-center text-white text-xs font-bold" style={{ background: "var(--gradient-fresh)" }}>FS</span>
            <span>© {new Date().getFullYear()} Foster Stern Group</span>
          </div>
          <div>Confianza · Visión · Resultados</div>
        </div>
      </footer>
    </div>
  );
}

const testimonials = [
  { quote: "Foster Stern Group transformó por completo nuestra estrategia patrimonial. Su acompañamiento es excepcional.", name: "María Restrepo", role: "CEO, Restrepo Holdings" },
  { quote: "Profesionales con visión clara y un trato genuinamente humano. Confío plenamente en su criterio.", name: "Andrés Villamizar", role: "Director Financiero, Grupo Andina" },
  { quote: "La claridad y disciplina con que estructuran cada decisión nos dio tranquilidad y resultados reales.", name: "Lucía Bermúdez", role: "Fundadora, Bermúdez & Co." },
  { quote: "Más que asesores, son verdaderos socios estratégicos en el crecimiento de nuestro patrimonio familiar.", name: "Javier Ocampo", role: "Family Office" },
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
            <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">Clientes</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0D3B7F]">Voces que confían en nosotros.</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={prev} aria-label="Anterior" className="w-12 h-12 rounded-full border border-[#0D3B7F]/15 grid place-items-center text-[#0D3B7F] hover:bg-[#238CCC] hover:text-white hover:border-transparent transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} aria-label="Siguiente" className="w-12 h-12 rounded-full border border-[#0D3B7F]/15 grid place-items-center text-[#0D3B7F] hover:bg-[#238CCC] hover:text-white hover:border-transparent transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div key={i} className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 bg-white border border-[#238CCC]/10 animate-rise" style={{ boxShadow: "var(--shadow-fresh)" }}>
          <Quote className="w-14 h-14 text-[#238CCC]/25 absolute top-8 right-8" />
          <p className="text-2xl md:text-3xl font-medium text-[#0D3B7F] leading-snug max-w-3xl">
            "{t.quote}"
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full grid place-items-center text-white font-bold animate-gradient" style={{ backgroundImage: "var(--gradient-fresh)" }}>
              {t.name.split(" ").map(n => n[0]).slice(0,2).join("")}
            </div>
            <div>
              <div className="font-semibold text-[#0D3B7F]">{t.name}</div>
              <div className="text-sm text-[#0D3B7F]/60">{t.role}</div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} aria-label={`Ir al testimonio ${idx+1}`}
                className="h-1.5 rounded-full transition-all"
                style={{ width: idx === i ? 32 : 12, background: idx === i ? "var(--gradient-fresh)" : "rgba(13,59,127,0.15)" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosCarousel() {
  const logos = ["Andina Capital", "Restrepo Holdings", "Bermúdez & Co.", "Ocampo Family", "Grupo Mérida", "Bravo Partners", "Cordillera Group", "Solaris Wealth"];
  const row = [...logos, ...logos];
  return (
    <section className="py-16 border-y border-[#238CCC]/10 bg-[#eaf4fb]/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-8 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">Confían en nosotros</span>
      </div>
      <div className="relative">
        <div className="flex gap-6 marquee-track" style={{ width: "max-content" }}>
          {row.map((name, idx) => (
            <div key={idx} className="shrink-0 px-8 py-5 rounded-2xl bg-white border border-[#238CCC]/10 text-[#0D3B7F] font-semibold tracking-tight" style={{ boxShadow: "0 8px 20px -15px rgba(13,59,127,0.2)" }}>
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
  return (
    <section id="info" className="relative py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-20 -left-32 w-[380px] h-[380px] opacity-25 animate-blob" style={{ background: "var(--gradient-fresh)", filter: "blur(70px)" }} />
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-rise">
          <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">Lo que nos mueve</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-[#0D3B7F] leading-[1.1]">
            Construimos con{" "}
            <span className="relative inline-block align-baseline overflow-hidden h-[1.1em]" style={{ minWidth: "6.5ch", perspective: "800px" }}>
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
            Cada decisión que tomamos nace de un principio simple: cuidar lo que más
            importa para nuestros clientes. Fusionamos análisis riguroso con sensibilidad
            humana para crear estrategias que resisten el paso del tiempo y se adaptan a
            cada nueva etapa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-[#238CCC]/10 text-[#0D3B7F] text-sm font-medium">Asesoría personalizada</span>
            <span className="px-4 py-2 rounded-full bg-[#238CCC]/10 text-[#0D3B7F] text-sm font-medium">Análisis estratégico</span>
            <span className="px-4 py-2 rounded-full bg-[#238CCC]/10 text-[#0D3B7F] text-sm font-medium">Resultados a largo plazo</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] -rotate-3" style={{ background: "var(--gradient-fresh)", boxShadow: "var(--shadow-deep)" }} />
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
