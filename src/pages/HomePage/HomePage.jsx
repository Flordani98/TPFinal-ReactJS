"use client";
import React from 'react';
import styles from './HomePage.module.css';
import PropTypes from 'prop-types';
import logoApp from '../../assets/logo-app.png'
import imgHero from '../../assets/hero-home.jpg'
import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

const HomePage = ({  }) => {


	const {logout} = useAuth();
	const navigate = useNavigate();

	const handleExitClick = () => {
		logout();
		navigate("/")
	}


	return (
		<div className={styles.homepage}>
			<header className={styles.header}>
				<a><img className={styles['logo-app']} src={logoApp} alt="Logo de la App"></img></a>

				<nav className={styles['nav-container']}>
					<ul className={styles['main-menu-nav']}>
						<li><NavLink to="/home" activeclassname="active" >Inicio</NavLink></li>
						<li><NavLink to="/empleados" activeclassname="active" >Empleados</NavLink></li>
						<li><NavLink to="/nosotros" activeclassname="active"  >Sobre Nosotros</NavLink></li>
						<li><NavLink to="/contacto" activeclassname="active"  >Contacto</NavLink></li>
						<li><NavLink to="/mi-perfil" activeclassname="active"  >Mi perfil</NavLink></li>
					</ul>
				</nav>
				<button onClick={handleExitClick}>Salir</button>

			</header>


			<section className={styles.hero}>

				<div className={styles['hero-content']}>
					<h1>Mi Manager App</h1>
					<h2>Gestiona el talento de tu empresa en el menor tiempo</h2>
					<p>Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.</p>
					<button>Empezar</button>
				</div>
				<img className={styles['hero-img']} src={imgHero} alt="Grupo de personas diversas que tienen una reunión de negocios "></img>

			</section>


			<footer className={styles.footer}>
				<div className={styles['footer-principal']}>

					<div className={styles['footer-logo-social']} >

						<div className={styles['footer-logo']}>
							<a><img className={styles['logo-app']} src={logoApp} alt="Logo de la App"></img></a>
							<p>Consectetur adipiscing elit. Cras mollis </p>

						</div>

						<nav className={styles['social-icons']}>
							<a href="https://facebook.com" >F</a>
							<a href="https://twitter.com" >T</a>
							<a href="https://linkedin.com">I</a>
							<a>W</a>
						</nav>

					</div>

					<div className={styles["footer-links"]}>
						<h3>Enlaces Rápidos</h3>
						<ul>
							<li><a href="#inicio">Inicio</a></li>
							<li><a href="#empleados">Empleados</a></li>
							<li><a href="#contacto">Contacto</a></li>
							<li><a href="#privacidad">Política de Privacidad</a></li>
						</ul>
					</div>

					<div className={styles["footer-links"]}>
						<h3>Enlaces Adicionales</h3>
						<ul>
							<li><a href="#about">Acerca de</a></li>
							<li><a href="#services">Servicios</a></li>
							<li><a href="#faq">FAQ</a></li>
							<li><a href="#support">Soporte</a></li>
						</ul>
					</div>
				</div>

				<div className={styles["footer-bottom"]}>
					<p>&copy; 2024 Mi Manager App. Todos los derechos reservados.</p>
				</div>

			</footer>

		</div>
	);
};

HomePage.propTypes = {};

export default HomePage;