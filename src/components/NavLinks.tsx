import Link from "next/link";

export function NavLinks() {
  return (
    <>
      <Link href="/">Sobre</Link>
      {process.env.CURRICULUM_URL && (
        <Link href={process.env.CURRICULUM_URL} target="_blank">
          Currículo
        </Link>
      )}
      <Link href="/projetos">Projetos</Link>
    </>
  );
}
