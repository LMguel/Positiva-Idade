import type { Metadata } from "next";
import { Inter, Fraunces, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.positivaidade.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Centro Educacional Positiva Idade | Educação com propósito",
    template: "%s | Centro Educacional Positiva Idade",
  },
  description:
    "Conheça o Centro Educacional Positiva Idade e descubra um ambiente acolhedor para desenvolvimento infantil, com educação de qualidade, natureza e afeto.",
  keywords: [
    "escola infantil",
    "educação infantil",
    "ensino fundamental",
    "Centro Educacional Positiva Idade",
    "escola acolhedora",
  ],
  openGraph: {
    title: "Centro Educacional Positiva Idade | Educação com propósito",
    description:
      "Um ambiente acolhedor para desenvolver autonomia, criatividade e crescimento desde os primeiros anos.",
    url: siteUrl,
    siteName: "Centro Educacional Positiva Idade",
    images: [
      {
        url: "/image/logo.png",
        width: 800,
        height: 800,
        alt: "Centro Educacional Positiva Idade",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Centro Educacional Positiva Idade | Educação com propósito",
    description:
      "Conheça o Centro Educacional Positiva Idade e descubra um ambiente acolhedor para desenvolvimento infantil.",
    images: ["/image/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} ${dancingScript.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
