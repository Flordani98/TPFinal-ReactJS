"use client";
import React from 'react';
import styles from './LoginPage.module.css';
import PropTypes from 'prop-types';
import fondoTrabajo from '../../assets/fondo-trabajo.jpg'
import logoApp from '../../assets/logo-app.png'

const LoginPage = ({ }) => {
	return (
		<div className={styles['login-container']}>
			{/* <div>
				<button>Registrarse</button>
				<button>Iniciar sesión</button>
			</div> */}

			<div>
				<img className={styles['login-image']} src={fondoTrabajo} alt="elementos de organización en el trabajo"></img>
			</div>

			<div className={styles['form-content']}>

				
				<img className={styles['app-logo']} src={logoApp} alt="logo de empresa"></img>
				<h3 className={styles['form-title']}>Inicio de sesión</h3>
				<form>
					<div className={styles['form-group']}>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' name='email' placeholder='Ingrese su email' required />

					</div>

					<div className={styles['form-group']}>
						<label htmlFor='password'>Contraseña</label>
						<input type='password' id='password' name='password' placeholder='Ingrese su contraseña' required />
					</div>

					<button className={styles['btn-submit']} type='submit'>Iniciar sesión</button>
				</form>
			</div>
		</div>
	);
};

LoginPage.propTypes = {};

export default LoginPage;