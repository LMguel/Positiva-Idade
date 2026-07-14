import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Atividades } from "@/components/sections/Atividades";
import { Fundadoras } from "@/components/sections/Fundadoras";
import { Localizacao } from "@/components/sections/Localizacao";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Diferenciais />
        <Atividades />
        <Fundadoras />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
