"use client";
import React, { useEffect, useState } from 'react';
import styles from './ViewEmployee.module.css';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

const ViewEmployee = ({ }) => {

	// const navigate = useNavigate();

	const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            setLoading(true);  // Establecer estado de carga
            setError(null);    // Limpiar errores previos
            try {
				
                const response = await fetch(`http://localhost:3000/employees/${id}`);
                if (!response.ok) {
                    throw new Error('Empleado no encontrado');
                }
                const data = await response.json();
                setEmployee(data);
            } catch (err) {
                setError(err.message);  // Manejar el error
                console.log(err);
            } finally {
                setLoading(false);  // Finalizar estado de carga
            }
        };

        fetchEmployee();
    }, [id]);

	if (!employee) {
		return <div>No se encontró el empleado.</div>; // Manejo de cuando no hay datos
	}

	const handleBack = () => {
		console.log(id)
        navigate("/empleados");
    };

	return (
		<div className={styles.viewemployee}>
			<h2>Detalles del Empleado</h2>
			<div className={styles.employeedata}>
				<div className={styles.attributeEmployee}>
					<span>Nombre:</span>
					<span>{employee.name}</span>
				</div>
				<div className={styles.attributeEmployee}>
					<span>Posición:</span>
					<span>{employee.position}</span>
				</div>
				<div className={styles.attributeEmployee}> 
					<span>Departamento:</span>
					<span>{employee.department}</span>
				</div>
				<div className={styles.attributeEmployee}>
					<span>Email:</span>
					<span>{employee.email}</span>
				</div>
				<div className={styles.attributeEmployee}>
					<span>Teléfono:</span>
					<span>{employee.phone}</span>
				</div>
			</div>
			<button  onClick={handleBack} >Volver a la Lista de Empleados</button>
		</div>
	);
};

ViewEmployee.propTypes = {};

export default ViewEmployee;