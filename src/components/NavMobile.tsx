"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./SocialsLinks";

export function NavMobile() {
  const slideIn = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="lg:hidden" aria-label="Abrir menu de navegação">
          <Menu className="h-6 w-6 text-darkBlue-default" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-zinc-950/30" />

        <Dialog.Content asChild>
          <motion.div
            className="fixed right-0 top-0 flex h-full flex-col justify-between bg-white p-8"
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="space-y-4">
              <div className="flex gap-8">
                <Dialog.Title>
                  <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={87}
                    height={60}
                  />
                </Dialog.Title>

                <Dialog.Close asChild>
                  <button aria-label="Fechar menu de navegação">
                    <X className="h-6 w-6 text-darkBlue-default" />
                  </button>
                </Dialog.Close>
              </div>

              <nav className="flex flex-col gap-4 font-supermolot font-bold text-darkBlue-default">
                <NavLinks />
              </nav>
            </div>

            <div className="flex gap-4">
              <SocialLinks />
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
