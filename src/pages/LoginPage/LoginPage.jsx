"use client";
import React from 'react';
import styles from './LoginPage.module.css';
import PropTypes from 'prop-types';

const LoginPage = ({ }) => {
	return (
		<div className={styles.loginpage}>
			{/* <div>
				<button>Registrarse</button>
				<button>Iniciar sesión</button>
			</div> */}

			<form>
				<div className={styles['form-group']}>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' name='email' required />

				</div>

				<div className={styles['form-group']}>
					<label htmlFor='password'>Contraseña</label>
					<input type='password' id='password' name='password' required />
				</div>

				<button className={styles['btn-submit']} type='submit'>Iniciar sesión</button>
			</form>

		</div>
	);
};

LoginPage.propTypes = {};

export default LoginPage;