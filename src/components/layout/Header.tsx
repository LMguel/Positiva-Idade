"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(43,51,36,0.08)] py-3"
            : "bg-transparent py-6"
        )}
      >
        <Container className="flex items-center justify-between">
          <Link
            href="#inicio"
            className="relative flex shrink-0 items-center gap-3"
            aria-label="Centro Educacional Positiva Idade"
          >
            <Image
              src="/image/logo.png"
              alt="Centro Educacional Positiva Idade"
              width={200}
              height={200}
              priority
              className={cn(
                "w-auto object-contain transition-all duration-500 drop-shadow-sm",
                scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20 xl:h-[88px]"
              )}
            />
            <span
              className={cn(
                "font-script hidden whitespace-nowrap leading-none font-semibold transition-all duration-500 sm:block lg:hidden xl:block",
                scrolled
                  ? "text-primary-dark drop-shadow-none"
                  : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
                scrolled ? "text-2xl xl:text-3xl" : "text-3xl xl:text-4xl"
              )}
            >
              Positiva Idade
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium tracking-tight transition-colors relative group",
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full",
                    scrolled ? "bg-primary" : "bg-white"
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              href="#contato"
              variant={scrolled ? "primary" : "ghost"}
              icon={<CalendarCheck className="size-4" />}
            >
              Agendar Visita
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menu"
            className={cn(
              "lg:hidden inline-flex items-center justify-center size-11 rounded-full transition-colors",
              scrolled ? "text-primary bg-primary/8" : "text-white bg-white/15 backdrop-blur-sm"
            )}
          >
            <Menu className="size-5" />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-[60] bg-primary-dark/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-[70] w-[82%] max-w-sm bg-background shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <Image
                  src="/image/logo.png"
                  alt="Centro Educacional Positiva Idade"
                  width={160}
                  height={160}
                  className="h-14 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Fechar menu"
                  className="inline-flex items-center justify-center size-10 rounded-full bg-primary/8 text-primary"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-6 mt-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className="block py-3.5 text-lg font-medium text-foreground border-b border-foreground/8"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto p-6">
                <Button
                  href="#contato"
                  onClick={() => setDrawerOpen(false)}
                  className="w-full"
                  icon={<CalendarCheck className="size-4" />}
                >
                  Agendar Visita
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
