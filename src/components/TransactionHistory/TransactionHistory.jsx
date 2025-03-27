import stats from "./fdata.json";
import { TransactionHistoryInfo } from "./TransactionHistoryInfo";

export const TransactionHistory = () => {
  return (
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {stats.map((stat) => (
      <TransactionHistoryInfo id={stat.id} type={stat.type} amount={stat.amount} currency={stat.currency}/>
    ))}
  </tbody>
</table>
  );
};
