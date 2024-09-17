"use client";
import React from 'react';
import styles from './PrivateLayout.module.css';
import PropTypes from 'prop-types';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import { Outlet } from 'react-router-dom';


const PrivateLayout = ({ }) => {
	return (
		<div className={styles.privatelayout}>
			<HeaderComponent />
			<main>
				<Outlet/>
			</main>
			<FooterComponent />
		</div>
	);
};

PrivateLayout.propTypes = {};

export default PrivateLayout;