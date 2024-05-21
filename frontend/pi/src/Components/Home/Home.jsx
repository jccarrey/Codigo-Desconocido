import React from 'react';

import Letters from './HackLetters.js';
import logo from '../Assets/imagesHero/logo.png'
import cartel1 from '../Assets/imagesHero/cartel-1.png'
import cartel2 from '../Assets/imagesHero/cartel-2.png'
import cartel3 from '../Assets/imagesHero/cartel-3.png'
import cartel4 from '../Assets/imagesHero/cartel-4.png'
import cartel5 from '../Assets/imagesHero/cartel-5.png'

import './Home.css';

export const handleSignInClick = () => {
    window.location.href = '#';
}

export const Home = () => {

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
                        <li className="list-nav-item"><a href="home" className="link active">INICIO</a></li>
                        <li className="list-nav-item"><a href="sobrenosotros" className="link">SOBRE NOSOTROS</a></li>
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

            <div id="hero">
                <div className="primera-linea-hero">
                    <p data-value="CODIGO" className="hackletters">CODIGO</p>
                </div>

                <div className="segunda-linea-hero">
                    <p data-value="DESCONOCIDO" className="hackletters">DESCONOCIDO</p>
                </div>

                <div className="scroll-down">
                    <p>SCROLL DOWN</p>
                </div>
            </div>

            <div className="section-1">
                <div className="our-project">
                    <div className="text-project">
                        <h3>Nuestro Proyecto</h3>
                        <h2>Codigo Desconocido</h2>
                        <p><span className='bold'>Código Desconocido</span> es mucho más que una simple aplicación de reserva de escape
                            rooms, es tu pasaporte a un mundo de intriga, desafíos y diversión sin límites donde
                            cada reserva es el comienzo de una <span className='bold'>emocionante odisea</span> donde cada paso te acerca
                            más al corazón del enigma y la emoción!</p>

                        <p>¿Cómo nació esta emocionante iniciativa? Todo comenzó como un proyecto de clase en la
                            asignatura de <span className='bold'>empresas</span>. Inspirados por nuestra pasión por los juegos de escape y la tecnología,
                            nos propusimos crear algo único: una <span className='bold'>plataforma</span> que no solo facilitara la reserva de escape rooms,
                            sino que también proporcionara una experiencia envolvente desde el momento en que abres la aplicación.</p>

                        <p> Así es como nació Código Desconocido: una <span className='bold'>fusión</span> perfecta entre el mundo físico de los escape rooms
                            y el poder de la tecnología digital. Desde entonces, hemos estado trabajando incansablemente para
                            llevar la <span className='bold'>emoción</span> y el <span className='bold'>desafío</span> de los escape rooms directamente a tu dispositivo móvil.</p>

                    </div>
                    <div className="imagen-project">

                    </div>
                </div>
            </div>

            <div className="section-2" id="section-2">
                <div className="que-hacer">
                    <div className="imagen-que-hacer">

                    </div>
                    <div className="text-que-hacer">
                        <h3>Descubre lo desconocido</h3>
                        <h2>¿Qué puedes hacer en la web?</h2>
                        <p>En <span className='bold'>Código Desconocido</span>, te ofrecemos una experiencia completa donde la diversión y la aventura
                            están a solo un <span className='bold'>click</span> de distancia. ¿Qué puedes hacer en nuestra plataforma?</p>
                        <p>-  <span className='bold'>Reservar Escape Rooms</span>: Explora una amplia selección de emocionantes escape rooms y reserva
                            tu próxima aventura con facilidad. Desde misterios históricos hasta desafíos modernos, tenemos
                            algo para todos los amantes de los enigmas y la intriga.</p>
                        <p>- <span className='bold'>Conectar con Otros Aficionados</span>: Únete a nuestra comunidad de entusiastas de los escape rooms
                            y comparte tus experiencias, consejos y trucos favoritos. ¡Conoce a otros jugadores apasionados y
                            sumérgete en conversaciones emocionantes sobre tus aventuras de escape favoritas!</p>
                        <p>- <span className='bold'>Solicitar la Adición de tu Escape Room</span>: ¿Tienes tu propio escape room y te gustaría que aparezca
                            en nuestra aplicación? ¡Nos encantaría conocerlo! Envíanos los detalles de tu escape room y
                            trabajaremos para agregarlo a nuestra plataforma, brindándote una mayor visibilidad.</p>
                    </div>
                </div>
            </div>

            <div className="section-3">
                <div className="section-3">
                    <div className="text-section-3">
                        <p>“Rooted Beginnings: Nurturing Our Origins, Embracing Our Future”</p>
                        <p>Journey Back to Our Roots: A Tapestry of Heritage Unveiled, Celebrating the Rich</p>
                    </div>
                </div>
            </div>

            <div className="section-4">
                <div className="our-best-scaperooms">
                    <div className="text-our-best-scaperooms">
                        <h3>Nuestro Proyecto</h3>
                        <h2>Scape-Rooms más reservados</h2>
                        <p>Bienvenido a la élite de la aventura: los escape rooms más reservados de Código Desconocido. Sumérgete en una experiencia única donde el
                            tiempo es tu enemigo y la astucia es tu mejor aliado. Nuestros escape rooms han sido cuidadosamente diseñados para desafiar tus habilidades
                            mentales, tu trabajo en equipo y tu capacidad para resolver enigmas en un entorno lleno de emoción y misterio.</p>

                    </div>
                    <div class="carousel-container">
                        <div className="galeria">
                            <div className="slide" id="foto1">
                                <img src={cartel1} alt="" />
                            </div>

                            <div className="slide" id="foto2">
                                <img src={cartel2} alt="" />
                            </div>

                            <div className="slide" id="foto3">
                                <img src={cartel3} alt="" />
                            </div>
                            <div className="slide" id="foto1">
                                <img src={cartel4} alt="" />
                            </div>

                            <div className="slide" id="foto2">
                                <img src={cartel5} alt="" />
                            </div>

                            <div className="slide" id="foto3">
                                <img src={cartel3} alt="" />
                            </div>
                            <div className="slide" id="foto1">
                                <img src={cartel1} alt="" />
                            </div>

                            <div className="slide" id="foto2">
                                <img src={cartel2} alt="" />
                            </div>

                            <div className="slide" id="foto3">
                                <img src={cartel3} alt="" />
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
                        <a href="sobrenosotros" className="links">
                            <p>Sobre Nosotros</p>
                        </a>
                        <a href="scaperooms" className="links">
                            <p>Scape Rooms</p>
                        </a>
                        <a href="contacto" className="links">
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
            <Letters />

        </div>
    )
}

export default Home;
