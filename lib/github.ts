export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

export async function fetchRepos(username: string): Promise<GithubRepo[]> {
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    // Next.js cache:
    next: { revalidate: 3600 } // 1 saat
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const repos = (await res.json()) as GithubRepo[];

  return repos
    .filter(r => !r.fork && !r.archived)
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
}
