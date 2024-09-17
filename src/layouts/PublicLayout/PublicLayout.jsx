"use client";
import React from 'react';
import styles from './PublicLayout.module.css';
import PropTypes from 'prop-types';

const PublicLayout = ({children}) => {
	return (
		<div className={styles.publiclayout}>
		public layout works
 			{children}
 		</div>
	);
};

PublicLayout.propTypes = {};

export default PublicLayout;