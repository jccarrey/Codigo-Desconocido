import React from 'react';
import './Perfil.css';
import logo from '../Assets/imagesHero/logo.png'

export const handleSignInClick = () => {
    window.location.href = '#';
}

export const Perfil = () => {

    return (
        <div className='container'>
            <header role="banner" id="header-perfil">
                <div className="logo" onClick={handleSignInClick}>
                    <img src={logo} alt='logo' />
                </div>

                <button className="abrir-menu" id="abrir"><i className="bi bi-list"></i></button>

                <nav role="navigation" className="main-nav" id="nav">
                    <button className="cerrar-menu" id="cerrar"><i className="bi bi-x-lg"></i></button>
                    <ul className="list-nav">
                        <li className="list-nav-item"><a href="home" className="link">INICIO</a></li>
                        <li className="list-nav-item"><a href="sobrenosotros" className="link">SOBRE NOSOTROS</a></li>
                        <li className="list-nav-item"><a href="scaperooms" className="link ">SCAPE ROOMS</a></li>
                        <li className="list-nav-item"><a href="contacto" className="link">CONTACTO</a></li>
                    </ul>
                </nav>
            </header>

            <div className="section-1-info-user-perfil">
                <div className="perfil-1er-div">
                    <div className="foto-user">

                    </div>
                    <div className="nombre-email-user">
                        <h3>Juan Carlos Carballo Reyes</h3>
                        <p>xxxxxxxxxxxxxxxxxxxx@gmail.com</p>
                    </div>
                </div>

                <div className="perfil-2do-div">
                    <div className="descripcion-user">
                        <p>Descripcion</p>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div className="info-user">
                        <div className="nombre-user">
                            <p>Nombre</p>
                            <input type="text" />
                        </div>
                        <div className="correo-user">
                            <p>Correo</p>
                            <input type="text" />
                        </div>
                        <div className="dni-user">
                            <p>DNI</p>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil