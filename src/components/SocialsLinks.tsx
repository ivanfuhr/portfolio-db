import Image from "next/image";
import Link from "next/link";

export function SocialLinks() {
  return (
    <>
      {process.env.GITHUB_USERNAME && (
        <Link href={`https://github.com/${process.env.GITHUB_USERNAME}`}>
          <Image
            src="/icons/github.svg"
            alt="Meu GitHub"
            width={24}
            height={24}
          />
          <span className="sr-only">Veja meus projetos no GitHun</span>
        </Link>
      )}

      {process.env.LINKEDIN_USERNAME && (
        <Link
          href={`https://br.linkedin.com/in/${process.env.LINKEDIN_USERNAME}`}
        >
          <Image
            src="/icons/linkedin.svg"
            alt="Meu LinkedIn"
            width={24}
            height={24}
          />
          <span className="sr-only">Conecte-se comigo no LinkedIn</span>
        </Link>
      )}
    </>
  );
}
