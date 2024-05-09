"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./SocialsLinks";

export function NavMobile() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="md:hidden" aria-label="Abrir menu de navegação">
          <Menu className="h-6 w-6 text-darkBlue-default" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-zinc-950/30" />

        <Dialog.Content className="fixed right-0 top-0 flex h-full flex-col justify-between bg-white p-8">
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
