import { BookOpen, Leaf, School, Palette, Heart, Laptop } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const DIFERENCIAIS = [
  {
    icon: BookOpen,
    title: "Ensino acolhedor",
    description:
      "Metodologia que respeita o tempo de cada criança, com afeto e atenção individual.",
  },
  {
    icon: Leaf,
    title: "Contato com natureza",
    description:
      "Espaços verdes que estimulam a curiosidade e o aprendizado ao ar livre.",
  },
  {
    icon: School,
    title: "Ambiente preparado",
    description:
      "Infraestrutura pensada para segurança, conforto e livre exploração.",
  },
  {
    icon: Palette,
    title: "Aprendizado criativo",
    description:
      "Arte, música e experiências sensoriais que despertam a criatividade.",
  },
  {
    icon: Heart,
    title: "Desenvolvimento humano",
    description:
      "Formação de valores, empatia e autonomia para a vida toda.",
  },
  {
    icon: Laptop,
    title: "Educação conectada",
    description:
      "Tecnologia integrada ao ensino, preparando para o mundo de amanhã.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-beige/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher o Positiva Idade?"
          description="Unimos afeto, estrutura e propósito para oferecer uma educação verdadeiramente completa."
        />

        <StaggerGroup className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-14 sm:grid-cols-2">
          {DIFERENCIAIS.map((item, i) => (
            <StaggerItem key={item.title}>
              <div
                className={cn(
                  "group flex items-start gap-5 py-7",
                  i >= 2 && "border-t border-line"
                )}
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-card transition-colors group-hover:border-primary/30">
                  <item.icon className="size-[18px] text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-foreground sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
