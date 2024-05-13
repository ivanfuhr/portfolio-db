import { getProjects } from "@/actions/projects/get-projects";
import { ProjectCard } from "@/components/ProjectCard";
import { StrongTitle } from "@/components/StrongTitle";
import { Title } from "@/components/Title";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Projetos - Ivan Führ",
  description: "Conheça os meus principais projetos.",
};

export default async function ProjetosPage() {
  const projects = await getProjects();

  if ("error" in projects) {
    redirect("/404");
  }

  return (
    <main className="flex-1 space-y-8">
      <Title type="h1">
        Meus <br />
        <StrongTitle>Projetos</StrongTitle>
      </Title>

      {projects.length ? (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.name}
              techs={project.techs}
              image={project.picture}
              link={project.url}
              description={project.description}
            />
          ))}
        </div>
      ) : (
        <p className="font-light">Nenhum projeto encontrado até o momento.</p>
      )}
    </main>
  );
}
