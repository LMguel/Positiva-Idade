import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const GALERIA = [
  {
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    alt: "Crianças lendo juntas",
    h: "h-72",
  },
  {
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
    alt: "Natureza e área verde",
    h: "h-56",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
    alt: "Atividades em sala",
    h: "h-80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop",
    alt: "Atividades de arte e pintura",
    h: "h-64",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800&auto=format&fit=crop",
    alt: "Crianças brincando no parquinho",
    h: "h-72",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=800&auto=format&fit=crop",
    alt: "Atividades ao ar livre",
    h: "h-60",
  },
];

export function Galeria() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title="Momentos que contam nossa história"
          description="Um pouco do dia a dia de aprendizado, brincadeiras e descobertas na Positiva Idade."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {GALERIA.map((item, i) => (
            <Reveal key={item.alt} delay={(i % 3) * 0.08}>
              <div
                className={`group relative ${item.h} w-full overflow-hidden rounded-2xl break-inside-avoid shadow-sm shadow-primary/10`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-dark/0 transition-colors duration-500 group-hover:bg-primary-dark/25" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
