import Image from "next/image";
import { Sprout, GraduationCap, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const METRICS = [
  { icon: Sprout, value: "+20 anos", label: "formando histórias" },
  { icon: GraduationCap, value: "Educação Infantil", label: "e Ensino Fundamental" },
  { icon: Home, value: "Ambiente", label: "acolhedor e seguro" },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/15">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop"
                alt="Crianças aprendendo em ambiente acolhedor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-56 rounded-2xl bg-white p-5 shadow-xl sm:block">
              <p className="font-display text-3xl font-semibold text-primary">+20</p>
              <p className="text-sm text-muted">anos dedicados à educação com propósito</p>
            </div>
            <div
              aria-hidden
              className="absolute -top-8 -left-8 -z-10 size-40 rounded-full bg-accent/25 blur-2xl"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              Sobre nós
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-balance mt-5 text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl lg:text-[2.75rem]">
              Educar vai além da sala de aula.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-balance text-[15px] leading-relaxed text-muted sm:text-base">
              No Centro Educacional Positiva Idade, acreditamos que cada
              criança aprende de forma única. Criamos um ambiente seguro,
              acolhedor e estimulante para favorecer descobertas, autonomia e
              crescimento — dia após dia, com afeto e propósito.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-primary/8 bg-card p-5 text-center sm:text-left"
                >
                  <metric.icon className="mx-auto size-6 text-secondary sm:mx-0" />
                  <p className="font-display mt-3 text-lg font-semibold text-foreground">
                    {metric.value}
                  </p>
                  <p className="text-sm text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
