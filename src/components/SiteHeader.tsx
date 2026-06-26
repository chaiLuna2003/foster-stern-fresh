import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ padding: "15px" }}>
      <div
        className="mx-auto max-w-7xl backdrop-blur-xl bg-white/75 border border-[#238CCC]/15 flex items-center justify-between px-6 h-16"
        style={{ borderRadius: "20px", boxShadow: "0 10px 30px -15px rgba(13,59,127,0.25)" }}
      >
        <Link to="/" className="flex items-center gap-2.5">
          <span
            className="relative grid place-items-center w-9 h-9 rounded-xl text-white font-bold"
            style={{ background: "var(--gradient-fresh)" }}
          >
            FS
            <span
              className="absolute inset-0 rounded-xl animate-pulse-ring"
              style={{ background: "var(--gradient-fresh)" }}
            />
          </span>
          <span className="font-semibold tracking-tight text-[#0D3B7F]">Foster Stern Group</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[#0D3B7F]/80">
          <Link to="/" className="hover:text-[#238CCC] transition" activeOptions={{ exact: true }} activeProps={{ className: "text-[#238CCC] font-semibold" }}>Inicio</Link>
          <Link to="/nosotros" className="hover:text-[#238CCC] transition" activeProps={{ className: "text-[#238CCC] font-semibold" }}>Nosotros</Link>
          <Link to="/" hash="services" className="hover:text-[#238CCC] transition">Servicios</Link>
          <Link to="/" hash="testimonials" className="hover:text-[#238CCC] transition">Clientes</Link>
          <Link to="/" hash="contact" className="hover:text-[#238CCC] transition">Contacto</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium animate-gradient"
            style={{ backgroundImage: "var(--gradient-fresh)", boxShadow: "var(--shadow-fresh)" }}
          >
            Hablemos <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-10 h-10 grid place-items-center rounded-xl text-[#0D3B7F] hover:bg-[#238CCC]/10 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - drops from top */}
      {open && (
        <div
          className="md:hidden mx-auto max-w-7xl mt-2 bg-white/95 backdrop-blur-xl border border-[#238CCC]/15 overflow-hidden menu-drop"
          style={{ borderRadius: "20px", boxShadow: "var(--shadow-fresh)", padding: "20px" }}
        >
          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <li key={l.label} className="menu-item-in" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-[#0D3B7F] font-medium hover:bg-[#238CCC]/8 transition"
                >
                  <span>{l.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#238CCC]" />
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
            Hablemos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}