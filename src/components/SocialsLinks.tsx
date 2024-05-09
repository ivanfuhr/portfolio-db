import Image from "next/image";
import Link from "next/link";

export function SocialLinks() {
  return (
    <>
      <Link href="https://github.com/ivanfuhr">
        <Image
          src="/icons/github.svg"
          alt="Meu GitHub"
          width={24}
          height={24}
        />
        <span className="sr-only">Veja meus projetos no GitHun</span>
      </Link>

      <Link href="https://br.linkedin.com/in/ivan-f%C3%BChr">
        <Image
          src="/icons/linkedin.svg"
          alt="Meu LinkedIn"
          width={24}
          height={24}
        />
        <span className="sr-only">Conecte-se comigo no LinkedIn</span>
      </Link>
    </>
  );
}
