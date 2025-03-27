import { SocialInfo } from "./SocialInfo";
// import { CiTimer } from "react-icons/ci";
// import { LuWheat, LuProportions } from "react-icons/lu";
// import { FaGripLinesVertical } from "react-icons/fa6";
// import PropTypes from 'prop-types';
import user from './user.json'

export const Social = () => {
    return (
        <div>
            <h2>Social Account</h2>
            <SocialInfo avatar={user.avatar} username={user.username} tag={user.tag} location={user.location} stats={user.stats}/>
        </div>
    )
}