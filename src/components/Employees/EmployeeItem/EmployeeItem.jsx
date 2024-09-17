"use client";
import React from 'react';
import styles from './EmployeeItem.module.css';
import PropTypes from 'prop-types';

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() +
	string.slice(1).toLowerCase();
};


const EmployeeItem = ({ employee }) => {

	return (
		<tr className={styles.employeeitem}>
				<td>{capitalizeFirstLetter(employee.name)}</td>
				<td>{capitalizeFirstLetter(employee.position)}</td>
				<td>{capitalizeFirstLetter(employee.department)}</td>
			<td><button>Ver detalles</button></td>
			<td><button>Eliminar</button></td>
		</tr>
	);
};

EmployeeItem.propTypes = {};

export default EmployeeItem;