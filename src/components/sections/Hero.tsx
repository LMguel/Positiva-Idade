"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HorizonMark } from "@/components/ui/HorizonMark";
import { WHATSAPP_LINK } from "@/lib/constants";

const TRUST_ITEMS = [
  { icon: Sparkles, label: "+20 anos de história" },
  { icon: Users, label: "Turmas acolhedoras" },
  { icon: ShieldCheck, label: "Ambiente seguro" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-primary-dark"
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

      {/* Véu escuro uniforme para legibilidade geral */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,16,9,.48) 0%, rgba(12,16,9,.2) 30%, rgba(12,16,9,.26) 60%, rgba(12,16,9,.4) 100%)",
        }}
        aria-hidden
      />
      {/* Realce concentrado atrás do título, como a capa de um catálogo impresso */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 42% at 50% 46%, rgba(8,12,6,.4) 0%, rgba(8,12,6,0) 72%)",
        }}
        aria-hidden
      />
      {/* Gradiente inferior que funde a foto com o fundo do site */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 sm:h-20 lg:h-28"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,25,12,0) 0%, var(--color-background) 100%)",
        }}
        aria-hidden
      />

      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute top-[20%] right-[10%] size-9 text-white/15 rotate-12 hidden sm:block animate-float" />
        <Leaf
          className="absolute bottom-[32%] left-[7%] size-7 text-white/10 -rotate-12 hidden sm:block animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-2 text-[11px] font-medium tracking-[0.35em] text-white/75 uppercase sm:text-xs"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,.4)" }}
        >
          Centro Educacional
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22 }}
          className="font-script text-balance max-w-6xl px-2 text-[4.2rem] leading-[0.9] text-white sm:text-[8rem] lg:text-[10.5rem]"
          style={{
            textShadow:
              "0 2px 4px rgba(0,0,0,.3), 0 14px 50px rgba(0,0,0,.42)",
          }}
        >
          Positiva Idade
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-7"
        >
          <HorizonMark light className="w-16" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Educação com cuidado, natureza e propósito — em frente ao mar de
          Praia Brava, formamos crianças confiantes desde os primeiros anos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.46 }}
          className="mt-9 flex flex-col gap-3.5 sm:flex-row"
        >
          <Button href="#contato" variant="secondary" className="min-w-[210px]">
            Agendar Visita
          </Button>
          <Button
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            className="min-w-[210px]"
          >
            Fale Conosco
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
        >
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white/80">
              <item.icon className="size-4" />
              <span className="text-[13px] font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-7 z-10 hidden justify-center sm:flex"
      >
        <div className="flex flex-col items-center gap-1.5 text-white/70 animate-bounce-slow">
          <span className="text-xs font-medium tracking-wide">Role a página</span>
          <ChevronDown className="size-5" />
        </div>
      </motion.div>
    </section>
  );
}
