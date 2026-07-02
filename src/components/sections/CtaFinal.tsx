import { CalendarCheck, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BlurCircle } from "@/components/ui/Decor";
import { WHATSAPP_LINK } from "@/lib/constants";

export function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-primary-dark py-24 sm:py-28"
    >
      <BlurCircle className="-top-24 -right-20" size={380} color="bg-secondary/30" />
      <BlurCircle className="-bottom-28 -left-24" size={340} color="bg-accent/20" />

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            Vamos conversar?
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-balance max-w-2xl text-3xl font-semibold leading-[1.2] text-white sm:text-4xl lg:text-5xl">
            Pronto para conhecer nossa escola?
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="max-w-xl text-balance text-[15px] leading-relaxed text-white/75 sm:text-base">
            Agende uma visita e descubra um ambiente preparado para o
            desenvolvimento das crianças.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href="#" variant="outline-light" icon={<CalendarCheck className="size-4" />}>
              Agendar Visita
            </Button>
            <Button
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              icon={<MessageCircle className="size-4" />}
            >
              Conversar no WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
