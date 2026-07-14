import { MapPin, Phone, Navigation } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Localizacao() {
  return (
    <section id="localizacao" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Localização"
          title="Bem perto da praia, perto de você"
          description="Venha conhecer nosso espaço pessoalmente e sinta o ambiente acolhedor que preparamos para o seu filho."
        />

        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-line bg-card p-8">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="size-5 shrink-0 text-primary" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Endereço
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">
                      {SITE.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="size-5 shrink-0 text-primary" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Telefone
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">
                      {SITE.phoneDisplay}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                href={SITE.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                icon={<Navigation className="size-4" />}
                className="w-full"
              >
                Ver rota no Google Maps
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3">
            <div className="h-[360px] w-full overflow-hidden rounded-3xl border border-line lg:h-full">
              <iframe
                src={SITE.mapsEmbedSrc}
                title="Mapa — Centro Educacional Positiva Idade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
