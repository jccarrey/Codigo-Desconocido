import React, { useState } from 'react';

import logo from '../Assets/imagesHero/logo.png'
import './ScapeRooms.css';

export const ScapeRooms = () => {
    const [mostrarCiudades, setMostrarCiudades] = useState(false);
    const [mostrarDificultad, setMostrarDificultad] = useState(false);
    const [mostrarTematicas, setMostrarTematicas] = useState(false);

    const toggleCiudades = () => {
        setMostrarCiudades(!mostrarCiudades);
    };

    const toggleDificultad = () => {
        setMostrarDificultad(!mostrarDificultad);
    };

    const toggleTematicas = () => {
        setMostrarTematicas(!mostrarTematicas);
    };

    const handleSignInClick = () => {
        window.location.href = '#';
    }

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
                    <a href="perfil"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg></a>User
                </div>
            </header>

            <div id="hero-scaperooms">
                <div className="primera-linea-hero">
                    <p>SALAS DE</p>
                </div>

                <div className="segunda-linea-hero">
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
                                    <ul>
                                        <li>Ciudad 1</li>
                                        <li>Ciudad 2</li>
                                        <li>Ciudad 3</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="dificultad" onClick={toggleDificultad}>
                            <p id="rectangulo-dificultad">Dificultad</p>
                            {mostrarDificultad && (
                                <div className="nivel-dificultad">
                                    <ul>
                                        <li>Fácil</li>
                                        <li>Intermedio</li>
                                        <li>Difícil</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="tematicas" onClick={toggleTematicas}>
                            <p id="rectangulo-tematica">Temáticas</p>
                            {mostrarTematicas && (
                                <div className="lista-tematicas">
                                    <ul>
                                        <li>Temática 1</li>
                                        <li>Temática 2</li>
                                        <li>Temática 3</li>
                                    </ul>
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
                                <p id="reserva-ahora">RESERVA AHORA ➡</p>
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
                                <p id="reserva-ahora">RESERVA AHORA ➡</p>
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
                                <p id="reserva-ahora">RESERVA AHORA ➡</p>
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
                                <p id="reserva-ahora">RESERVA AHORA ➡</p>
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
                                <p id="reserva-ahora">RESERVA AHORA ➡</p>
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
                                <p>❌Avanzado</p>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path stroke="white" strokeWidth="2"
                                            d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13z" />
                                        <circle cx="16.5" cy="7.5" r="1.5" fill="white" />
                                        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" />
                                    </g>
                                </svg>Instagram
                            </p>
                        </a>
                        <a href="home" className="links">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                                    <path fill="white"
                                        d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                                </svg>Twitter
                            </p>
                        </a>
                        <a href="home" className="links">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path
                                            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path fill="white"
                                            d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.802 3.802 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954c0 .983-.052 2.011-.122 2.954l-.075.91c-.013.146-.026.287-.04.425a3.802 3.802 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A61.59 61.59 0 0 1 12 20a61.59 61.59 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.802 3.802 0 0 1-3.494-3.423l-.04-.425l-.075-.91A40.662 40.662 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91c.013-.146.026-.287.04-.425A3.802 3.802 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A61.676 61.676 0 0 1 12 4m0 2c-.825 0-1.674.022-2.5.056l-.978.047l-.939.055l-.882.06l-.808.063a1.802 1.802 0 0 0-1.666 1.623C4.11 9.113 4 10.618 4 12c0 1.382.11 2.887.227 4.096c.085.872.777 1.55 1.666 1.623l.808.062l.882.06l.939.056l.978.047c.826.034 1.675.056 2.5.056s1.674-.022 2.5-.056l.978-.047l.939-.055l.882-.06l.808-.063a1.802 1.802 0 0 0 1.666-1.623C19.89 14.887 20 13.382 20 12c0-1.382-.11-2.887-.227-4.096a1.802 1.802 0 0 0-1.666-1.623l-.808-.062l-.882-.06l-.939-.056l-.978-.047A60.693 60.693 0 0 0 12 6m-2 3.575a.6.6 0 0 1 .819-.559l.081.04l4.2 2.424a.6.6 0 0 1 .085.98l-.085.06l-4.2 2.425a.6.6 0 0 1-.894-.43l-.006-.09z" />
                                    </g>
                                </svg>Youtube
                            </p>
                        </a>
                        <a href="home" className="links">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="-2 -2 24 24">
                                    <g fill="white">
                                        <path
                                            d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937" />
                                        <path
                                            d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
                                    </g>
                                </svg>Facebook
                            </p>
                        </a>
                    </div>
                </div>

                <div className="contenedor-footer-bottom">
                    <p>© Código Desconocido 2024 ( Todos los derechos reservados )</p>
                </div>
            </footer>
        </div>
    )
}

export default ScapeRooms;
