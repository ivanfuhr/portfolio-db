import { Assessment, AssessmentProps } from "@/components/Assessment";
import { StrongTitle } from "@/components/StrongTitle";
import { Title } from "@/components/Title";
import { Dot } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projetos - Ivan Führ",
  description: "Conheça os meus principais projetos.",
};

const skills: AssessmentProps[] = [
  {
    label: "HTML",
    score: 5,
  },
  {
    label: "CSS",
    score: 4,
  },
  {
    label: "JavaScript",
    score: 4,
  },
  {
    label: "TypeScript",
    score: 3,
  },
  {
    label: "React",
    score: 4,
  },
  {
    label: "Next.js",
    score: 4,
  },
  {
    label: "Node.js",
    score: 4,
  },
  {
    label: "Express",
    score: 3,
  },
  {
    label: "MongoDB",
    score: 3,
  },
  {
    label: "PostgreSQL",
    score: 3,
  },
  {
    label: "Docker",
    score: 3,
  },
  {
    label: "Git",
    score: 4,
  },
  {
    label: "CI/CD",
    score: 3,
  },
  {
    label: "TDD",
    score: 3,
  },
  {
    label: "Scrum",
    score: 4,
  },
];

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-28">
      <div>
        <Title type="h1">
          Olá, meu nome é <br />
          <StrongTitle>Ivan Führ</StrongTitle>
        </Title>

        <p className="font-supermolot text-xl lg:text-3xl">
          Sou desenvolvedor fullstack na DBServer.
        </p>

        <Title className="mb-2 mt-8 lg:mt-28">Sobre mim</Title>

        <p className="max-w-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
          urna, euismod at porttitor in, dignissim eu mauris. In sem nibh,
          viverra eu risus sed, accumsan luctus dui. Fusce ex neque, maximus
          quis dui et, rutrum sollicitudin sem. elit. Sed diam urna, euismod at
          porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed,
          accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum
          sollicitudin sem.
        </p>
      </div>

      <aside>
        <Image
          src="/images/profile.png"
          alt="Foto de perfil"
          width={576}
          height={576}
          className="w-full max-w-xl"
        />

        <Title type="h3" className="mt-11">
          Habilidades
        </Title>

        <ul className="mt-3 flex flex-col gap-1 sm:max-w-max">
          {skills.map((skill, index) => (
            <li className="flex" key={index}>
              <Dot />
              <Assessment label={skill.label} score={skill.score} />
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
