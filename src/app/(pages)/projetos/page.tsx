import { ProjectCard, ProjectCardProps } from "@/components/ProjectCard";
import { StrongTitle } from "@/components/StrongTitle";
import { Title } from "@/components/Title";

const projects: ProjectCardProps[] = [
  {
    title: "Projeto 1",
    description: "Sua descrição sobre o projeto não pode ultrapassar 7 linhas.",
    image: "/images/projects/project-1.jpg",
    link: "https://example.com",
  },
  {
    title: "Projeto 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna, euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed, accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem.",
    image: "/images/projects/project-2.jpg",
    link: "https://example.com",
  },
  {
    title: "Projeto 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna, euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed, accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem.",
    image: "/images/projects/project-3.jpg",
    link: "https://example.com",
  },
  {
    title: "Projeto 4",
    description: "Descrição do projeto 4",
    image: "/images/projects/project-4.jpg",
    link: "https://example.com",
  },
  {
    title: "Projeto 5",
    description: "Descrição do projeto 5",
    image: "/images/projects/project-5.jpg",
    link: "https://example.com",
  },
];

export default function ProjetosPage() {
  return (
    <main className="space-y-8">
      <Title type="h1">
        Meus <br />
        <StrongTitle>Projetos</StrongTitle>
      </Title>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
