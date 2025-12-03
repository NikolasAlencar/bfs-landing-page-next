import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Fast Solutions',
  description: 'Paralegal, Contabilidade e Legalização na Velocidade que o Seu Negócio Exige',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
