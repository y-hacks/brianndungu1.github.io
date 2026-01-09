import { motion } from "framer-motion";

// Generate mock contribution data
const generateContributions = () => {
  const weeks = 52;
  const daysPerWeek = 7;
  const contributions: number[][] = [];

  for (let week = 0; week < weeks; week++) {
    const weekData: number[] = [];
    for (let day = 0; day < daysPerWeek; day++) {
      // Random contribution level (0-4)
      weekData.push(Math.floor(Math.random() * 5));
    }
    contributions.push(weekData);
  }
  return contributions;
};

const contributions = generateContributions();

const getContributionColor = (level: number) => {
  const colors = [
    "bg-secondary", // 0 contributions
    "bg-github-green/20", // 1-2 contributions
    "bg-github-green/40", // 3-5 contributions
    "bg-github-green/70", // 6-10 contributions
    "bg-primary", // 10+ contributions
  ];
  return colors[level];
};

const ContributionGraph = () => {
  const totalContributions = contributions
    .flat()
    .reduce((acc, level) => acc + level * 3, 0);

  return (
    <section className="px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Contribution Activity
          </h2>
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">{totalContributions}</span>{" "}
            contributions in the last year
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto pb-4"
        >
          <div className="flex gap-1 min-w-max">
            {contributions.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((level, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: weekIndex * 0.01 + dayIndex * 0.01,
                    }}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(level)} transition-colors hover:ring-1 hover:ring-primary/50`}
                    title={`${level * 3} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-4 text-sm text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
};

export default ContributionGraph;
