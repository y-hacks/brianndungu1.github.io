import { motion } from "framer-motion";
import { useGitHub } from "@/context/GitHubContext";

const AboutSection = () => {
  const { user, stats } = useGitHub();

  const displayStats = [
    {
      value: user?.public_repos || 0,
      label: "Repositories",
      description: "Security tools & labs",
      color: "text-violet-400",
    },
    {
      value: stats.totalContributions.toLocaleString(),
      label: "Contributions",
      description: "Active hands-on practice",
      color: "text-teal-400",
    },
    {
      value: user?.followers?.toLocaleString() || "0",
      label: "Followers",
      description: "Community engagement",
      color: "text-yellow-400",
    },
    {
      value: stats.totalStars.toLocaleString(),
      label: "Stars",
      description: "Peer recognition",
      color: "text-primary",
    },
  ];

  return (
    <section id="about" className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-muted-foreground text-lg text-center mb-12"
        >
          <p>
            I am a cybersecurity and cloud security practitioner focused on
            reconnaissance, threat detection, vulnerability analysis, and
            secure cloud-native application design. My work spans offensive
            security labs, SOC-style investigations, and DevSecOps automation
            using modern tooling.
          </p>

          <p>
            I operate with a hybrid offensive–defensive mindset, applying
            attacker techniques to improve detection, hardening, and secure
            system architecture.
          </p>

          <p className="text-sm">
            Tooling & Platforms: Linux, Nmap, Burp Suite, Python, Azure,
            Network Security, CI/CD, GitHub Actions
          </p>

          <p className="text-sm italic">
            All security work is conducted in controlled lab environments or
            with explicit authorization.
          </p>

          {user?.bio && (
            <p className="text-sm text-muted-foreground">
              GitHub Bio: {user.bio}
            </p>
          )}

          {user?.location && (
            <p className="text-sm">Location: {user.location}</p>
          )}

          {user?.blog && (
            <p className="text-sm">
              Website:{" "}
              <a
                href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {user.blog}
              </a>
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <p className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
              <p className="text-muted-foreground text-xs mt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
