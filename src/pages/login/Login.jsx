import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const  error = useSelector((state)=> state.user.error)
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    };

    return (
        <div className="login">
            <div className="leftContainer">
                <img src="https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/login-bg.26a96a34.svg" alt="" className="imgBg" />
            </div>
            <div className="rightContainer">
                <div className="container1">
                    <h1 className="title">Welcome to Admin</h1>
                    <span className="newAccount">New to Admin? <a className="register" href="/register">Create an ancount</a></span>
                    <label htmlFor="username">Username</label>
                    <input className="Input"
                        type="text"
                        placeholder=""
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <label htmlFor="username">Password</label>
                    <input className="Input"
                        type="password"
                        placeholder=""
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    {error && <span className="error">Something went wrong...</span>}
                    <div className="forgot">
                        <div className="forgotLeft">
                            <input type="checkbox" name="" id="" />
                            <span>Remenber this device</span>
                        </div>
                        <div className="forgotRight">
                            <a href="/forgot" className="forgotPass">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="btn" onClick={handleClick} >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
