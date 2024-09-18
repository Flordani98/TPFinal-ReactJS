"use client";
import React from 'react';
import styles from './FormCreateEmployee.module.css';
import PropTypes from 'prop-types';
import { useForm } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

const FormCreateEmployee = ({ onClose, onActionComplete }) => {

	const { values, handleChange, handleSubmit } = useForm({
		name: '',
		position: '',
		department: '',
		email: '',
		phone: ''
	});
	const navigate = useNavigate();

	
	const submitForm = async (e) => {
		console.log(values);

		try {
            const response = await fetch('http://localhost:3000/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                throw new Error('Fallo en crear empleado');
            }

			onActionComplete()
            navigate('/empleados');
        } catch (error) {
            console.error('Error:', error);
        }
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