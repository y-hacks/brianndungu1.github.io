import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Generate mock contribution data
const generateContributions = () => {
  const weeks = 52;
  const daysPerWeek = 7;
  const contributions: number[][] = [];

  for (let week = 0; week < weeks; week++) {
    const weekData: number[] = [];
    for (let day = 0; day < daysPerWeek; day++) {
      // Activity intensity level (0–4)
      weekData.push(Math.floor(Math.random() * 5));
    }
    contributions.push(weekData);
  }

  return contributions;
};

// Safe Tailwind color mapping (replace later with your custom tokens if needed)
const getContributionColor = (level: number) => {
  const colors = [
    "bg-gray-200",
    "bg-green-200",
    "bg-green-400",
    "bg-green-600",
    "bg-green-800",
  ];

  return colors[level] ?? colors[0];
};

const ContributionGraph = () => {
  const [contributions, setContributions] = useState<number[][]>([]);

  // Generate data only on client to avoid hydration issues
  useEffect(() => {
    setContributions(generateContributions());
  }, []);

  if (!contributions.length) return null;

  const totalContributions = contributions
    .flat()
    .reduce((acc, level) => acc + level, 0);

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
            <span className="text-foreground font-semibold">
              {totalContributions}
            </span>{" "}
            activity points in the last year
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.15,
                      delay: weekIndex * 0.005 + dayIndex * 0.005,
                    }}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(
                      level
                    )} transition-colors hover:ring-1 hover:ring-green-500/50`}
                    title={`Activity level: ${level}`}
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
