import React from 'react';

import Nav from '../Home/nav.js';
import logo from '../Assets/imagesHero/logo.png'
import './SobreNosotros.css';

export const handleSignInClick = () => {
    window.location.href = '#';
}

export const SobreNosotros = () => {

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
                        <li className="list-nav-item"><a href="sobrenosotros" className="link active">SOBRE NOSOTROS</a></li>
                        <li className="list-nav-item"><a href="scaperooms" className="link">SCAPE ROOMS</a></li>
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

            <div id="hero-sobrenosotros">
                <div className="primera-linea-hero-sobrenosotros">
                    <p>SOBRE</p>
                </div>

                <div className="segunda-linea-hero-sobrenosotros">
                    <p>NOSOTROS</p>
                </div>

                <div className="scroll-down">
                    <p>SCROLL DOWN</p>
                </div>
            </div>

            <div className="section-1-sobrenosotros">
                <div className="about-us">
                    <div className="imagen-about-us">

                    </div>
                    <div className="text-about-us">
                        <h3>Sobre nosotros</h3>
                        <h2>¿Quiénes somos?</h2>
                        <p>En <span className='bold'>Código Desconocido</span>, somos un equipo apasionado de entusiastas de los juegos de escape y la tecnología.
                            Nuestra misión es llevar la emoción y el desafío de los escape rooms directamente a tu dispositivo móvil, ofreciendo una experiencia envolvente desde el primer clic.</p>
                        <p>Creemos en el poder de la <span className='bold'>comunidad</span>. Únete a nosotros para compartir tus experiencias, consejos y trucos favoritos con otros entusiastas de los escape rooms.
                            Ya seas un novato buscando tu primer desafío o un veterano en busca de nuevas aventuras, nuestra plataforma tiene algo para todos.</p>
                        <p>Transformamos la fascinación por los enigmas y la tecnología en una plataforma única que te ofrece una experiencia de escape room como ninguna otra. Nuestra pasión por la
                            innovación y la aventura nos impulsa a crear un espacio donde cada usuario puede vivir momentos inolvidables y desafiantes.</p>
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
            <Nav />
        </div>
    )
}

export default SobreNosotros;