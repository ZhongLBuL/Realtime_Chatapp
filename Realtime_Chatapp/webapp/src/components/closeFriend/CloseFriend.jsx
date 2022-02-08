import React from 'react'
import './closeFriend.scss'


/**
 * the left- bottom part of close friends
 * @param {user} user from  
 * @returns function closefriend
 */

export default function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="leftbarFriend">
            <img src={PF+user.profilePicture} alt="" className="leftbarFriendImg" />
            <span className="leftbarFriendName">{user.username}</span>
        </li>
    )
}
