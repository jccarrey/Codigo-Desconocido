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
            </header>

            <div id="hero">
                <div className="green">
                    <p data-value="CODIGO" className="hackletters">CODIGO</p>
                </div>

                <div className="haven">
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
            <Letters />

        </div>
    )
}

export default Home;
