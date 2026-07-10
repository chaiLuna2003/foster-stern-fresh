import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links: { label: string; to: string; hash?: string }[] = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes somos", to: "/", hash: "about" },
  { label: "Valores", to: "/", hash: "values" },
  { label: "Servicios", to: "/", hash: "services" },
  { label: "Clientes", to: "/", hash: "testimonials" },
];

const logos = ["/images/FSGRD.svg", "/images/FSGMX.svg", "/images/FSGCO.svg", "/images/FSGESP.svg"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const hideTimeout = useRef<number | null>(null);

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
      const t = window.setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 60);

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };

      document.addEventListener("keydown", onKey);

      return () => {
        window.clearTimeout(t);
        document.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  useEffect(() => {
  const handleScroll = () => {
    // Mostrar inmediatamente al hacer scroll
    setShowHeader(true);

    // Reiniciar temporizador
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }

    // Esperar 1 segundo sin scroll
    hideTimeout.current = window.setTimeout(() => {
      setShowHeader(false);
    }, 1000);
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  // Iniciar el contador al cargar la página
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);

    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
  };
}, []);

  return (
  <header
  className={`
    fixed
    inset-x-0
    top-0
    z-50
    transform-gpu
    transition-all
    duration-500
    ease-[cubic-bezier(.22,1,.36,1)]
    ${
      showHeader
        ? "opacity-100 translate-y-0 blur-0 scale-100 pointer-events-auto"
        : "opacity-0 -translate-y-6 blur-sm scale-[0.98] pointer-events-none"
    }
  `}
>

      {/* TOP MARQUEE */}
      <div className="relative overflow-hidden bg-[#FFF]">
        <div className="header-marquee py-3">
          <div className="header-marquee-content">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center shrink-0 px-10">
                <img
                  src={logo}
                  alt=""
                  draggable={false}
                  className="
                            h-10
                            w-auto
                            object-contain
                            opacity-80
                            transition-all
                            duration-300
                            hover:opacity-100
                            hover:scale-105
                            select-none
                        "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div
        className="bg-[#FFF]"
        style={{
          boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(15,23,42,.06)",
        }}
      >
        <div
          className="
        relative
        h-[88px]
        w-full
        px-6
        md:px-10
        lg:px-16
        flex
        items-center
        justify-between
      "
        >
          {/* LOGO */}
          <Link
            to="/"
            className="
          group
          flex
          items-center
          shrink-0
        "
          >
            <img
              src="/images/LogoMain1.png"
              alt="Foster Stern Group"
              className="
            h-20
            md:h-22
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
          <nav
            className="
          hidden
          md:flex
          items-center
          gap-10
          absolute
          left-1/2
          -translate-x-1/2
        "
          >
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className="
              relative
              text-[16px]
              font-medium
              text-black/80
              transition-all
              duration-300
              ease-out
              hover:text-[#238CCC]
              hover:scale-105
            "
              >
                <span
                  className="
                relative
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[1px]
                after:w-0
                after:bg-[#238CCC]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5 ml-auto">
            <Link
              to="/"
              hash="contact"
              className="
            group
            hidden
            md:inline-flex
            items-center
            gap-2
            px-5
            py-2.5
            text-white
            text-[14px]
            uppercase
            tracking-[0.08em]
            font-semibold
            transition-all
            duration-300
            ease-out
            hover:scale-105
            hover:-translate-y-0.5
          "
              style={{
                borderRadius: "12px",
                backgroundImage: "var(--gradient-fresh)",
                boxShadow: "0 10px 30px -12px rgba(35,140,204,0.45)",
              }}
            >
              Contáctanos
              <ArrowRight
                className="
              w-4
              h-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
              />
            </Link>

            <button
              ref={toggleRef}
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className="
            md:hidden
            w-11
            h-11
            grid
            place-items-center
            text-black
            transition-all
            duration-300
            hover:scale-110
          "
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          id="mobile-menu"
          className="
        md:hidden
        bg-white
        px-6
        py-6
        border-t
        border-black/5
      "
        >
          <ul className="flex flex-col gap-5">
            {links.map((l, i) => (
              <li key={l.label}>
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
                text-[15px]
                font-medium
                text-black/80
                transition-all
                duration-300
                hover:text-[#238CCC]
              "
                >
                  <span>{l.label}</span>

                  <ArrowRight
                    className="
                  w-4
                  h-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
