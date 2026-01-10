import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useGitHub } from "@/context/GitHubContext";
import { getLanguageColor } from "@/hooks/useGitHubData";
import { Loader2 } from "lucide-react";

const ProjectsSection = () => {
  const { repos, loading } = useGitHub();

  // Show top 6 repos
  const topRepos = repos.slice(0, 6);

  return (
    <section id="projects" className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of open-source projects I've built and contributed to
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : topRepos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topRepos.map((repo, index) => (
              <ProjectCard
                key={repo.id}
                name={repo.name}
                description={repo.description || "No description available"}
                language={repo.language || "Unknown"}
                languageColor={getLanguageColor(repo.language || "")}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
                url={repo.html_url}
                index={index}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No repositories found</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
