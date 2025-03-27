import stats from "./fdata.json";
import { StatisticInfo } from "./StatisticInfo";

export const Statistic = () => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        {stats.map((stat) => (
          <StatisticInfo key={stat.id} label={stat.label} percentage={stat.percentage} />
        ))}
      </ul>
    </div>
  );
};
