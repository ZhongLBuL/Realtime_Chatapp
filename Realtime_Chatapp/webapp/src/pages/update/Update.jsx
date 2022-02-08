import React, { useContext, useRef} from "react";
import axios from "axios";
import './update.scss'
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export default function Update() {
    const { user: currentUser } = useContext(AuthContext);

    const password = useRef();
    const passwordAgain = useRef();
    const email = useRef();
    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
            window.location.reload();
        } else {
           const user = {
                userId: currentUser._id ,
                password: password.current.value,
                email:email.current.value
            };
            try {
                await axios.put(`/users/${currentUser._id}`, user);
                history(`/profile/${currentUser.username}`);
            } catch (err) {
                console.log(err);
            }
        }
    };


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">RedPanda</h3>
                    <span className="loginDesc">Connect with friends and the world around you on RedPanda.</span>
                </div>
                <div className="loginRight">
                    <div className="loginRightWrapper">
                        <form className="loginBox" onSubmit={handleClick}>
                        <input
                                placeholder="Email"
                                required
                                ref={email}
                                className="loginInput"
                                type="email"
                            />
                         
                            <input
                                placeholder="Password"
                                required
                                ref={password}
                                className="loginInput"
                                type="password"
                                minLength="6"
                            />
                            <input
                                placeholder="Password Again"
                                required
                                ref={passwordAgain}
                                className="loginInput"
                                type="password"
                            />
                            <button className="loginButton" type="submit">
                                Change Password
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}
