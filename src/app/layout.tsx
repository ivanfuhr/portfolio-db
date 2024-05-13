import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageLoader } from "@/components/PageLoader";
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
      <body
        className={classnameMerge(
          "bg-background flex min-h-screen flex-col justify-between font-sans antialiased",
          robotoFlex.variable,
          ttSupermolot.variable,
        )}
      >
        <PageLoader />
        <Header />
        <div className="mx-auto my-6 max-w-6xl px-6 lg:my-16 lg:px-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
