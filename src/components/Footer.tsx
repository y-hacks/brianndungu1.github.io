import { Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-glow" />
          <span>and lots of</span>
          <span className="font-mono">☕</span>
        </div>
        
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="font-mono">View on GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
