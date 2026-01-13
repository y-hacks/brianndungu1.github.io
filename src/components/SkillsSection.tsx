import { motion } from "framer-motion";

const skills = [
  { name: "Linux & System Administration", level: 90, color: "bg-slate-500" },
  { name: "Networking (TCP/IP, DNS, Firewalls)", level: 88, color: "bg-blue-500" },
  { name: "Cloud Security (Azure / AWS)", level: 80, color: "bg-cyan-500" },
  { name: "Python (Security Automation)", level: 78, color: "bg-yellow-500" },
  { name: "Docker & DevSecOps", level: 82, color: "bg-orange-500" },
  { name: "SQL & Database Security", level: 75, color: "bg-violet-500" },
];

const technologies = [
  { name: "Linux" },
  { name: "Docker" },
  { name: "Azure and AWS" },
  { name: "SOAR/SIEM" },
  { name: "Git" },
  { name: "Python" },
  { name: "MySQL / PostgreSQL" },
  { name: "Nmap" },
  { name: "Burp Suite" },
  { name: "Metasploit" },
  { name: "FastAPI" },
  { name: "Tailwind CSS" },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="px-6 py-20 border-t border-border"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core technologies and tools used in security engineering,
            cloud infrastructure, and automation.
          </p>
        </motion.div>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-xl bg-card border border-border"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">
                  {skill.name}
                </span>
                <span className="text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div
                className="h-2 bg-secondary rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Technology Stack
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
SkillsSection;
