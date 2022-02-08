
import {useRef } from 'react';
import React from 'react';
import './topbar.scss';
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import axios from 'axios';
import { useNavigate } from "react-router";



export default function Topbar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const searchText = useRef();
    const history = useNavigate();

    const handleSearch = async () =>{
        const searchUsername = searchText.current.value;
        try{
            await axios("/users?username=" + searchUsername);
            history(`/profile/${searchUsername}`);
        }catch(err){
            alert("User not found!")
        }

    }


    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">RedPanda</span>
                </Link>

            </div>
            <div className="topbarCenter">
                <div className="searchbar">

                    <Search className="searchIcon" onClick={handleSearch}/>
                    <input placeholder="Search for friends, posts or videos." className="searchInput" ref={searchText}/>

                    <Search className="searchIcon" />
                    <input placeholder="Search for friends, posts or videos." className="searchInput" />

                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarlink">Homepage</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIcon">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIcon">
                        <Link to="/messenger" style={{ color:"black" }}>
                            <Chat />
                            <span className="topbarIconBadge">1</span>
                        </Link>
                    </div>
                    <div className="topbarIcon">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img
                        src={
                            user.profilePicture
                                ? PF + user.profilePicture
                                : PF + "person/noAvatar.png"
                        }
                        alt=""
                        className="topbarImg"
                    />
                </Link>
            </div>
        </div>
    )
}
