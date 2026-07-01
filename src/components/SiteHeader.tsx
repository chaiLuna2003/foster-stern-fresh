import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links: { label: string; to: string; hash?: string }[] = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Quiénes somos", to: "/", hash: "about" },
  { label: "Valores", to: "/", hash: "values" },
  { label: "Servicios", to: "/", hash: "services" },
  { label: "Clientes", to: "/", hash: "testimonials" },
  { label: "Contacto", to: "/", hash: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname + s.location.hash });

  // Close on route/hash change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus management + Escape to close
  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => firstLinkRef.current?.focus(), 60);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => {
        window.clearTimeout(t);
        document.removeEventListener("keydown", onKey);
      };
    } else {
      toggleRef.current?.focus({ preventScroll: true });
    }
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ padding: "15px" }}>
      <div
        className="mx-auto max-w-7xl backdrop-blur-xl bg-white/75 border border-[#238CCC]/15 flex items-center justify-between px-12 py-10 h-16 transition-shadow duration-500 hover:shadow-[0_20px_50px_-20px_rgba(35,140,204,0.45)]"
        style={{ borderRadius: "20px", boxShadow: "0 10px 30px -15px rgba(13,59,127,0.25)" }}
      >
        <Link to="/" className="group flex items-center gap-2.5 brand-zoom-in">
<img
  src="/images/LogoMain1.png"
  alt="Foster Stern Group"
  className="h-16 w-auto transition-transform duration-500 ease-out group-hover:scale-105"
/>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-lg text-[#0D3B7F]/80">
          <Link to="/" className="nav-zoom" activeOptions={{ exact: true }} activeProps={{ className: "nav-zoom is-active" }}>Inicio</Link>
          <Link to="/nosotros" className="nav-zoom" activeProps={{ className: "nav-zoom is-active" }}>Nosotros</Link>
          <Link to="/" hash="services" className="nav-zoom">Servicios</Link>
          <Link to="/" hash="testimonials" className="nav-zoom">Clientes</Link>
          <Link to="/" hash="contact" className="nav-zoom">Contacto</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="contact"
            className="group hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-lg font-medium animate-gradient transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--gradient-fresh)", boxShadow: "var(--shadow-fresh)" }}
          >
            Contactanos
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-11 h-11 grid place-items-center rounded-xl text-[#0D3B7F] hover:bg-[#238CCC]/10 transition-transform duration-300 hover:scale-110 active:scale-95"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - drops from top */}
      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="md:hidden mx-auto max-w-7xl mt-2 bg-white/95 backdrop-blur-xl border border-[#238CCC]/15 overflow-hidden menu-drop"
          style={{ borderRadius: "20px", boxShadow: "var(--shadow-fresh)", padding: "20px" }}
        >
          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <li key={l.label} className="menu-item-in" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between px-4 py-3.5 rounded-2xl text-[#0D3B7F] font-medium hover:bg-[#238CCC]/8 transition-all duration-300 hover:pl-6"
                >
                  <span>{l.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#238CCC] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/"
            hash="contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-full text-white text-sm font-medium animate-gradient menu-item-in"
            style={{ backgroundImage: "var(--gradient-fresh)", boxShadow: "var(--shadow-fresh)", animationDelay: `${0.05 + links.length * 0.05}s` }}
          >
            Contacto <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}