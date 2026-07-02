import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { ArrowRight, Award, Heart, Lightbulb, Target, Sparkles, Flag, Eye, Globe2, ShieldCheck, TrendingUp } from "lucide-react";
import infoImage from "@/assets/info-section.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Foster Stern Group" },
      { name: "description", content: "Conoce a Foster Stern Group: nuestra historia, propósito y equipo detrás de cada estrategia financiera." },
      { property: "og:title", content: "Nosotros — Foster Stern Group" },
      { property: "og:description", content: "Historia, propósito y equipo de Foster Stern Group." },
    ],
  }),
  component: Nosotros,
});

const words = ["Nuestra historia", "Nuestro propósito"];

function Nosotros() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
  {/* Background */}
  <div className="absolute inset-0 bg-white" />

  {/* Glow Effects */}
  <div
    className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-40"
    style={{
      background:
        "radial-gradient(circle at center, rgba(35,140,204,0.22), transparent 70%)",
      filter: "blur(60px)",
    }}
  />

  <div
    className="pointer-events-none absolute -top-32 -right-20 w-[380px] h-[380px] rounded-full opacity-30 animate-blob"
    style={{
      background: "linear-gradient(135deg,#238CCC,#9ED8FF)",
      filter: "blur(80px)",
    }}
  />

  <div
    className="pointer-events-none absolute bottom-0 -left-24 w-[320px] h-[320px] rounded-full opacity-20 animate-blob"
    style={{
      background: "linear-gradient(135deg,#0D3B7F,#238CCC)",
      filter: "blur(90px)",
      animationDelay: "-5s",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      
      {/* Left Content */}
      <div className="relative z-10 animate-rise">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#238CCC]/20 bg-white/70 backdrop-blur-md shadow-sm">
          <Sparkles className="w-4 h-4 text-[#238CCC]" />
          <span className="text-sm font-medium text-[#0D3B7F] tracking-wide">
            Quiénes somos
          </span>
        </div>

        <h1 className="mt-7 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-[#0D3B7F]">
          Construimos{" "}
          <span className="relative inline-block">
            confianza
            <svg
              className="absolute -bottom-3 left-0 w-full"
              viewBox="0 0 300 18"
              fill="none"
            >
              <path
                d="M4 14C65 4 125 2 296 12"
                stroke="#238CCC"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <br />
          para el futuro.
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[#0D3B7F]/70">
          Somos una firma independiente enfocada en proteger y hacer crecer
          el patrimonio de familias y empresas mediante estrategias claras,
          transparentes y sostenibles.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl bg-[#0D3B7F] px-7 py-4 text-white font-semibold shadow-lg shadow-[#0D3B7F]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Agenda una consulta
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-2xl border border-[#0D3B7F]/10 bg-white/80 backdrop-blur-md px-7 py-4 text-[#0D3B7F] font-semibold transition-all duration-300 hover:bg-[#238CCC]/5"
          >
            Conocer más
          </a>
        </div>

        {/* Metrics */}
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
          {[
            ["15+", "Años de experiencia"],
            ["98%", "Clientes satisfechos"],
            ["24/7", "Acompañamiento"],
          ].map(([n, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-[#238CCC]/10 bg-white/70 backdrop-blur-md p-5 shadow-sm"
            >
              <div className="text-3xl font-black text-[#0D3B7F]">{n}</div>
              <div className="mt-1 text-sm text-[#0D3B7F]/60 leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[520px]">
          
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_25px_80px_rgba(13,59,127,0.12)]">
            <img
              src="/images/team-about.jpg"
              alt="Equipo Foster Stern"
              className="h-[620px] w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B7F]/65 via-transparent to-transparent" />

            {/* Floating Info */}
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/80 backdrop-blur-md border border-white/40 p-5 shadow-xl">
              <div className="text-sm font-medium text-[#238CCC]">
                Nuestro enfoque
              </div>

              <div className="mt-2 text-2xl font-bold text-[#0D3B7F] leading-tight">
                Estrategias financieras diseñadas para durar generaciones.
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -left-10 top-12 hidden md:flex items-center gap-3 rounded-2xl border border-white/40 bg-white/80 backdrop-blur-md px-5 py-4 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#238CCC]/10">
              <ShieldCheck className="w-6 h-6 text-[#238CCC]" />
            </div>

            <div>
              <div className="text-sm text-[#0D3B7F]/60">
                Compromiso
              </div>
              <div className="font-bold text-[#0D3B7F]">
                Transparencia total
              </div>
            </div>
          </div>

          {/* Floating Badge 2 */}
          <div className="absolute -right-8 bottom-20 hidden md:flex items-center gap-3 rounded-2xl border border-white/40 bg-white/80 backdrop-blur-md px-5 py-4 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D3B7F]/10">
              <TrendingUp className="w-6 h-6 text-[#0D3B7F]" />
            </div>

            <div>
              <div className="text-sm text-[#0D3B7F]/60">
                Crecimiento
              </div>
              <div className="font-bold text-[#0D3B7F]">
                Visión a largo plazo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* STORY */}
      <section className="relative py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] rotate-3" style={{ background: "var(--gradient-fresh)", boxShadow: "var(--shadow-deep)" }} />
            <img src={infoImage} alt="Equipo Foster Stern Group" className="info-image relative rounded-[2rem] w-full h-auto object-cover border-8 border-white" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">Nuestra historia</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0D3B7F] leading-tight">25 años acompañando decisiones que marcan futuro.</h2>
            <div className="mt-6 space-y-4 text-[#0D3B7F]/75 text-lg leading-relaxed">
              <p>Foster Stern Group nació con una convicción clara: la asesoría financiera debía dejar de ser un servicio frío y volverse una relación cercana, basada en la confianza y el largo plazo.</p>
              <p>Hoy somos un equipo multidisciplinario que combina experiencia internacional con sensibilidad local, construyendo estrategias que protegen y hacen crecer el patrimonio de quienes confían en nosotros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">Hacia dónde vamos</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0D3B7F]">Misión y visión</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="p-9 rounded-3xl bg-white border border-[#238CCC]/10 hover:-translate-y-2 transition" style={{ boxShadow: "0 10px 30px -20px rgba(13,59,127,0.25)", animation: "rise .8s cubic-bezier(.2,.7,.2,1) both" }}>
              <div className="w-14 h-14 rounded-2xl grid place-items-center text-white mb-6 animate-gradient" style={{ backgroundImage: "var(--gradient-fresh)" }}>
                <Flag className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0D3B7F]">Misión</h3>
              <p className="mt-3 text-[#0D3B7F]/75 leading-relaxed">
                Brindar productos y servicios de la más alta tecnología para mejorar la calidad de vida.
              </p>
            </div>
            <div className="p-9 rounded-3xl bg-white border border-[#238CCC]/10 hover:-translate-y-2 transition" style={{ boxShadow: "0 10px 30px -20px rgba(13,59,127,0.25)", animation: "rise .8s cubic-bezier(.2,.7,.2,1) .1s both" }}>
              <div className="w-14 h-14 rounded-2xl grid place-items-center text-white mb-6 animate-gradient" style={{ backgroundImage: "var(--gradient-fresh)" }}>
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0D3B7F]">Visión</h3>
              <p className="mt-3 text-[#0D3B7F]/75 leading-relaxed">
                Crear alianzas internacionales con empresas de alta tecnología en el desarrollo de servicios y productos en la medicina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#238CCC] font-semibold">Lo que nos define</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0D3B7F]">Cuatro pilares que guían cada decisión.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Target, t: "Propósito", d: "Cada estrategia parte de entender profundamente las metas de nuestros clientes." },
              { icon: Heart, t: "Cercanía", d: "Construimos relaciones humanas, no transaccionales. Estamos cuando importa." },
              { icon: Lightbulb, t: "Innovación", d: "Buscamos siempre mejores formas de servir, sin perder el rigor analítico." },
              { icon: Award, t: "Excelencia", d: "Trabajamos con disciplina, transparencia y responsabilidad en cada detalle." },
            ].map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="p-7 rounded-3xl bg-white border border-[#238CCC]/10 hover:-translate-y-2 transition" style={{ boxShadow: "0 10px 30px -20px rgba(13,59,127,0.25)", animation: `rise .8s cubic-bezier(.2,.7,.2,1) ${i * 0.1}s both` }}>
                <div className="w-12 h-12 rounded-2xl grid place-items-center text-white mb-4 animate-gradient" style={{ backgroundImage: "var(--gradient-fresh)" }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#0D3B7F]">{t}</h3>
                <p className="mt-2 text-sm text-[#0D3B7F]/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-fresh)" }}>
        <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] bg-white/10 rounded-full animate-blob" />
        <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {[["25+", "Años de experiencia"], ["120+", "Clientes activos"], ["$3B", "Patrimonio asesorado"], ["18%", "Crecimiento promedio"]].map(([n, l]) => (
            <div key={l} className="animate-rise">
              <div className="text-5xl md:text-6xl font-bold">{n}</div>
              <div className="mt-2 text-sm uppercase tracking-wider opacity-80">{l}</div>
            </div>
          ))}
        </div>
      </section>

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
          Empecemos a construir <br />
          <span className="text-[#38bdf8]">tu próxima etapa.</span>
        </h2>

        <p className="mt-5 text-lg text-white/80 max-w-md ml-auto">
          Conversemos sobre cómo podemos acompañarte a alcanzar tus metas financieras
          con una estrategia clara y enfocada en resultados.
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