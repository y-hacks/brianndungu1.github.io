import { useState, useEffect } from "react";

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  location: string;
  email: string;
  blog: string;
  twitter_username: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

interface GitHubStats {
  totalStars: number;
  totalContributions: number;
}

interface UseGitHubDataReturn {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  stats: GitHubStats;
  loading: boolean;
  error: string | null;
}

// Language colors for GitHub
const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#ffac45",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Vue: "#41b883",
  Svelte: "#ff3e00",
};

export const getLanguageColor = (language: string): string => {
  return languageColors[language] || "#8b949e";
};

export const useGitHubData = (username: string): UseGitHubDataReturn => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubStats>({ totalStars: 0, totalContributions: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      if (!username) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
          throw new Error("User not found");
        }
        const userData: GitHubUser = await userResponse.json();
        setUser(userData);

        // Fetch repositories (sorted by stars)
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`
        );
        const reposData: GitHubRepo[] = await reposResponse.json();
        
        // Sort by stars and take top repos
        const sortedRepos = reposData
          .filter((repo) => !repo.name.includes(username)) // Filter out profile repo
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        setRepos(sortedRepos);

        // Calculate total stars
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        
        // Estimate contributions (this is approximate since GitHub API doesn't expose this directly)
        // We'll use repos count + stars as a rough metric
        setStats({
          totalStars,
          totalContributions: userData.public_repos * 50 + totalStars, // Rough estimate
        });

      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch GitHub data");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  return { user, repos, stats, loading, error };
};
