import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGitHub } from "@/context/GitHubContext";

const HeroSection = () => {
  const { user, loading, error } = useGitHub();

  const socialLinks = [
    { icon: Linkedin, href: "www.linkedin.com/in/brian-ndung-u-762a6027a", label: "LinkedIn" },
    { icon: Twitter, href: user?.twitter_username ? `https://twitter.com//@BazMyster}` : "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: user?.email ? `mailto:${user.email}` : "mailto:brianndunguk003@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading GitHub profile...</p>
          </motion.div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-destructive"
          >
            <p>Error: {error}</p>
            <p className="text-muted-foreground mt-2">Please check the username in GitHubContext.tsx</p>
          </motion.div>
        ) : (
          <>
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 p-1.5 glow-primary">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    <img 
                      src={user?.avatar_url || "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"} 
                      alt={user?.name || "GitHub Avatar"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">{user?.name || user?.login || "Developer"}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {user?.bio || "Full Stack Developer | Open Source Enthusiast"}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-4 flex-wrap mb-8"
            >
              <Button variant="hero" size="xl" asChild>
                <a href={user?.html_url || "https://github.com"} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
