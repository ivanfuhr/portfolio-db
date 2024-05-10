import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-blue-variant1 py-3">
      <Image src="/images/logo-slogan.svg" alt="Logo" width={261} height={73} />
    </footer>
  );
}
