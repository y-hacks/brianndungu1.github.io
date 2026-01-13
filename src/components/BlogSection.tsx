import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Network Reconnaissance with Nmap: Techniques, Flags, and Pitfalls",
    excerpt:
      "A practical breakdown of Nmap scanning techniques, common flags, and how reconnaissance results inform later attack and defense decisions in real-world environments.",
    date: "Jan 5, 2026",
    readTime: "9 min read",
    category: "Reconnaissance",
    url: "#",
  },
  {
    title: "Threat Modeling Cloud Applications on Azure",
    excerpt:
      "An introduction to threat modeling for cloud-native workloads, covering attack surfaces, IAM risks, network exposure, and common misconfigurations in Azure environments.",
    date: "Dec 28, 2025",
    readTime: "11 min read",
    category: "Cloud Security",
    url: "#",
  },
  {
    title: "Hardening Node.js APIs: A Security-First Approach",
    excerpt:
      "Security considerations for Node.js APIs including authentication, authorization, input validation, dependency risks, and secure deployment practices.",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    category: "Application Security",
    url: "#",
  },
];

const categoryColors: Record<string, string> = {
  Reconnaissance: "bg-red-500/10 text-red-400 border-red-500/20",
  "Cloud Security": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "Application Security": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

const BlogSection = () => {
  return (
    <section id="blogs" className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Writing & Security Notes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Write-ups, research notes, and lessons learned from hands-on
            cybersecurity labs, cloud security experiments, and secure
            engineering practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[post.category]}`}
                >
                  {post.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

