"use client";
import React from 'react';
import styles from './FormCreateEmployee.module.css';
import PropTypes from 'prop-types';
import { useForm } from '../../../hooks';

const FormCreateEmployee = ({ onClose }) => {

	const { values, handleChange, handleSubmit } = useForm({
		name: '',
		position: '',
		department: '',
		email: '',
		phone: ''
	});


	const submitForm = async (e) => {
		console.log(values);
		onClose();
	};



	return (
		<>
		<h2>Agregar Empleado</h2>
			<form className={styles.formcreateemployee} onSubmit={handleSubmit(submitForm)}>
			<label>
				Nombre:
				<input
					type="text"
					name="name"
					value={values.name}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Posición:
				<input
					type="text"
					name="position"
					value={values.position}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Departamento:
				<input
					type="text"
					name="department"
					value={values.department}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={values.email}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Teléfono:
				<input
					type="text"
					name="phone"
					value={values.phone}
					onChange={handleChange}
					required
				/>
			</label>
			<button className={styles['btn-submit']} type="submit">Crear Empleado</button>
		</form>
		</>
			
		
	);
};

FormCreateEmployee.propTypes = {};

export default FormCreateEmployee;