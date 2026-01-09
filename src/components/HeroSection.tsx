import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1 glow-primary">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-5xl md:text-6xl">👨‍💻</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-sm">✓</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">John Doe</span>
          </h1>
          <p className="font-mono text-primary text-lg mb-4">@johndoe</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6"
        >
          Full-stack developer passionate about building open-source tools 
          and crafting beautiful web experiences. Turning coffee into code since 2018.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
        >
          <MapPin className="w-4 h-4" />
          <span>San Francisco, CA</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/10 hover:border-glow transition-all duration-300 group"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-border"
        >
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-foreground">24</p>
            <p className="text-sm text-muted-foreground font-mono">Repositories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-foreground">1.2k</p>
            <p className="text-sm text-muted-foreground font-mono">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-foreground">342</p>
            <p className="text-sm text-muted-foreground font-mono">Following</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
