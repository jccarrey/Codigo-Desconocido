import React, { useState } from 'react';

import logo from '../Assets/imagesHero/logo.png'
import './ScapeRooms.css';
import cueva from '../Assets/imagesHero/cueva.png'

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
                    <div className="cardcontainer">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScapeRooms;
