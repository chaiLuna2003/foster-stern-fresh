import { ArrowUpRight, Check } from "lucide-react";
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
 *  Reemplaza el "image" de cada servicio por el archivo real ubicado en
 *  /public/images (ruta pública: "/images/nombre-del-archivo.png").
 *  El resto de campos alimentan tanto la card como el modal.
 * ─────────────────────────────────────────────────────────────────────────
 */
interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  modal: {
    description: string;
    features: string[];
  };
}

const services: ServiceCardData[] = [
  {
    id: "medicina-clinica",
    title: "Medicina Clínica",
    description: "Atención médica especializada y de alta calidad.",
    image: "/images/Medicina-Clinica.webp",
    modal: {
      description:
        "Equipos clínicos multidisciplinarios que acompañan cada caso con protocolos rigurosos, tecnología de diagnóstico actualizada y seguimiento cercano del paciente en todas las etapas del tratamiento.",
      features: [
        "Diagnóstico y seguimiento personalizado",
        "Equipo médico multidisciplinario",
        "Protocolos clínicos actualizados",
      ],
    },
  },
  {
    id: "medicina-regenerativa",
    title: "Medicina Regenerativa",
    description: "Restauración de la salud celular y tejidos mediante terapias innovadoras.",
    image: "/images/Medicina-regenerativa.webp",
    modal: {
      description:
        "Terapias de vanguardia orientadas a la reparación de tejidos y la recuperación funcional, combinando investigación científica con un enfoque centrado en resultados sostenibles a largo plazo.",
      features: [
        "Terapias celulares avanzadas",
        "Enfoque en recuperación funcional",
        "Respaldo de investigación científica",
      ],
    },
  },
  {
    id: "investigacion-medica",
    title: "Investigación Médica",
    description: "Desarrollo científico y protocolos de vanguardia para la medicina del futuro.",
    image: "/images/Investigacion-medica.webp",
    modal: {
      description:
        "Programas de investigación que traducen hallazgos científicos en protocolos aplicables, impulsando innovación médica con estándares internacionales de calidad y ética.",
      features: [
        "Estudios con estándares internacionales",
        "Traducción de hallazgos a la práctica clínica",
        "Colaboración con instituciones científicas",
      ],
    },
  },
  {
    id: "manufactura-distribucion",
    title: "Manufactura y Distribución",
    description: "Producción y logística global de insumos médicos confiables.",
    image: "/images/Manufacturacion.webp",
    modal: {
      description:
        "Infraestructura de manufactura y una red logística global que garantiza trazabilidad, calidad certificada y entregas puntuales de insumos médicos en cada región donde operamos.",
      features: [
        "Trazabilidad completa de insumos",
        "Red logística con alcance global",
        "Calidad certificada en cada lote",
      ],
    },
  },
  {
    id: "inmunologia-alergias",
    title: "Inmunología y Alergias",
    description: "Diagnóstico avanzado y tratamientos para el sistema inmunológico.",
    image: "/images/Imnunologia.webp",
    modal: {
      description:
        "Diagnóstico de precisión y planes de tratamiento individualizados para condiciones inmunológicas y alérgicas, apoyados en tecnología especializada y monitoreo continuo.",
      features: [
        "Diagnóstico de precisión",
        "Planes de tratamiento individualizados",
        "Monitoreo continuo del paciente",
      ],
    },
  },
  {
    id: "innovacion-salud",
    title: "Innovación en Salud",
    description: "Creación de nuevos proyectos y soluciones médicas de alto impacto.",
    image: "/images/Innovacion.webp",
    modal: {
      description:
        "Un área dedicada a explorar nuevas soluciones médicas, desde alianzas estratégicas hasta el desarrollo de proyectos que amplían nuestro impacto en la salud global.",
      features: [
        "Desarrollo de nuevos proyectos",
        "Alianzas estratégicas de alto impacto",
        "Visión orientada al futuro de la salud",
      ],
    },
  },
];

interface ServiceCardProps {
  service: ServiceCardData;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Dialog>
      <div
      
        className="group relative h-[450px] overflow-hidden rounded-[1.75rem] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        style={{
          animation: `rise .8s cubic-bezier(.2,.7,.2,1) ${index * 0.1}s both`,
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url('${service.image}')` }}
          role="img"
          aria-label={service.title}
        />

        {/* Soft dark wash so the image stays readable, no color tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/0" />

        {/* Index chip, top corner */}
        <span className="absolute right-5 top-5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-white/80 backdrop-blur-md">
          0{index + 1}
        </span>

        {/* Content */}
        <div className="relative flex h-full flex-col justify-end p-4">
          {/* Glass panel */}
          <div className="rounded-2xl border border-white/25 bg-white/10 p-5 shadow-lg backdrop-blur-xl">
            <h3 className="text-2xl font-bold leading-tight text-white drop-shadow-sm">
              {service.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-white/85">{service.description}</p>

            <DialogTrigger asChild>
              <button
                type="button"
                className={cn(
                  "mt-5 inline-flex w-fit items-center gap-2 rounded-full",
                  "border border-[#238CCC]",
                  "bg-[#238CCC] px-5 py-2.5 text-sm font-semibold text-white",
                  "transition-all duration-300",
                  "hover:border-[#0D3B7F] hover:bg-[#0D3B7F] hover:text-white",
                )}
              >
                Ver más
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </DialogTrigger>
          </div>
        </div>
      </div>

      <DialogContent className="max-w-lg overflow-hidden rounded-3xl border-none p-0">
        <div
          className="h-40 w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="p-6 pt-5">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#0D3B7F]">{service.title}</DialogTitle>
            <DialogDescription className="pt-2 text-base leading-relaxed text-[#0D3B7F]/75">
              {service.modal.description}
            </DialogDescription>
          </DialogHeader>

          <ul className="mt-5 space-y-3">
            {service.modal.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-[#0D3B7F]/85">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#238CCC]/15">
                  <Check className="h-3.5 w-3.5 text-[#238CCC]" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0D3B7F] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#238CCC]"
          >
            Solicitar información
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Grid 3 × 2 (3 columnas, 2 filas = 6 servicios: 3 arriba, 3 abajo) de
 * cards con imagen de fondo y panel glassmorphism. Incluye encabezado de
 * sección (eyebrow + título + descripción). Cada card solo renderiza
 * título, descripción y el botón que abre el modal con el detalle del
 * servicio.
 */
export function ServicesShowcaseGrid() {
  return (
    <div
  className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8"
  id="services"
>
      {/* Header de la sección */}
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#238CCC]">
          Nuestros servicios
        </span>

        <h2 className="mt-3 text-4xl font-bold leading-tight text-[#0D3B7F] md:text-5xl">
          Soluciones Médicas Especializadas
        </h2>

        <p className="mt-4 text-base leading-relaxed text-[#0D3B7F]/70 md:text-lg">
          Una gama integral de servicios de vanguardia, diseñados para cubrir múltiples áreas del
          sector salud con los más altos estándares de calidad.
        </p>
      </div>

      {/* Grid de cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
