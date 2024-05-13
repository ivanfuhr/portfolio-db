import { fetchRepositories, fetchRepositoryContents } from "@/lib/github-api";
import { unstable_cache } from "next/cache";
import { TProject, projectSchema } from "./project-schema";

const PROJECT_FILE_NAME = "project.json";
export const PROJECTS_CACHE_KEY = `projects-${process.env.GITHUB_USERNAME}`;

export type ProjectsResponse =
  | {
      error: string;
    }
  | TProject[];

const fetchProjects = async (): Promise<ProjectsResponse> => {
  if (!process.env.GITHUB_USERNAME) {
    return {
      error: "GITHUB_USERNAME is required",
    };
  }

  const repositoriesData = await fetchRepositories(process.env.GITHUB_USERNAME);

  if ("message" in repositoriesData || repositoriesData.length === 0) {
    return {
      error: "Repositories not found",
    };
  }

  const publicRepositories = repositoriesData.filter(
    (repository) => repository.private === false,
  );

  const projects = [];

  for await (const repository of publicRepositories) {
    const repositoryData = await fetchRepositoryContents(
      process.env.GITHUB_USERNAME,
      repository.name,
    );

    if ("message" in repositoryData || repositoryData.length === 0) {
      continue;
    }

    const project = repositoryData.find(
      (item) => item.name === PROJECT_FILE_NAME,
    );

    if (!project) {
      continue;
    }

    const projectResponse = await fetch(project.download_url, {
      cache: "no-store",
    });

    const projectData = await projectResponse.json();

    const projectDataParsed = projectSchema.safeParse({
      ...projectData,
      url: repository.html_url,
    });

    if (!projectDataParsed.success) {
      continue;
    }

    projects.push(projectDataParsed.data);
  }

  return projects;
};

export const getProjects = unstable_cache(
  fetchProjects,
  [PROJECTS_CACHE_KEY],
  { revalidate: 60 * 60 * 24 }, // 24 hours
);
