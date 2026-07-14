import Image from "next/image";
import { HeartHandshake, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const VALORES = [
  {
    icon: HeartHandshake,
    title: "Proximidade",
    description: "Relação próxima e de confiança com cada família.",
  },
  {
    icon: Sparkles,
    title: "Propósito",
    description: "Educação pensada para formar pessoas íntegras e felizes.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Uma escola que se constrói junto com quem a vive.",
  },
];

export function Fundadoras() {
  return (
    <section id="fundadoras" className="bg-beige/50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/image/donas.jpg"
                alt="Isabel e Montiele, fundadoras do Centro Educacional Positiva Idade"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Quem somos
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-balance mt-5 text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl lg:text-[2.75rem]">
                Isabel &amp; Montiele
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-balance text-[15px] leading-relaxed text-muted sm:text-base">
                Fundadoras do Centro Educacional Positiva Idade, Isabel e
                Montiele construíram uma escola a partir de um propósito
                simples: cuidar de cada criança como se fosse da própria
                família. Essa proximidade com os pais e o compromisso diário
                com a qualidade do ensino são a base de tudo o que fazemos.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {VALORES.map((valor) => (
                  <div key={valor.title}>
                    <valor.icon className="size-5 text-primary" strokeWidth={1.5} />
                    <h3 className="font-display mt-3 text-[15px] font-semibold text-foreground">
                      {valor.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {valor.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
