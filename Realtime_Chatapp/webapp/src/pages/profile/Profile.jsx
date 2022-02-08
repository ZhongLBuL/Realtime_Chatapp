
import React, { useContext, useEffect } from 'react'
import './profile.scss'
import Leftbar from '../../components/leftbar/Leftbar';
import Middlepart from '../../components/middlepart/Middlepart';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar';
import axios from 'axios'
import { useParams } from 'react-router';

import { AuthContext } from "../../context/AuthContext";
=======

import { Link } from "react-router-dom";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = React.useState({});
    const username = useParams().username;

    const { user: currentUser } = useContext(AuthContext);
=======


    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        };
        fetchUser();
    }, [username]);


    function handleClick(e) {
        e.preventDefault();
        localStorage.removeItem("user");
        window.location.reload();

    }

	
	function handleClick(e) {
        localStorage.removeItem("user");
        window.location.reload();
      }


    return (
        <div>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">

                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={
                                user.coverPicture
                                    ? PF + user.coverPicture
                                    : PF + "person/noCover.png"
                            } alt="" className="profileCoverImg" />
                            <img src={
                                user.profilePicture
                                    ? PF + user.profilePicture
                                    : PF + "person/noAvatar.png"
                            } alt="" className="profileUserImg" />

                        </div>
                        {currentUser?.username === username && <div className="buttonWrapper">
                            <button className="changeUserInfo">
                            <Link to="/update" style={{ textDecoration: "none", color: "white" }}>Edit User</Link>
                                
                                </button>
                            <button onClick={handleClick} className="logOut">
                                <Link to="/login" style={{ textDecoration: "none", color: "white" }}>Log Out</Link>
                            </button>

                        </div>}


                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                    <div className="profileRightBottom">
                        <Middlepart username={username} usertest={user} />

                        </div></div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
						<button onClick={handleClick} className="logoutButton">
                            <Link to="/login" style={{ textDecoration: "none",color:"white" }}>Log Out</Link>
                        </button>
                    </div>
                    <div className="profileRightBottom">
                        <Middlepart username={username} />

                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </div>
    )
}
