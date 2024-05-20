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
            </header>

            <div id="hero-book">
                <div className="green">
                    <p data-value="CODIGO" className="hackletters">RESERVA DE</p>
                </div>

                <div className="haven">
                    <p data-value="DESCONOCIDO" className="hackletters">SCAPEROOMS</p>
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
                                <option value="">s</option>
                                <option value="">s</option>
                                <option value="">s</option>
                                <option value="">s</option>
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


        </div >
    )
}

export default Book