import { Header } from "@/components/Header";
import { classnameMerge } from "@/lib/classname-merge";
import { robotoFlex, ttSupermolot } from "@/lib/font-config";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio - Ivan Führ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={classnameMerge(
        "min-h-screen bg-background font-sans antialiased",
        robotoFlex.variable,
        ttSupermolot.variable,
      )}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
