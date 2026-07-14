export const SITE = {
  name: "Centro Educacional Positiva Idade",
  shortName: "Positiva Idade",
  whatsappNumber: "5511999999999",
  whatsappMessage: "Olá! Gostaria de saber mais sobre a Positiva Idade.",
  instagram: "https://www.instagram.com/positivaidade_/",
  address: "Avenida A, 1 — Praia Brava, Angra dos Reis/RJ, CEP 23950-010",
  phoneDisplay: "(24) 3362-1835",
  email: "contato@positivaidade.com.br",
  mapsLink: "https://maps.app.goo.gl/Lc3eh9sQWKH9Gzbq9",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Centro+Educacional+Positiva+Idade,+Avenida+A,+1,+Praia+Brava,+Angra+dos+Reis+-+RJ&z=16&output=embed",
};

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage
)}`;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Atividades", href: "#atividades" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];
