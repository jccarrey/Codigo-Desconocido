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
            </header>

            <div id="hero-scaperooms">
                <div className="green">
                    <p data-value="CODIGO" className="hackletters">SALAS DE</p>
                </div>

                <div className="haven">
                    <p data-value="DESCONOCIDO" className="hackletters">SCAPEROOMS</p>
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
                        <div className="imagen-scaperoom" id = "imagen-scaperoom-1">

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
                                <p id = "reserva-ahora">RESERVA AHORA ➡</p>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>

                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id = "imagen-scaperoom-2">

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
                                <p id = "reserva-ahora">RESERVA AHORA ➡</p>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>

                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id = "imagen-scaperoom-3">

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
                                <p id = "reserva-ahora">RESERVA AHORA ➡</p>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>

                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id = "imagen-scaperoom-4">

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
                                <p id = "reserva-ahora">RESERVA AHORA ➡</p>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>

                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id = "imagen-scaperoom-5">

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
                                <p id = "reserva-ahora">RESERVA AHORA ➡</p>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>

                    <div className="caja-scaperoom">
                        <div className="imagen-scaperoom" id = "imagen-scaperoom-2">

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
                                <a href="book"><p id = "reserva-ahora">RESERVA AHORA ➡</p></a>
                                <p>15€ / Persona</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="cardcontainer">
                        <div class="card">
                            <div class="imgBx">
                                <img src={cueva} alt="" />
                            </div>
                            <div class="contentBx">
                                <h2>Nike Shoes</h2>
                                <div class="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div class="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#E">Buy Now</a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="imgBx">
                                <img src={cueva} alt="" />
                            </div>
                            <div class="contentBx">
                                <h2>Nike Shoes</h2>
                                <div class="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div class="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#E">Buy Now</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="imgBx">
                                <img src={cueva} alt="" />
                            </div>
                            <div class="contentBx">
                                <h2>Nike Shoes</h2>
                                <div class="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div class="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#E">Buy Now</a>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="imgBx">
                                <img src={cueva} alt="" />
                            </div>
                            <div class="contentBx">
                                <h2>Nike Shoes</h2>
                                <div class="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div class="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#E">Buy Now</a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="imgBx">
                                <img src={cueva} alt="" />
                            </div>
                            <div class="contentBx">
                                <h2>Nike Shoes</h2>
                                <div class="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div class="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#E">Buy Now</a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="imgBx">
                                <img src={cueva} alt="" />
                            </div>
                            <div class="contentBx">
                                <h2>Nike Shoes</h2>
                                <div class="size">
                                    <h3>Size :</h3>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                                <div class="color">
                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#E">Buy Now</a>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ScapeRooms;
