import { motion } from "framer-motion";
import { useGitHub } from "@/context/GitHubContext";

const AboutSection = () => {
  const { user, stats } = useGitHub();

  const displayStats = [
    { value: user?.public_repos || 0, label: "Repositories", color: "text-violet-400" },
    { value: stats.totalContributions.toLocaleString(), label: "Contributions", color: "text-teal-400" },
    { value: user?.followers?.toLocaleString() || "0", label: "Followers", color: "text-yellow-400" },
    { value: stats.totalStars.toLocaleString(), label: "Stars", color: "text-primary" },
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
            {user?.bio || "Cybersecurity professional with hands-on experience in reconnaissance,vulnerability analysis, cloud security, and secure application development."}
          </p>
          {user?.location && (
            <p className="text-sm">📍 {user.location}</p>
          )}
          {user?.blog && (
            <p className="text-sm">
              🔗 <a href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{user.blog}</a>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
