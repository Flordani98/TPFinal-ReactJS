"use client";
import React, { useEffect, useState } from 'react';
import styles from './EmployeesPage.module.css';
import PropTypes from 'prop-types';
import EmployeesTable from '../../components/Employees/EmployeesTable/EmployeesTable';
import useFetch from '../../hooks/useFetch';

const EmployeesPage = ({ }) => {

	const [reload, setReload] = useState(false);
	const { data: employees, loading, error } = useFetch("http://localhost:3000/employees", [reload]);

    const reloadEmployees = () => {
        setReload(prev => !prev); 
    };

 
	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className={styles.employeespage}>

			<h1>Lista de empleados</h1>
			<section>
				<button>+ Nuevo Empleado</button>
				<EmployeesTable employees={employees} onActionComplete={reloadEmployees}/>
			</section>
		</div>
	);
};

EmployeesPage.propTypes = {};

export default EmployeesPage;