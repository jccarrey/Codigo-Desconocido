import React, { useState } from 'react';
import './Perfil.css';
import logo from '../Assets/imagesHero/logo.png';

export const handleSignInClick = () => {
    window.location.href = '#';
}

export const Perfil = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleMessageSend = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue]);
            setInputValue('');
        }
    };

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
                <div className="icono-perfil">
                    <a href="perfil"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg></a>User
                </div>
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
                        {/* <div className="dni-user">
                            <p>DNI</p>
                            <input type="text" />
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="section-2-info-user-perfil">

                <div className="amigos-1er-div">
                    <div className="titulo-1er-div-amigos">
                        <h3>Amigos</h3>
                    </div>
                    <div className="solicitud-amigo">
                        <div className="info-amigo">
                            <div className="foto-amigo">

                            </div>
                            <h3>Amigo 1</h3>
                            <p>xxxxxxxxxxxxxxxxxxxx@gmail.com</p>
                            <div className="chat-eliminar">
                                <div className="chat">
                                    <p>Iniciar Chat</p>
                                </div>

                                <div className="eliminar">
                                    <p>Eliminar Amigo</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-amigo">
                            <div className="foto-amigo">

                            </div>
                            <h3>Amigo 1</h3>
                            <p>xxxxxxxxxxxxxxxxxxxx@gmail.com</p>
                            <div className="chat-eliminar">
                                <div className="chat">
                                    <p>Iniciar Chat</p>
                                </div>

                                <div className="eliminar">
                                    <p>Eliminar Amigo</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-amigo">
                            <div className="foto-amigo">

                            </div>
                            <h3>Amigo 1</h3>
                            <p>xxxxxxxxxxxxxxxxxxxx@gmail.com</p>
                            <div className="chat-eliminar">
                                <div className="chat">
                                    <p>Iniciar Chat</p>
                                </div>

                                <div className="eliminar">
                                    <p>Eliminar Amigo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="amigos-2do-div">
                    <div className="titulo-2do-div-amigos">
                        <h3>Buscar amigos</h3>
                    </div>
                    <div className="segundo-div-amigos">
                        <div className="info-amigo">
                            <div className="foto-amigo">

                            </div>
                            <h3>Amigo 1</h3>
                            <p>xxxxxxxxxxxxxxxxxxxx@gmail.com</p>
                            <div className="enviar-solicitud">
                                <p>Enviar solicitud</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="amigos-3er-div">
                    <div className="titulo-3er-div-amigos">
                        <h3>Solicitudes</h3>
                    </div>
                    <div className="tercer-div-amigos">
                        <div className="info-amigo">
                            <div className="foto-amigo">

                            </div>
                            <h3>Amigo 1</h3>
                            <p>xxxxxxxxxxxxxxxxxxxx@gmail.com</p>
                            <div className="aceptar-eliminar-solicitud">
                                <div className="chat">
                                    <p>Aceptar</p>
                                </div>

                                <div className="eliminar">
                                    <p>Rechazar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="contenedor-footer-top">
                    <div className="logo-footer">
                        <img src={logo} alt="" />
                    </div>

                    <div className="pages">
                        <h3>PÁGINAS</h3>
                        <a href="index" className="links">
                            <p>Home</p>
                        </a>
                        <a href="about" className="links">
                            <p>Sobre Nosotros</p>
                        </a>
                        <a href="shop" className="links">
                            <p>Scape Rooms</p>
                        </a>
                        <a href="contact" className="links">
                            <p>Contacto</p>
                        </a>
                    </div>

                    <div className="policies">
                        <h3>POLÍTICAS</h3>
                        <a href="home" className="links">
                            <p>Política de Privacidad</p>
                        </a>
                        <a href="home" className="links">
                            <p>Política de Cookies</p>
                        </a>
                        <a href="home" className="links">
                            <p>Condiciones y terminos</p>
                        </a>
                        <a href="home" className="links">
                            <p>Terminos de uso</p>
                        </a>
                    </div>

                    <div className="social-media">
                        <h3>REDES SOCIALES</h3>
                        <a href="home" className="links">
                            <p>Facebook</p>
                        </a>
                        <a href="home" className="links">
                            <p>Instagram</p>
                        </a>
                        <a href="home" className="links">
                            <p>LinkedIn</p>
                        </a>
                    </div>
                </div>
            </footer>

            {/* Chat icon and chat window */}
            <div className="chat-icon" onClick={toggleChat}>
                <i className="bi bi-chat-dots-fill"></i>
            </div>
            {isChatOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <p>Chat with us</p>
                        <button onClick={toggleChat}>✖</button>
                    </div>
                    <div className="chat-body">
                        {messages.map((message, index) => (
                            <p key={index}>{message}</p>
                        ))}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={handleMessageSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Perfil;
