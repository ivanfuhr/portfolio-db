const url = new URL("https://api.github.com/users");

type GithubRepositoriesReponse =
  | {
      name: string;
      private: boolean;
      url: string;
      html_url: string;
    }[]
  | {
      message: string;
    };

type GithubRepositoryContentsResponse =
  | {
      name: string;
      download_url: string;
    }[]
  | { message: string };

const defaultConfig: RequestInit = {
  cache: "no-store",
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
};

export async function fetchRepositories(username: string) {
  url.pathname = `/users/${username}/repos`;

  const response = await fetch(url.toString(), defaultConfig);

  return (await response.json()) as GithubRepositoriesReponse;
}

export async function fetchRepositoryContents(
  username: string,
  repository: string,
) {
  url.pathname = `/repos/${username}/${repository}/contents`;

  const response = await fetch(url.toString(), defaultConfig);

  return (await response.json()) as GithubRepositoryContentsResponse;
}
