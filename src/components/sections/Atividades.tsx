import Image from "next/image";
import { Compass, Drum, Waves, PartyPopper } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const ATIVIDADES = [
  {
    image: "/image/praia.jpg",
    icon: Waves,
    tag: "Ao ar livre",
    title: "Aprendizado na natureza",
    description:
      "Exploração, brincadeiras educativas e consciência ambiental à beira-mar, onde cada dia é uma nova descoberta.",
    span: "lg:col-span-3",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/image/aldeia.jpg",
    icon: Compass,
    tag: "Excursões culturais",
    title: "Visita à Aldeia Pataxó",
    description:
      "Contato com diferentes culturas em Paraty, ampliando o olhar das crianças para o mundo.",
    span: "lg:col-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    image: "/image/capoeira.jpg",
    icon: Drum,
    tag: "Cultura brasileira",
    title: "Roda de capoeira",
    description:
      "Música, movimento e integração em eventos culturais que celebram nossas raízes.",
    span: "lg:col-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    image: "/image/festa.jpg",
    icon: PartyPopper,
    tag: "Festas comemorativas",
    title: "Festa Junina em família",
    description:
      "Confraternização e participação dos pais em um ambiente acolhedor para toda a família.",
    span: "lg:col-span-3",
    aspect: "aspect-[4/3]",
  },
];

export function Atividades() {
  return (
    <section id="atividades" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Atividades"
          title="Experiências que marcam a infância"
          description="Do contato com a natureza às tradições culturais, cada vivência é pensada para o desenvolvimento pleno da criança."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {ATIVIDADES.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.1} className={item.span}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-primary-dark">
                <div className={`relative w-full ${item.aspect}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                    <item.icon className="size-3.5" />
                    {item.tag}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
