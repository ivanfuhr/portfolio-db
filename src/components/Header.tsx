import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { NavMobile } from "./NavMobile";
import { SocialLinks } from "./SocialsLinks";

export function Header() {
  return (
    <header className="bg-blue-variant1 px-4 py-3 lg:px-8">
      <div className="mx-auto flex max-w-8xl items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-8 ">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={87} height={60} />
          </Link>

          <nav className="hidden gap-4 font-supermolot text-lg font-bold text-darkBlue-default lg:flex lg:gap-8">
            <NavLinks />
          </nav>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <SocialLinks />
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
