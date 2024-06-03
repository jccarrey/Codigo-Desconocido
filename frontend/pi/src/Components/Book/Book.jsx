import React from 'react';
import './Book.css';
import logo from '../Assets/imagesHero/logo.png'

export const handleSignInClick = () => {
    window.location.href = '#';
}

export const Book = () => {

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

            <div id="hero-book">
                <div className="primera-linea-hero-book">
                    <p>RESERVA DE</p>
                </div>

                <div className="segunda-linea-hero-book">
                    <p>SCAPEROOMS</p>
                </div>

                <div className="scroll-down">
                    <p>SCROLL DOWN</p>
                </div>
            </div>

            <div className="section-1-book">
                <div className="info-booking">
                    <div className="scape-info-book">
                        <div className="image-scape-for-book">

                        </div>
                        <div className="titulo-card-book-scape">
                            <p>El asesino siniestro</p>
                        </div>
                        <div className="calendario">
                            <p>Fecha:</p>
                            <input type="date" name="" id="" />
                        </div>
                        <div className="hora-book">
                            <p>Hora:</p>
                            <select name="" id="">
                                <option value="">19:00</option>
                                <option value="">18:30</option>
                                <option value="">18:00</option>
                                <option value="">17:30</option>
                            </select>
                        </div>
                        <div className="dificultad-book">
                            <p>Dificultad:</p>
                            <p>Avanzada</p>
                        </div>
                        <div className="tematica-book">
                            <p>Temática:</p>
                            <p>Terror</p>
                        </div>
                        <div className="price-book">
                            <p>16€</p>
                        </div>
                    </div>
                    <div className="your-info-for-book">
                        <div className="titulo-your-informacion-for-book">
                            <h3>Pon tu información aquí:</h3>
                        </div>
                        <div className="hola">
                            <div className="nombre-book">
                                <p>Nombre</p>
                                <input type="text" />
                            </div>

                            <div className="apellido-book">
                                <p>Apellidos</p>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="caja-email-telefono">
                            <div className="email-book">
                                <p>Email</p>
                                <input type="email" name="" id="" />
                            </div>
                            <div className="telefono-book">
                                <p>Teléfono</p>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="observaciones-book">
                            <p>Observaciones</p>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div className="boton-reservar">
                            <p>RESERVAR</p>
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

        </div >
    )
}

export default Book