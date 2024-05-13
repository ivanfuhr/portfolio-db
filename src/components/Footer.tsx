import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-blue-variant1 py-3">
      <Link href="https://db.tec.br/">
        <Image
          src="/images/logo-slogan.svg"
          alt="Logo"
          width={261}
          height={73}
        />
      </Link>
    </footer>
  );
}
