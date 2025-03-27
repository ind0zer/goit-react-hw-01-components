export const StatisticInfo = ({ label, percentage }) => {
  return (
      <li>
        <p>{label}</p>
        <p>{percentage}%</p>
      </li>
  );
};
