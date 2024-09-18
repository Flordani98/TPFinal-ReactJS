"use client";
import React from 'react';
import styles from './EmployeesTable.module.css';
import PropTypes from 'prop-types';
import EmployeeItem from '../EmployeeItem/EmployeeItem';

const EmployeesTable = ({ employees, onActionComplete  }) => {


	return (
		<table className={styles.employeestable}>

			<thead>
				<tr>
					<th>Nombre</th>
					<th>Posición</th>
					<th>Departamento</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>

				{
					employees.map((employee) => (
						<EmployeeItem key={employee.id} employee={employee} onActionComplete={onActionComplete} />
					))
				}
			</tbody>


		</table>
	);
};

EmployeesTable.propTypes = {};

export default EmployeesTable;