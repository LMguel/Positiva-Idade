import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Sobre } from "@/components/sections/Sobre";
import { Estrutura } from "@/components/sections/Estrutura";
import { Experiencia } from "@/components/sections/Experiencia";
import { Galeria } from "@/components/sections/Galeria";
import { Localizacao } from "@/components/sections/Localizacao";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Sobre />
        <Estrutura />
        <Experiencia />
        <Galeria />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
