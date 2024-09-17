"use client";
import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import PropTypes from 'prop-types';
import fondoTrabajo from '../../assets/fondo-trabajo.jpg'
import logoApp from '../../assets/logo-app.png'
import { useAuth, useForm } from '../../hooks';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = ({ }) => {
	
	const navigate = useNavigate();
	const{ values, handleChange, handleSubmit } = useForm({ email: "", password: "" });

	const { loading, isLoggedIn, login } = useAuth();

	if(isLoggedIn){
		return <Navigate to="/home" />
	}


	const submitForm  = async (e) => {
		await login();
		navigate("/home");

	};

	
	return (
		<div className={styles['login-container']}>

			<section>
				<img className={styles['login-image']} src={fondoTrabajo} alt="elementos de organización en el trabajo"></img>
			</section>

			<section className={styles['form-content']}>

				<img className={styles['app-logo']} src={logoApp} alt="logo de empresa"></img>
				<h3 className={styles['form-title']}>Inicio de sesión</h3>

				<form onSubmit={ handleSubmit(submitForm) }>
					<div className={styles['form-group']}>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' name='email' placeholder='Ingrese su email' required 
							onChange={handleChange} value={values.email}
						/>
					</div>

					<div className={styles['form-group']}>
						<label htmlFor='password'>Contraseña</label>
						<input type='password' id='password' name='password' placeholder='Ingrese su contraseña' required
						onChange={handleChange} value={values.password}/>
					</div>

					<button className={styles['btn-submit']} type='submit'>Iniciar sesión</button>
				</form>
			</section>
		</div>
	);
};

LoginPage.propTypes = {};

export default LoginPage;