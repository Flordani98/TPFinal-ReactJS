"use client";
import React from 'react';
import styles from './HeaderComponent.module.css';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { NavLink} from 'react-router-dom';
import logoApp from '../../assets/logo-app.png'

const HeaderComponent = ({ }) => {
	
	const {logout} = useAuth();
	const navigate = useNavigate();


	const handleExitClick = () => {
		logout();
		navigate("/")
	}

	return (
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
	);
};

HeaderComponent.propTypes = {};

export default HeaderComponent;