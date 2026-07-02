import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links: { label: string; to: string; hash?: string }[] = [
  { label: "Inicio", to: "/" },
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

  const pathname = useRouterState({
    select: (s) => s.location.pathname + s.location.hash,
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div
        className="
          mx-auto
          max-w-7xl
          h-[88px]
          px-8
          lg:px-12
          flex
          items-center
          justify-between
          border
          border-white/10
          bg-white/80
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:shadow-[0_20px_60px_-20px_rgba(13,59,127,0.35)]
        "
        style={{
          borderRadius: "14px",
          boxShadow: "0 12px 40px -20px rgba(13,59,127,0.25)",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center brand-zoom-in"
        >
          <img
            src="/images/LogoMain1.png"
            alt="Foster Stern Group"
            className="
              h-20
              md:h-24
              w-auto
              object-contain
              transition-all
              duration-500
              ease-out
              group-hover:scale-105
            "
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="
                nav-corporate
                text-[15px]
                uppercase
                tracking-[0.12em]
                font-semibold
                text-[#0D3B7F]
                relative
                transition-all
                duration-300
                hover:scale-110
                hover:text-[#238CCC]
              "
              style={{
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            hash="contact"
            className="
              hidden
              md:inline-flex
              items-center
              gap-2
              px-6
              py-3
              text-white
              text-sm
              uppercase
              tracking-[0.1em]
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:-translate-y-0.5
            "
            style={{
              borderRadius: "12px",
              backgroundImage: "var(--gradient-fresh)",
              boxShadow: "0 15px 35px -15px rgba(35,140,204,0.55)",
            }}
          >
            Contáctanos
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* MOBILE BUTTON */}
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="
              md:hidden
              w-12
              h-12
              grid
              place-items-center
              border
              border-[#238CCC]/15
              bg-white
              text-[#0D3B7F]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#238CCC]/5
            "
            style={{
              borderRadius: "12px",
            }}
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="
            md:hidden
            mx-auto
            max-w-7xl
            mt-3
            bg-white/95
            backdrop-blur-2xl
            border
            border-[#238CCC]/10
            overflow-hidden
            menu-drop
            p-5
          "
          style={{
            borderRadius: "14px",
            boxShadow: "0 20px 50px -25px rgba(13,59,127,0.35)",
          }}
        >
          <ul className="flex flex-col gap-2">
            {links.map((l, i) => (
              <li
                key={l.label}
                className="menu-item-in"
                style={{
                  animationDelay: `${0.05 + i * 0.05}s`,
                }}
              >
                <Link
                  to={l.to}
                  hash={l.hash}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpen(false)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    px-4
                    py-4
                    text-[#0D3B7F]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    transition-all
                    duration-300
                    hover:bg-[#238CCC]/5
                    hover:scale-[1.02]
                  "
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  <span>{l.label}</span>

                  <ArrowRight
                    className="
                      w-4
                      h-4
                      text-[#238CCC]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/"
            hash="contact"
            onClick={() => setOpen(false)}
            className="
              mt-5
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              px-5
              py-3.5
              text-white
              text-sm
              uppercase
              tracking-[0.08em]
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              menu-item-in
            "
            style={{
              borderRadius: "12px",
              backgroundImage: "var(--gradient-fresh)",
              boxShadow: "0 15px 35px -15px rgba(35,140,204,0.45)",
              animationDelay: `${0.05 + links.length * 0.05}s`,
            }}
          >
            Contacto
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}