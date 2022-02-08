import { useContext, useRef } from 'react'
import './login.scss'
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from '../../serverCalls';
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";



export default function Login() {
    const email = useRef();
    const password = useRef();
    // authenticate the user
    const { isFetching, dispatch } = useContext(AuthContext);

    // click login
    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };

    return (
        // login page
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">RedPanda</h3>
                    <span className="loginDesc">Connect with friends and the world around you on RedPanda.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {/* the user information is correct or not */}
                            {isFetching ? (
                                <CircularProgress  size="20px" />
                            ) : (
                                "Log In"
                            )}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>

                        <button type="primary" className="loginRegisterButton">
                                <Link to="/" style={{ textDecoration: "none",color:"white" }}>Create a New Account</Link>
                            </button>
                    
                    </form>
                </div>
            </div>
        </div>
    )
}
