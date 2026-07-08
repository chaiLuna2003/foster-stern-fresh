import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from "lucide-react";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  DATOS DE EJEMPLO
 *  Reemplaza el correo, teléfono, dirección y las URLs de redes sociales
 *  por los datos reales de la empresa.
 * ─────────────────────────────────────────────────────────────────────────
 */
const navLinks: { label: string; hash?: string }[] = [
  { label: "Inicio" },
  { label: "Quiénes somos", hash: "about" },
  { label: "Servicios", hash: "services" },
  { label: "Presencia global", hash: "presence" },
  { label: "Clientes", hash: "testimonials" },
  { label: "Contacto", hash: "contact" },
];

// Mismo listado y códigos de país usados en la sección "Presencia Internacional".
// México se agrega al inicio como sede principal.
const countries: { code: string; name: string }[] = [
  { code: "mx", name: "México" },
  { code: "us", name: "Estados Unidos" },
  { code: "pt", name: "Portugal" },
  { code: "cl", name: "Chile" },
  { code: "pa", name: "Panamá" },
  { code: "gt", name: "Guatemala" },
  { code: "br", name: "Brasil" },
  { code: "pe", name: "Perú" },
  { code: "ec", name: "Ecuador" },
  { code: "bo", name: "Bolivia" },
  { code: "ve", name: "Venezuela" },
  { code: "pr", name: "Puerto Rico" },
];

const legalLinks = [
  { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
];

// Reemplaza estas URLs por los perfiles reales de la empresa.
const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/foster-stern-group",
    icon: <Linkedin className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fosterstern",
    icon: <Instagram className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/fosterstern",
    icon: <Facebook className="h-4 w-4" aria-hidden="true" />,
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#0D3B7F]/10 bg-[#f5f5f5]">
      {/* glow decorativo, consistente con el resto del sitio */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[320px] w-[320px] opacity-10"
        style={{ background: "var(--gradient-fresh)", filter: "blur(90px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* MARCA */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/images/LogoMain1.png"
                alt="Foster Stern Group"
                className="h-14 w-auto object-contain"
                draggable={false}
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#0D3B7F]/60">
              Más de 25 años impulsando instituciones más sólidas y pacientes más sanos, con
              presencia estratégica en México y en los principales mercados de América y Europa.
            </p>

            <ul className="mt-6 flex items-center gap-3" aria-label="Redes sociales">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0D3B7F]/15 text-[#0D3B7F] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#0D3B7F] hover:text-white focus-visible:ring-2 focus-visible:ring-[#238CCC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f5]"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NAVEGACIÓN */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D3B7F]">
              Navegación
            </h4>

            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to="/"
                    hash={link.hash}
                    className="text-sm text-[#0D3B7F]/65 transition-colors duration-300 hover:text-[#238CCC]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D3B7F]">
              Contacto
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-[#0D3B7F]/65">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#238CCC]" />
                <a href="mailto:contacto@fosterstern.com" className="hover:text-[#238CCC]">
                  contacto@fosterstern.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#238CCC]" />
                <a href="tel:+525500000000" className="hover:text-[#238CCC]">
                  +52 55 0000 0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#238CCC]" />
                <span>Polanco, Ciudad de México</span>
              </li>
            </ul>
          </div>

          {/* PRESENCIA INTERNACIONAL */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0D3B7F]">
              Presencia internacional
            </h4>

            <div className="mt-5 flex flex-wrap gap-2">
              {countries.map((country) => (
                <span
                  key={country.code}
                  title={country.name}
                  className="flex items-center gap-1.5 rounded-full border border-[#0D3B7F]/10 bg-white px-2.5 py-1.5 text-xs text-[#0D3B7F]/70"
                >
                  <img
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    alt=""
                    className="h-3 w-4 rounded-[2px] object-cover"
                  />
                  {country.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="mt-14 h-px w-full bg-[#0D3B7F]/10" />

        {/* BARRA INFERIOR */}
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs text-[#0D3B7F]/45">
            © {year} Foster Stern Group. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-[#0D3B7F]/50 transition-colors duration-300 hover:text-[#238CCC]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;