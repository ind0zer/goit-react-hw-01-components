export const SocialInfo = ({ avatar, username, tag, location, stats }) => {
    return (
        <div>
            <img src={avatar} alt="avatar" />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
            <ul>
                <li>
                    <p>Followers</p>
                    <p>{stats.followers}</p>
                </li>
                <li>
                    <p>Views</p>
                    <p>{stats.views}</p>
                </li>
                <li>
                    <p>Likes</p>
                    <p>{stats.likes}</p>
                </li>
            </ul>
        </div>
    );
};
