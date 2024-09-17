"use client";
import React from 'react';
import styles from './EmployeesPage.module.css';
import PropTypes from 'prop-types';
import EmployeesTable from '../../components/Employees/EmployeesTable/EmployeesTable';

const employees = [
	{
		id: 1,
		name: "Florencia",
		position: "software engineer",
		department: "tecnologia",
		email: "flordani@gmail.com",
		phone: "225555335"
	},
	{
		id: 2,
		name: "ezequiel",
		position: "proyect manager",
		department: "tecnologia",
		email: "ezeqweq@gmail.com",
		phone: "88888888888"
	},
	{
		id: 3,
		name: "adrian",
		position: "ux designer",
		department: "tecnologia",
		email: "adrii@gmail.com",
		phone: "123345456"
	}

]

const EmployeesPage = ({ }) => {
	return (
		<div className={styles.employeespage}>

			<h1>Lista de empleados</h1>
			<section>
				<button>+ Nuevo Empleado</button>
				<EmployeesTable employees={employees} />
			</section>
		</div>
	);
};

EmployeesPage.propTypes = {};

export default EmployeesPage;