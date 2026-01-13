import { createContext, useContext, useState, ReactNode } from "react";
import { useGitHubData } from "@/hooks/useGitHubData";

interface GitHubContextType {
  username: string;
  setUsername: (username: string) => void;
  user: ReturnType<typeof useGitHubData>["user"];
  repos: ReturnType<typeof useGitHubData>["repos"];
  stats: ReturnType<typeof useGitHubData>["stats"];
  loading: boolean;
  error: string | null;
}

const GitHubContext = createContext<GitHubContextType | null>(null);

export const GitHubProvider = ({ children }: { children: ReactNode }) => {
  // Change this to your GitHub username!
  const [username, setUsername] = useState("y-hacks");
  
  const { user, repos, stats, loading, error } = useGitHubData(username);

  return (
    <GitHubContext.Provider value={{ username, setUsername, user, repos, stats, loading, error }}>
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHub = () => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error("useGitHub must be used within a GitHubProvider");
  }
  return context;
};
