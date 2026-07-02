import { BookOpen, Leaf, School, Palette, Heart, Laptop } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { BlurCircle } from "@/components/ui/Decor";

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
    <section id="diferenciais" className="relative py-24 sm:py-28 overflow-hidden">
      <BlurCircle className="-top-20 -left-24" size={340} color="bg-accent/15" />
      <BlurCircle className="bottom-0 -right-20" size={300} color="bg-primary/10" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher o Positiva Idade?"
          description="Unimos afeto, estrutura e propósito para oferecer uma educação verdadeiramente completa."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group h-full rounded-3xl border border-primary/8 bg-card p-8 shadow-[0_2px_20px_-8px_rgba(21,51,33,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(21,51,33,0.18)] hover:border-primary/15">
                <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="size-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
