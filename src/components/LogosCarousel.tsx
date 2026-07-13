import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

function LogosCarousel() {
  const companies = [
    {
      logo: "/images/FSGRD.svg",
      image: "/images/Imnunologia.png",
      title: "Foster Stern República Dominicana",
      description:
        "Especialistas en manufactura, distribución y comercialización de productos médicos para Latinoamérica. Contamos con procesos certificados que garantizan calidad, trazabilidad y cumplimiento internacional.",
      features: [
        "Manufactura certificada",
        "Distribución internacional",
        "Control de calidad",
      ],
      buttonText: "Visitar sitio web",
      link: "https://google.com",
    },

    {
      logo: "/images/FSGMX.svg",
      image: "/images/FSGMX.svg",
      title: "Foster Stern México",
      description:
        "Centro logístico y operativo encargado de abastecer hospitales, clínicas y distribuidores de dispositivos médicos en México.",
      features: [
        "Cobertura nacional",
        "Entrega inmediata",
        "Inventario permanente",
      ],
      buttonText: "Más información",
      link: "https://google.com",
    },

    {
      logo: "/images/FSGCO.svg",
      image: "/images/companies/fsg-co.jpg",
      title: "Foster Stern Colombia",
      description:
        "Operaciones comerciales y logísticas para Colombia con presencia en las principales ciudades del país.",
      features: [
        "Distribución médica",
        "Logística especializada",
        "Cobertura nacional",
      ],
      buttonText: "Conocer más",
      link: "https://google.com",
    },

    {
      logo: "/images/FSGESP.svg",
      image: "/images/companies/fsg-es.jpg",
      title: "Foster Stern España",
      description:
        "Nuestra sede europea fortalece la cadena internacional de suministro y comercialización de productos médicos.",
      features: [
        "Mercado europeo",
        "Importación y exportación",
        "Normativas CE",
      ],
      buttonText: "Visitar empresa",
      link: "https://google.com",
    },

    {
      logo: "/images/MiamiInstitute.svg",
      image: "/images/companies/miami.jpg",
      title: "Miami Institute",
      description:
        "Instituto enfocado en investigación, innovación y capacitación para profesionales de la salud.",
      features: [
        "Investigación",
        "Capacitación médica",
        "Innovación tecnológica",
      ],
      buttonText: "Conocer instituto",
      link: "https://google.com",
    },

    {
      logo: "/images/Lamed.svg",
      image: "/images/companies/lamed.jpg",
      title: "Lamed",
      description:
        "Empresa especializada en soluciones médicas con una amplia red de distribución para instituciones de salud.",
      features: [
        "Equipo médico",
        "Distribución nacional",
        "Soporte especializado",
      ],
      buttonText: "Visitar empresa",
      link: "https://google.com",
    },
  ];

  const row = [...companies, ...companies];

  const [selectedCompany, setSelectedCompany] = useState<
    (typeof companies)[0] | null
  >(null);

  return (
    <>
      <section
        className="relative overflow-hidden border-y border-[#0D3B7F]/10 py-20"
        style={{ background: "#f5f5f5" }}
      >
        {/* HEADER */}

        <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D3B7F]">
            Empresas afiliadas a nosotros
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#0D3B7F] md:text-5xl">
            Construimos relaciones sólidas.
          </h2>
        </div>

        {/* CAROUSEL */}

        <div className="relative">
          <div
            className="marquee-track flex w-max items-center gap-8"
          >
            {row.map((company, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCompany(company)}
                className="
                flex
                h-[130px]
                w-[260px]
                shrink-0
                items-center
                justify-center
                rounded-3xl
                border
                border-[#0D3B7F]/10
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#238CCC]
                hover:shadow-xl
              "
                style={{
                  boxShadow: "0 10px 30px rgba(13,59,127,.06)",
                }}
              >
                <img
                  src={company.logo}
                  alt={company.title}
                  draggable={false}
                  className="max-h-[70px] max-w-[180px] object-contain opacity-80 transition-all duration-300 hover:opacity-100"
                />
              </button>
            ))}
          </div>

          {/* FADE LEFT */}

          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-32"
            style={{
              background:
                "linear-gradient(to right,#f5f5f5 0%,transparent 100%)",
            }}
          />

          {/* FADE RIGHT */}

          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-32"
            style={{
              background:
                "linear-gradient(to left,#f5f5f5 0%,transparent 100%)",
            }}
          />
        </div>
      </section>

      {/* ========================= */}
      {/* MODAL */}
      {/* ========================= */}

      <Dialog
        open={!!selectedCompany}
        onOpenChange={(open) => {
          if (!open) setSelectedCompany(null);
        }}
      >
        <DialogContent className="max-w-5xl overflow-hidden rounded-3xl border-0 p-0">
          {selectedCompany && (
            <div className="grid md:grid-cols-2">
              {/* Imagen */}

              <div className="relative h-[280px] md:h-full">
                <img
                  src={selectedCompany.image}
                  alt={selectedCompany.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Información */}

              <div className="flex flex-col justify-center p-10">
                <DialogTitle className="text-3xl font-bold text-[#0D3B7F]">
                  {selectedCompany.title}
                </DialogTitle>

                <p className="mt-6 leading-8 text-gray-600">
                  {selectedCompany.description}
                </p>

                <div className="mt-8 space-y-4">
                  {selectedCompany.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#238CCC]/10 text-[#238CCC]">
                        ✓
                      </div>

                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="mt-10 h-12 rounded-full bg-[#0D3B7F] text-base hover:bg-[#238CCC]"
                >
                  <a
                    href={selectedCompany.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedCompany.buttonText}
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LogosCarousel;