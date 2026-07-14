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
    <section id="sobre" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Sobre nós
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-balance mt-5 text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.25rem]">
              Educar vai além da sala de aula.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-7 max-w-xl text-balance text-[17px] leading-relaxed text-muted">
              No Centro Educacional Positiva Idade, acreditamos que cada
              criança aprende de forma única. Criamos um ambiente seguro,
              acolhedor e estimulante para favorecer descobertas, autonomia e
              crescimento — dia após dia, com afeto e propósito, em frente
              ao mar de Praia Brava.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.26}>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center gap-3 bg-card px-6 py-10 text-center"
              >
                <metric.icon className="size-6 text-secondary" strokeWidth={1.5} />
                <p className="font-display text-xl font-semibold text-foreground">
                  {metric.value}
                </p>
                <p className="text-sm text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
