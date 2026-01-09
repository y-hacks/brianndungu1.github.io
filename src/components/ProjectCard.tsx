import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  index: number;
}

const ProjectCard = ({
  name,
  description,
  language,
  languageColor,
  stars,
  forks,
  url,
  index,
}: ProjectCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group block p-6 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-secondary flex items-center justify-center">
            <svg
              viewBox="0 0 16 16"
              className="w-3 h-3 text-muted-foreground"
              fill="currentColor"
            >
              <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
            </svg>
          </div>
          <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: languageColor }}
          />
          <span>{language}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="w-4 h-4" />
          <span>{forks}</span>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
