import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-foreground py-14">
      <Container className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <div className="flex items-center gap-3">
            <div className="inline-flex shrink-0 items-center justify-center rounded-full bg-white p-2">
              <Image
                src="/image/logo.png"
                alt="Centro Educacional Positiva Idade"
                width={200}
                height={200}
                className="h-16 w-auto object-contain"
              />
            </div>
            <span className="font-script text-3xl leading-none font-semibold text-accent">
              Positiva Idade
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            Educação com carinho, natureza e propósito para cada etapa do
            crescimento.
          </p>
        </div>

        <nav className="flex flex-col items-center gap-3 sm:items-start">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/40">
            Navegação
          </span>
          {NAV_LINKS.filter((l) => l.label !== "Diferenciais").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 sm:items-start">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/40">
            Redes sociais
          </span>
          <Link
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-primary-dark"
          >
            <InstagramIcon className="size-5" />
          </Link>
        </div>
      </Container>

      <div className="mt-12 border-t border-white/10 pt-6">
        <p className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} {SITE.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
