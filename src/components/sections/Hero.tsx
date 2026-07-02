"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/lib/constants";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-primary-dark"
    >
      <motion.div
        style={{ y: imageY, transformOrigin: "50% 100%" }}
        className="absolute inset-0 scale-105"
      >
        <Image
          src="/image/mobile.jpg"
          alt="Praia e natureza — crianças brincando à beira-mar, Centro Educacional Positiva Idade"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom md:hidden"
        />
        <Image
          src="/image/wallpaper.jpg"
          alt="Praia e natureza — crianças brincando à beira-mar, Centro Educacional Positiva Idade"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-bottom md:block"
        />
      </motion.div>

      {/* Leve véu escuro para legibilidade, preservando as cores da foto (praia, pôr do sol, natureza) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,25,15,.45) 0%, rgba(10,25,15,.12) 22%, rgba(10,25,15,.14) 60%, rgba(10,25,15,.3) 100%)",
        }}
        aria-hidden
      />
      {/* Véu radial atrás do texto para garantir contraste sem esconder a foto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(8,20,12,.4) 0%, rgba(8,20,12,0) 70%)",
        }}
        aria-hidden
      />
      {/* Gradiente inferior sutil que funde a foto com o fundo do site, sem cobrir as crianças na areia */}
      <div
        className="absolute inset-x-0 bottom-0 h-12 sm:h-16 lg:h-24"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,25,12,0) 0%, var(--color-background) 100%)",
        }}
        aria-hidden
      />

      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 size-72 rounded-full bg-accent/20 blur-3xl animate-float" />
        <div
          className="absolute bottom-10 -right-16 size-96 rounded-full bg-primary/20 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <Leaf className="absolute top-[22%] right-[12%] size-10 text-white/20 rotate-12 hidden sm:block animate-float" />
        <Leaf
          className="absolute bottom-[28%] left-[8%] size-8 text-white/15 -rotate-12 hidden sm:block animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
        >
          🌱 Educação com carinho e propósito
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          style={{
            textShadow:
              "0 2px 6px rgba(0,0,0,.55), 0 6px 28px rgba(0,0,0,.5), 0 1px 0 rgba(0,0,0,.4)",
          }}
          className="font-script text-balance max-w-sm text-4xl leading-tight font-bold text-white sm:max-w-none sm:text-6xl sm:leading-none lg:text-7xl"
        >
          Centro Educacional Positiva Idade
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-balance mt-4 max-w-4xl text-4xl font-semibold leading-[1.15] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-6xl"
        >
          Construindo futuros com cuidado, aprendizado e experiências
          inesquecíveis.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.44 }}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] sm:text-lg"
        >
          Um ambiente acolhedor para desenvolver autonomia, criatividade e
          crescimento desde os primeiros anos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.58 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#sobre" variant="secondary" className="min-w-[220px]">
            Conheça a Escola
          </Button>
          <Button
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            className="min-w-[220px]"
          >
            Fale Conosco
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-7 z-10 flex justify-center"
      >
        <div className="flex flex-col items-center gap-1.5 text-white/75 animate-bounce-slow">
          <span className="text-xs font-medium tracking-wide">Role a página</span>
          <ChevronDown className="size-5" />
        </div>
      </motion.div>
    </section>
  );
}
