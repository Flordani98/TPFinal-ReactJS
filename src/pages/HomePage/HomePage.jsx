"use client";
import React from 'react';
import styles from './HomePage.module.css';
import PropTypes from 'prop-types';
import imgHero from '../../assets/hero-home.jpg'


const HomePage = ({  }) => {

	return (
		<div className={styles.homepage}>

			<section className={styles.hero}>

				<div className={styles['hero-content']}>
					<h1>Mi Manager App</h1>
					<h2>Gestiona el talento de tu empresa en el menor tiempo</h2>
					<p>Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.</p>
					<button>Empezar</button>
				</div>
				<img className={styles['hero-img']} src={imgHero} alt="Grupo de personas diversas que tienen una reunión de negocios "></img>

			</section>


			
		</div>
	);
};

HomePage.propTypes = {};

export default HomePage;