"use client";
import React from 'react';
import styles from './FooterComponent.module.css';
import PropTypes from 'prop-types';
import logoApp from '../../assets/logo-app.png'

const FooterComponent = ({ }) => {
	return (
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
				<p>&copy; 2024 My Manager App. Todos los derechos reservados.</p>
			</div>

		</footer>

	);
};

FooterComponent.propTypes = {};

export default FooterComponent;