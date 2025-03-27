import friends from './fdata.json'
import { FriendsInfo } from "./FriendsInfo";

export const Friends = () => {
  return (
    <div>
    <h2>Friends List</h2>
    <ul>
      {friends.map((stat) => (
        <FriendsInfo key={stat.id} isOnline={stat.isOnline ? "Online" : "Offline" } avatar={stat.avatar} name={stat.name}/>
      ))}
    </ul>
    </div>
  );
};
