import React from 'react';
import './Login2.css';
import logoGoogle from '../Assets/imagesLogin/logo-google.png'
import logo from '../Assets/imagesLogin/logo.png'

export const handleSignInClick = () => {
    window.location.href = '#';
}

export const Login = () => {

    return (
        <div className='container-login'>
            <div className="caja-login-2">
                <div className="welcome">
                    <p>Welcome</p>
                </div>
                <div className="logo-login">
                    <img src={logo} alt="" />
                </div>

                <div className="email-password">
                    <div className="sign-in-container" onClick={handleSignInClick}>
                        <img src={logoGoogle} alt="" />
                        <h3>Sing in with Google</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login