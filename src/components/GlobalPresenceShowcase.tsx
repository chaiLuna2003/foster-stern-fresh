import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Globe2,
  ArrowRight,
  Building2,
  Users,
  Briefcase,
  Heart,
  Cpu,
  FlaskConical,
  Dna,
  Stethoscope,
  Leaf,
  Landmark,
  Search,
  Microscope,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  DATOS DE EJEMPLO
 *  Reemplaza esta información (empresas, sectores, indicadores, textos)
 *  con los datos reales de cada país. La estructura ya está lista para
 *  conectarse a un CMS o API si lo necesitas más adelante.
 * ─────────────────────────────────────────────────────────────────────────
 */
interface Company {
  name: string;
  category: string;
  icon: ReactNode;
  // Texto ampliado que solo se muestra en el modal "Ver todas".
  description: string;
}

interface Sector {
  name: string;
  icon: ReactNode;
}

interface Indicator {
  icon: ReactNode;
  value: string;
  label: string;
}

interface CountryData {
  code: string; // código ISO usado por flagcdn.com
  name: string;
  city: string; // ciudad que se marca en el mapa
  pin: { x: number; y: number }; // posición del pin en % dentro del mapa
  description: string;
  companies: Company[];
  sectors: Sector[];
  indicators: Indicator[];
}

const countries: CountryData[] = [
  {
    code: "mx",
    name: "México",
    city: "México",
    pin: { x: 22.5, y: 39.2 },
    description:
      "México representa uno de los principales mercados estratégicos del grupo, concentrando empresas enfocadas en innovación, salud y transformación digital.",
    companies: [
      {
        name: "Longev360",
        category: "Medicina regenerativa",
        icon: <Dna className="h-5 w-5" />,
        description:
          "Clínica especializada en terapias de medicina regenerativa y longevidad, con protocolos personalizados de diagnóstico y tratamiento.",
      },
      {
        name: "Foster Stern",
        category: "Consultoría médica",
        icon: <Stethoscope className="h-5 w-5" />,
        description:
          "Consultoría estratégica para instituciones de salud, enfocada en eficiencia operativa, cumplimiento normativo y crecimiento sostenido.",
      },
      {
        name: "StemLife",
        category: "Biotecnología",
        icon: <Leaf className="h-5 w-5" />,
        description:
          "Desarrollo e investigación en biotecnología celular, con foco en soluciones innovadoras para el cuidado de la salud a largo plazo.",
      },
    ],
    sectors: [
      { name: "Salud", icon: <Heart className="h-4 w-4" /> },
      { name: "Tecnología", icon: <Cpu className="h-4 w-4" /> },
      { name: "Biotecnología", icon: <FlaskConical className="h-4 w-4" /> },
    ],
    indicators: [
      { icon: <Building2 className="h-5 w-5" />, value: "8", label: "Empresas" },
      { icon: <Users className="h-5 w-5" />, value: "250+", label: "Colaboradores" },
      { icon: <Briefcase className="h-5 w-5" />, value: "500+", label: "Proyectos" },
    ],
  },
  {
    code: "us",
    name: "Estados Unidos",
    city: "Miami",
    pin: { x: 27.7, y: 35.7 },
    description:
      "Estados Unidos es el puente estratégico del grupo hacia el mercado internacional, con oficinas enfocadas en finanzas, innovación médica y expansión global.",
    companies: [
      {
        name: "Foster Stern Global",
        category: "Consultoría médica",
        icon: <Stethoscope className="h-5 w-5" />,
        description:
          "Oficina corporativa que coordina las operaciones internacionales del grupo y sus alianzas estratégicas en Estados Unidos.",
      },
      {
        name: "Longev360 USA",
        category: "Medicina regenerativa",
        icon: <Dna className="h-5 w-5" />,
        description:
          "Extensión de Longev360 enfocada en pacientes internacionales que buscan tratamientos de medicina regenerativa de vanguardia.",
      },
      {
        name: "NovaHealth Capital",
        category: "Inversión en salud",
        icon: <Landmark className="h-5 w-5" />,
        description:
          "Vehículo de inversión especializado en identificar y financiar oportunidades de crecimiento en el sector salud.",
      },
    ],
    sectors: [
      { name: "Salud", icon: <Heart className="h-4 w-4" /> },
      { name: "Finanzas", icon: <Landmark className="h-4 w-4" /> },
      { name: "Tecnología", icon: <Cpu className="h-4 w-4" /> },
    ],
    indicators: [
      { icon: <Building2 className="h-5 w-5" />, value: "6", label: "Empresas" },
      { icon: <Users className="h-5 w-5" />, value: "140+", label: "Colaboradores" },
      { icon: <Briefcase className="h-5 w-5" />, value: "300+", label: "Proyectos" },
    ],
  },
  {
    code: "co",
    name: "Colombia",
    city: "Bogotá",
    pin: { x: 29.4, y: 47.4 },
    description:
      "Colombia impulsa la expansión del grupo en la región andina, acompañando a empresas e instituciones en su crecimiento y transformación en salud.",
    companies: [
      {
        name: "Foster Stern Andina",
        category: "Consultoría médica",
        icon: <Stethoscope className="h-5 w-5" />,
        description:
          "Oficina regional que acompaña a instituciones de salud colombianas en procesos de mejora operativa y expansión.",
      },
      {
        name: "StemLife Colombia",
        category: "Biotecnología",
        icon: <Leaf className="h-5 w-5" />,
        description:
          "Filial dedicada a la investigación y aplicación clínica de terapias celulares en la región andina.",
      },
      {
        name: "BioSalud Group",
        category: "Investigación clínica",
        icon: <Microscope className="h-5 w-5" />,
        description:
          "Centro de investigación clínica que impulsa estudios y ensayos en alianza con instituciones académicas y hospitalarias.",
      },
    ],
    sectors: [
      { name: "Salud", icon: <Heart className="h-4 w-4" /> },
      { name: "Investigación", icon: <Search className="h-4 w-4" /> },
      { name: "Biotecnología", icon: <FlaskConical className="h-4 w-4" /> },
    ],
    indicators: [
      { icon: <Building2 className="h-5 w-5" />, value: "5", label: "Empresas" },
      { icon: <Users className="h-5 w-5" />, value: "90+", label: "Colaboradores" },
      { icon: <Briefcase className="h-5 w-5" />, value: "180+", label: "Proyectos" },
    ],
  },
  {
    code: "es",
    name: "España",
    city: "Madrid",
    pin: { x: 49, y: 27.5 },
    description:
      "España es la puerta de entrada del grupo al mercado europeo, con empresas enfocadas en consultoría médica y desarrollo de negocio internacional.",
    companies: [
      {
        name: "Foster Stern Europa",
        category: "Consultoría médica",
        icon: <Stethoscope className="h-5 w-5" />,
        description:
          "Oficina europea que asesora a clínicas e instituciones en la adopción de mejores prácticas internacionales.",
      },
      {
        name: "MedBridge Iberia",
        category: "Expansión de negocio",
        icon: <Building2 className="h-5 w-5" />,
        description:
          "Equipo especializado en conectar empresas de salud latinoamericanas con el mercado europeo.",
      },
      {
        name: "Vitalia Health",
        category: "Bienestar y prevención",
        icon: <Heart className="h-5 w-5" />,
        description:
          "Centro enfocado en programas de bienestar, prevención y medicina personalizada para pacientes europeos.",
      },
    ],
    sectors: [
      { name: "Salud", icon: <Heart className="h-4 w-4" /> },
      { name: "Consultoría", icon: <Briefcase className="h-4 w-4" /> },
      { name: "Innovación", icon: <Cpu className="h-4 w-4" /> },
    ],
    indicators: [
      { icon: <Building2 className="h-5 w-5" />, value: "4", label: "Empresas" },
      { icon: <Users className="h-5 w-5" />, value: "60+", label: "Colaboradores" },
      { icon: <Briefcase className="h-5 w-5" />, value: "120+", label: "Proyectos" },
    ],
  },
];

/** Construye una curva punteada que pasa por todos los pines del mapa. */
function buildRoutePath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  const [first, ...rest] = points;
  let d = `M ${first.x} ${first.y}`;
  rest.forEach((p, i) => {
    const prev = points[i];
    const midX = (prev.x + p.x) / 2;
    d += ` Q ${midX} ${prev.y}, ${p.x} ${p.y}`;
  });
  return d;
}

// Orden geográfico (no el orden de los botones) para trazar la ruta del mapa.
const routeOrder = ["es", "us", "mx", "co"];
const routePoints = routeOrder.map((code) => countries.find((c) => c.code === code)!.pin);
const routePath = buildRoutePath(routePoints);

export function GlobalPresenceShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = countries[activeIndex];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Cuando se cambia de país, reiniciamos el carrusel de empresas al inicio.
  useEffect(() => {
    emblaApi?.scrollTo(0);
  }, [activeIndex, emblaApi]);

  return (
    <section id="presencia-global" className="relative overflow-hidden bg-[#F5F5F5] py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* ───────────────────────── IZQUIERDA: encabezado + mapa ───────────────────────── */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#238CCC]">
              Presencia Global
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#0D3B7F] md:text-5xl">
              Operaciones conectadas
              <br />
              alrededor del mundo.
            </h2>

            <p className="mt-5 max-w-md leading-relaxed text-[#0D3B7F]/60">
              Coordinamos equipos y operaciones internacionales con presencia estratégica en
              múltiples regiones.
            </p>

            {/* MAPA */}
            <div className="mt-8 rounded-3xl border border-black/5 bg-white p-4 shadow-[0_10px_40px_rgba(13,59,127,0.06)] md:p-6">
              <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-[#fafafa]">
                <img
                  src="/images/mapWorld.png"
                  alt="Mapa mundial"
                  className="absolute inset-0 h-full w-full object-contain opacity-[0.15]"
                />

                {/* ruta punteada entre oficinas */}
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <path
                    d={routePath}
                    fill="none"
                    stroke="#238CCC"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                </svg>

                {/* pines */}
                {countries.map((c, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      aria-label={`Ver ${c.name}`}
                      className="group absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${c.pin.x}%`, top: `${c.pin.y}%` }}
                    >
                      <div className="relative flex flex-col items-center">
                        <span className="relative flex items-center justify-center">
                          {isActive && (
                            <span className="absolute inline-flex h-6 w-6 animate-ping rounded-full bg-[#238CCC]/40" />
                          )}
                          <span
                            className={cn(
                              "relative rounded-full border-2 border-[#238CCC] bg-white transition-all duration-300",
                              isActive ? "h-4 w-4 scale-110 bg-[#238CCC]" : "h-2.5 w-2.5",
                            )}
                          />
                        </span>
                        <span
                          className={cn(
                            "mt-1.5 whitespace-nowrap text-[11px] font-medium transition-colors duration-300",
                            isActive
                              ? "font-semibold text-[#0D3B7F]"
                              : "text-[#0D3B7F]/45 group-hover:text-[#0D3B7F]",
                          )}
                        >
                          {c.city}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {/* stat inferior */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium text-[#0D3B7F]/70">
                  <Globe2 className="h-4 w-4 text-[#238CCC]" />
                  <span>{countries.length} países</span>
                  <span className="hidden text-[#0D3B7F]/40 sm:inline">·</span>
                  <span className="hidden sm:inline">Presencia internacional</span>
                </div>
              </div>
            </div>

            {/* SELECTOR DE PAÍSES */}
            <div className="mt-5 flex flex-wrap gap-3">
              {countries.map((c, idx) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
                    idx === activeIndex
                      ? "border-[#0D3B7F] bg-[#0D3B7F] text-white"
                      : "border-black/10 bg-white text-[#0D3B7F]/70 hover:border-[#238CCC]",
                  )}
                >
                  <img
                    src={`https://flagcdn.com/w40/${c.code}.png`}
                    alt={c.name}
                    className="h-3.5 w-5 rounded-[3px] object-cover"
                  />
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* ───────────────────────── DERECHA: tarjeta del país activo ───────────────────────── */}
          <div
            key={active.code}
            className="animate-rise rounded-3xl border border-black/5 bg-white p-6 shadow-[0_10px_40px_rgba(13,59,127,0.06)] md:p-8"
          >
            {/* encabezado */}
            <div className="flex items-center gap-3">
              <img
                src={`https://flagcdn.com/w80/${active.code}.png`}
                alt={active.name}
                className="h-9 w-12 rounded-md object-cover shadow-sm"
              />
              <h3 className="text-2xl font-bold text-[#0D3B7F]">{active.name}</h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#0D3B7F]/70">{active.description}</p>

            {/* empresas */}
            <div className="mt-7">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[#0D3B7F]">Empresas</h4>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="flex items-center gap-1 text-sm font-medium text-[#238CCC] transition-colors hover:text-[#0D3B7F]"
                    >
                      Ver todas
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-h-[85vh] max-w-2xl gap-0 overflow-y-auto rounded-3xl border-none bg-white p-0">
                    <div className="p-6 md:p-8">
                      <DialogHeader className="text-left">
                        <div className="flex items-center gap-3">
                          <img
                            src={`https://flagcdn.com/w80/${active.code}.png`}
                            alt={active.name}
                            className="h-8 w-11 rounded-md object-cover shadow-sm"
                          />
                          <DialogTitle className="text-xl font-bold text-[#0D3B7F]">
                            Empresas en {active.name}
                          </DialogTitle>
                        </div>
                        <DialogDescription className="text-sm leading-relaxed text-[#0D3B7F]/70">
                          {active.description}
                        </DialogDescription>
                      </DialogHeader>

                      {/* listado completo de empresas */}
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {active.companies.map((company) => (
                          <div
                            key={company.name}
                            className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-[#fafafa] p-4"
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0D3B7F] text-white">
                              {company.icon}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-[#0D3B7F]">
                                {company.name}
                              </div>
                              <div className="text-xs font-medium text-[#238CCC]">
                                {company.category}
                              </div>
                              <p className="mt-2 text-xs leading-relaxed text-[#0D3B7F]/60">
                                {company.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* sectores e indicadores, para contexto completo del país */}
                      <div className="mt-7 grid gap-6 sm:grid-cols-2">
                        <div>
                          <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0D3B7F]/70">
                            Sectores
                          </h5>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {active.sectors.map((sector) => (
                              <span
                                key={sector.name}
                                className="flex items-center gap-2 rounded-full bg-[#238CCC]/10 px-3 py-1.5 text-xs font-medium text-[#0D3B7F]"
                              >
                                {sector.icon}
                                {sector.name}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0D3B7F]/70">
                            Indicadores clave
                          </h5>
                          <div className="mt-3 grid grid-cols-3 gap-2">
                            {active.indicators.map((indicator) => (
                              <div
                                key={indicator.label}
                                className="rounded-xl border border-black/5 bg-white p-3"
                              >
                                <div className="text-base font-bold text-[#0D3B7F]">
                                  {indicator.value}
                                </div>
                                <div className="text-[10px] text-[#0D3B7F]/55">
                                  {indicator.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="mt-4 overflow-hidden" ref={emblaRef}>
                <div className="-ml-3 flex">
                  {active.companies.map((company) => (
                    <div key={company.name} className="basis-[78%] pl-3 sm:basis-1/2 lg:basis-1/3">
                      <div className="flex h-full flex-col gap-3 rounded-2xl border border-black/5 bg-[#fafafa] p-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0D3B7F] text-white">
                          {company.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0D3B7F]">{company.name}</div>
                          <div className="text-xs text-[#0D3B7F]/55">{company.category}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* dots */}
              {scrollSnaps.length > 1 && (
                <div className="mt-4 flex justify-center gap-1.5">
                  {scrollSnaps.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Ir a la diapositiva ${idx + 1}`}
                      onClick={() => emblaApi?.scrollTo(idx)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        idx === selectedSlide ? "w-5 bg-[#0D3B7F]" : "w-1.5 bg-[#0D3B7F]/20",
                      )}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* sectores */}
            <div className="mt-7">
              <h4 className="text-sm font-semibold text-[#0D3B7F]">Sectores</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.sectors.map((sector) => (
                  <span
                    key={sector.name}
                    className="flex items-center gap-2 rounded-full bg-[#238CCC]/10 px-4 py-2 text-sm font-medium text-[#0D3B7F]"
                  >
                    {sector.icon}
                    {sector.name}
                  </span>
                ))}
              </div>
            </div>

            {/* indicadores clave */}
            <div className="mt-7">
              <h4 className="text-sm font-semibold text-[#0D3B7F]">Indicadores clave</h4>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {active.indicators.map((indicator) => (
                  <div
                    key={indicator.label}
                    className="rounded-2xl border border-black/5 bg-[#fafafa] p-4"
                  >
                    <div className="text-[#238CCC]">{indicator.icon}</div>
                    <div className="mt-2 text-xl font-bold text-[#0D3B7F]">{indicator.value}</div>
                    <div className="text-xs text-[#0D3B7F]/55">{indicator.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#0D3B7F] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a2e63]"
            >
              Conoce más sobre {active.name}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalPresenceShowcase;