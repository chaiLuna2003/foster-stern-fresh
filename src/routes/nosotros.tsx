import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { ArrowRight, Award, Heart, Lightbulb, Target, Sparkles } from "lucide-react";
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

const words = ["historia", "propósito", "equipo", "visión"];

function Nosotros() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="pointer-events-none absolute -top-20 -right-32 w-[460px] h-[460px] opacity-35 animate-blob" style={{ background: "var(--gradient-fresh)", filter: "blur(70px)" }} />
        <div className="pointer-events-none absolute top-60 -left-32 w-[380px] h-[380px] opacity-25 animate-blob" style={{ background: "linear-gradient(135deg,#238CCC,#a7d8f0)", filter: "blur(70px)", animationDelay: "-6s" }} />

        <div className="relative mx-auto max-w-5xl px-6 text-center animate-rise">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#238CCC]/10 text-[#0D3B7F] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Quiénes somos
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-[1.05] text-[#0D3B7F]">
            Nuestra{" "}
            <span className="relative inline-block align-baseline overflow-hidden h-[1.1em]" style={{ minWidth: "7ch", perspective: "800px" }}>
              {words.map((w, idx) => (
                <span key={w} className="word-rotate-item text-shimmer" style={{ animationDelay: `${idx * 4}s` }}>
                  {w}
                </span>
              ))}
            </span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-[#0D3B7F]/70 max-w-2xl mx-auto">
            Somos una firma independiente que cree firmemente en el poder de las decisiones bien tomadas. Acompañamos a familias y empresas a construir patrimonios sólidos, transparentes y sostenibles.
          </p>
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
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D3B7F]">
            ¿Quieres conocernos en persona?
          </h2>
          <p className="mt-4 text-lg text-[#0D3B7F]/70">Agenda una conversación con nuestro equipo.</p>
          <Link to="/" hash="contact" className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full text-white font-medium animate-gradient" style={{ backgroundImage: "var(--gradient-fresh)", boxShadow: "var(--shadow-deep)" }}>
            Hablemos <ArrowRight className="w-4 h-4" />
          </Link>
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