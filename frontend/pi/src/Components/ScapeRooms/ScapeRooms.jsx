import React, { useState } from 'react';
import Nav from '../Home/nav.js';
import logo from '../Assets/imagesHero/logo.png';
import './ScapeRooms.css';

export const ScapeRooms = () => {
    const [mostrarCiudades, setMostrarCiudades] = useState(false);
    const [mostrarDificultad, setMostrarDificultad] = useState(false);
    const [mostrarTematicas, setMostrarTematicas] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleCiudades = () => {
        setMostrarCiudades(!mostrarCiudades);
    };

    const toggleDificultad = () => {
        setMostrarDificultad(!mostrarDificultad);
    };

    const toggleTematicas = () => {
        setMostrarTematicas(!mostrarTematicas);
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleMessageSend = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue]);
            setInputValue('');
        }
    };

    const handleSignInClick = () => {
        window.location.href = '#';
    }

    const handleSelectClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className='container'>
            <header role="banner">
                <div className="logo" onClick={handleSignInClick}>
                    <img src={logo} alt='logo' />
                </div>

                <button className="abrir-menu" id="abrir"><i className="bi bi-list"></i></button>

                <nav role="navigation" className="main-nav" id="nav">
                    <button className="cerrar-menu" id="cerrar"><i className="bi bi-x-lg"></i></button>
                    <ul className="list-nav">
                        <li className="list-nav-item"><a href="home" className="link">INICIO</a></li>
                        <li className="list-nav-item"><a href="sobrenosotros" className="link">SOBRE NOSOTROS</a></li>
                        <li className="list-nav-item"><a href="scaperooms" className="link active">SCAPE ROOMS</a></li>
                        <li className="list-nav-item"><a href="contacto" className="link">CONTACTO</a></li>
                    </ul>
                </nav>
                <div className="icono-perfil">
                    <a href="perfil"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg></a>User
                </div>
            </header>

            <div id="hero-scaperooms">
                <div className="primera-linea-hero-scaperooms">
                    <p>SALAS DE</p>
                </div>

                <div className="segunda-linea-hero-scaperooms">
                    <p>SCAPEROOMS</p>
                </div>

                <div className="scroll-down">
                    <p>SCROLL DOWN</p>
                </div>
            </div>

            <div className="section-1-scaperooms">
                <div className="rectangulo-1-filtros-scaperooms">
                    <p id="como">¿Cómo lo prefieres?</p>
                    <div className="filtros-scaperooms">
                        <div className="ubicacion" onClick={toggleCiudades}>
                            <p id="rectangulo-ubicacion">Ubicación</p>
                            {mostrarCiudades && (
                                <div className="ciudades">
                                    <select onClick={handleSelectClick}>
                                        <option value="ciudad1">Ciudad 1</option>
                                        <option value="ciudad2">Ciudad 2</option>
                                        <option value="ciudad3">Ciudad 3</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        <div className="dificultad" onClick={toggleDificultad}>
                            <p id="rectangulo-dificultad">Dificultad</p>
                            {mostrarDificultad && (
                                <div className="nivel-dificultad">
                                    <select onClick={handleSelectClick}>
                                        <option value="facil">Fácil</option>
                                        <option value="intermedio">Intermedio</option>
                                        <option value="dificil">Difícil</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        <div className="tematicas" onClick={toggleTematicas}>
                            <p id="rectangulo-tematica">Temáticas</p>
                            {mostrarTematicas && (
                                <div className="lista-tematicas">
                                    <select onClick={handleSelectClick}>
                                        <option value="tematica1">Temática 1</option>
                                        <option value="tematica2">Temática 2</option>
                                        <option value="tematica3">Temática 3</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        <div className="buscar">
                            <p>🔎</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-2-scaperooms">
                <div className="lista-scaperooms">
                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id="imagen-scaperoom-1">
                        </div>
                        <div className="info-scaperoom">
                            <div className="nombre-scaperoom">
                                <p>El hospital abandonado</p>
                            </div>
                            <div className="caracteristicas-scaperoom">
                                <p>👤 2-3 Personas</p>
                                <p>❌ Avanzado</p>
                                <p>🔐 Encontrar</p>
                            </div>
                            <div className="descripcion-scaperoom">
                                <p>Explora los pasillos olvidados de un hospital desolado, donde los susurros de los fantasmas del pasado te guiarán hacia la libertad. </p>
                            </div>
                            <div className="precio-y-reserva">
                                <a href="book"><p id="reserva-ahora">RESERVA AHORA ➡</p></a>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>
                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id="imagen-scaperoom-2">
                        </div>
                        <div className="info-scaperoom">
                            <div className="nombre-scaperoom">
                                <p>El asesino siniestro</p>
                            </div>
                            <div className="caracteristicas-scaperoom">
                                <p>👤 2-3 Personas</p>
                                <p>❌ Avanzado</p>
                                <p>🔐 Encontrar</p>
                            </div>
                            <div className="descripcion-scaperoom">
                                <p>Adéntrate en la mente retorcida de un asesino en serie y descifra sus macabros rompecabezas para escapar de su mortal juego.</p>
                            </div>
                            <div className="precio-y-reserva">
                                <a href="book"><p id="reserva-ahora">RESERVA AHORA ➡</p></a>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>
                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id="imagen-scaperoom-3">
                        </div>
                        <div className="info-scaperoom">
                            <div className="nombre-scaperoom">
                                <p>Desesperacion infinita</p>
                            </div>
                            <div className="caracteristicas-scaperoom">
                                <p>👤 2-3 Personas</p>
                                <p>❌ Avanzado</p>
                                <p>🔐 Encontrar</p>
                            </div>
                            <div className="descripcion-scaperoom">
                                <p>Sumérgete en una dimensión paralela donde el tiempo se distorsiona y cada segundo cuenta.</p>
                            </div>
                            <div className="precio-y-reserva">
                                <a href="book"><p id="reserva-ahora">RESERVA AHORA ➡</p></a>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>
                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id="imagen-scaperoom-4">
                        </div>
                        <div className="info-scaperoom">
                            <div className="nombre-scaperoom">
                                <p>La cueva oscura</p>
                            </div>
                            <div className="caracteristicas-scaperoom">
                                <p>👤 2-3 Personas</p>
                                <p>❌ Avanzado</p>
                                <p>🔐 Encontrar</p>
                            </div>
                            <div className="descripcion-scaperoom">
                                <p>Descubre los secretos ocultos en las profundidades de una cueva misteriosa, donde las sombras esconden peligros inimaginables. </p>
                            </div>
                            <div className="precio-y-reserva">
                                <a href="book"><p id="reserva-ahora">RESERVA AHORA ➡</p></a>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>
                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id="imagen-scaperoom-5">
                        </div>
                        <div className="info-scaperoom">
                            <div className="nombre-scaperoom">
                                <p>Escapa de la bestia</p>
                            </div>
                            <div className="caracteristicas-scaperoom">
                                <p>👤 2-3 Personas</p>
                                <p>❌ Avanzado</p>
                                <p>🔐 Encontrar</p>
                            </div>
                            <div className="descripcion-scaperoom">
                                <p>Enfréntate a una criatura de pesadilla en un juego de vida o muerte. </p>
                            </div>
                            <div className="precio-y-reserva">
                                <a href="book"><p id="reserva-ahora">RESERVA AHORA ➡</p></a>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>
                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id="imagen-scaperoom-2">
                        </div>
                        <div className="info-scaperoom">
                            <div className="nombre-scaperoom">
                                <p>El asesino siniestro</p>
                            </div>
                            <div className="caracteristicas-scaperoom">
                                <p>👤 2-3 Personas</p>
                                <p>❌ Avanzado</p>
                                <p>🔐 Encontrar</p>
                            </div>
                            <div className="descripcion-scaperoom">
                                <p>Adéntrate en la mente retorcida de un asesino en serie y descifra sus macabros rompecabezas para escapar de su mortal juego.</p>
                            </div>
                            <div className="precio-y-reserva">
                                <a href="book"><p id="reserva-ahora">RESERVA AHORA ➡</p></a>
                                <p>15€ / Persona</p>
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
                            <p>
                                Instagram
                            </p>
                        </a>
                        <a href="home" className="links">
                            <p>
                                Twitter
                            </p>
                        </a>
                        <a href="home" className="links">
                            <p>
                                Youtube
                            </p>
                        </a>
                        <a href="home" className="links">
                            <p>
                                Facebook
                            </p>
                        </a>
                    </div>
                </div>

                <div className="contenedor-footer-bottom">
                    <p>© Código Desconocido 2024 ( Todos los derechos reservados )</p>
                </div>
            </footer>

            {/* Chat Icon and Chat Window */}
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
            <Nav />
        </div>
    )
}

export default ScapeRooms;
