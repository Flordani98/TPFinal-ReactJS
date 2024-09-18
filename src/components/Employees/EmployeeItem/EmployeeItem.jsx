"use client";
import React, { useState } from 'react';
import styles from './EmployeeItem.module.css';
import PropTypes from 'prop-types';
import ViewEmployee from '../ViewEmployee/ViewEmployee';
import { useNavigate } from 'react-router-dom';

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() +
		string.slice(1).toLowerCase();
};

const EmployeeItem = ({ employee, onActionComplete }) => {

	const [showForm, setShowForm] = useState(false);
	const navigate = useNavigate();
	const handleAddEmployeeClick = () => {
		setShowForm(true);
	};

	const handleCloseForm = () => {
		setShowForm(false);
		navigate('/empleados');
	};


	const deleteEmployee = async (id) => {
		console.log("deleting user", id);

		try {
			const response = await fetch(`http://localhost:3000/employees/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				return;
			}

			onActionComplete();

		} catch {
			console.log("error")
		}
	}

	const handleViewDetails = () => {
        navigate(`/empleados/${employee.id}`);
    };


	return (

		<tr className={styles.employeeitem}>
			<td>{capitalizeFirstLetter(employee.name)}</td>
			<td>{capitalizeFirstLetter(employee.position)}</td>
			<td>{capitalizeFirstLetter(employee.department)}</td>
			<td><button onClick={handleViewDetails}>Ver detalles</button></td>
			<td><button className={styles.deletebutton} onClick={() => deleteEmployee(employee.id)}>Eliminar</button></td>
		</tr>

	);
};

EmployeeItem.propTypes = {};

export default EmployeeItem;