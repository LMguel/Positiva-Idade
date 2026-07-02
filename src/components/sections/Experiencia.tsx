import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BlurCircle } from "@/components/ui/Decor";

export function Experiencia() {
  return (
    <section className="relative overflow-hidden bg-gradient-primary py-20 sm:py-24">
      <BlurCircle className="-top-16 left-1/4" size={280} color="bg-white/10" />
      <BlurCircle className="-bottom-20 right-1/5" size={320} color="bg-accent/20" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
            <Sparkles className="size-6" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-balance max-w-3xl text-3xl font-semibold leading-[1.2] text-white sm:text-4xl lg:text-5xl">
            Mais do que ensinar.
            <br />
            Inspiramos descobertas.
          </h2>
        </Reveal>
      </Container>
    </section>
  );
}
