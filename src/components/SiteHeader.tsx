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

const logos = [
  
  "/images/FSGRD.svg",
    "/images/FSGMX.svg",
    "/images/FSGCO.svg",
    "/images/FSGESP.svg",
  
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const toggleRef = useRef<HTMLButtonElement | null>(null);
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

  return (
    <header className="fixed top-0 inset-x-0 z-50">
  {/* TOP MARQUEE */}
  
  <div className="relative overflow-hidden border-b border-white/10 bg-[#071120]">
  {/* glow */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(35,140,204,0.08),transparent_70%)]" />

  {/* fade sides */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#071120] to-transparent z-10" />
  <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#071120] to-transparent z-10" />

  <div className="relative flex overflow-hidden py-4">
    <div className="marquee-track flex items-center gap-12 pr-12">
      {[...logos, ...logos].map((logo, index) => (
        <div
          key={`first-${index}`}
          className="
            flex
            items-center
            justify-center
            shrink-0
            opacity-80
            hover:opacity-100
            transition-all
            duration-300
          "
        >
          <img
            src={logo}
            alt="Brand Logo"
            className="
              h-8
              md:h-10
              w-auto
              object-contain
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>
      ))}
    </div>

    <div
      className="
        marquee-track
        flex
        items-center
        gap-12
        pr-12
      "
      aria-hidden="true"
    >
      {[...logos, ...logos].map((logo, index) => (
        <div
          key={`second-${index}`}
          className="
            flex
            items-center
            justify-center
            shrink-0
            opacity-80
            hover:opacity-100
            transition-all
            duration-300
          "
        >
          <img
            src={logo}
            alt=""
            className="
              h-8
              md:h-10
              w-auto
              object-contain
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>
      ))}
    </div>
  </div>
</div>

  {/* MAIN HEADER */}
  <div className="bg-white/90 backdrop-blur-md border-b border-black/5">
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
            h-18
            md:h-20
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
            text-[16px]
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
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
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