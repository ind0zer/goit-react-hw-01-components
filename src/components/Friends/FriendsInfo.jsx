export const FriendsInfo = ({ avatar, name, isOnline}) => {
  console.log(avatar)
  return (
      <li>
        <p>{isOnline}</p>
        <img src={avatar} alt="" />
        <p>{name}</p>
      </li>
  );
};
