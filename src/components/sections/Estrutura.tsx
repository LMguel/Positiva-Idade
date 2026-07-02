import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const ESTRUTURA = [
  {
    title: "Biblioteca",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Parquinho",
    image:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Área verde",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Espaços de convivência",
    image:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Salas climatizadas",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Atividades recreativas",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Estrutura() {
  return (
    <section id="estrutura" className="bg-primary/[0.03] py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Estrutura"
          title="Espaços pensados para cada descoberta"
          description="Ambientes seguros, arejados e estimulantes para o desenvolvimento pleno das crianças."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ESTRUTURA.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-md shadow-primary/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
