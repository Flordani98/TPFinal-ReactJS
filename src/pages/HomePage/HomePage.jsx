"use client";
import React from 'react';
import styles from './HomePage.module.css';
import PropTypes from 'prop-types';
import logoApp from '../../assets/logo-app.png'
import imgHero from '../../assets/hero-home.jpg'

const HomePage = ({ onLogout }) => {
	return (
		<div className='homepage'>
			<header>

				<nav>
					<ul>
						<li><a><img className={styles['logo-app']} src={logoApp} alt="Logo de la App"></img></a></li>
						<li><a>Inicio</a></li>
						<li><a>Empleados</a></li>
						<li><a>Sobre Nosotros</a></li>
						<li><a>Contacto</a></li>
						<li><a>Mi perfil</a></li>
					</ul>
					<button onClick={onLogout}>Salir</button>
				</nav>

				<div className={styles.hero}>

					<section lassName={styles['hero-content']}>
						<h1>Mi Manager App</h1>
						<h2>Gestiona el talento de tu empresa en el menor tiempo</h2>
						<p>Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.</p>
					</section>
					<img className={styles['hero-img']} src={imgHero} alt="Grupo de personas diversas que tienen una reunión de negocios "></img>

				</div>



			</header>


			HomePage works!
		</div>
	);
};

HomePage.propTypes = {};

export default HomePage;