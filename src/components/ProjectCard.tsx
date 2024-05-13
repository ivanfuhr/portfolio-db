import Image from "next/image";
import { Button } from "./Button";
import { Title } from "./Title";

export type ProjectCardProps = {
  title: string;
  description: string;
  techs: string[];
  image: string;
  link: string;
};

export function ProjectCard({
  title,
  image,
  description,
  techs,
  link,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded shadow-md">
      <Image
        src={image}
        alt={`Foto do projeto ${title}`}
        width={320}
        height={192}
        className="aspect-video w-full  object-cover"
      />

      <div className="flex h-full flex-col justify-between gap-3 px-4 py-6">
        <Title type="h3" className="text-3xl leading-8">
          {title}
        </Title>

        <span className="font-supermolot text-sm font-bold uppercase text-pink-default">
          {techs.join(", ")}
        </span>

        <p className="font-light">{description}</p>

        <Button target="_blank" link={link}>
          Acessar
        </Button>
      </div>
    </div>
  );
}
