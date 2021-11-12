import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const TodoForm = (props) => {
	console.log(props);
	const [apiURL, setApiURL] = useState(props.apiURL);
	const [task, setTask] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		formSubmit(event.target);
	};

	const formSubmit = async (formData) => {
		const data = new FormData(formData);

		await fetch(apiURL, {
			method: 'POST',
			mode: 'cors',
			body: data
		}).then((response) => response.json().then((response) => props.updateList(response)));
	};

	const handleOnChange = () => {};

	return (
		<div>
			<form onSubmit={handleSubmit} autoComplete="off">
				<TextField
					id="task_input"
					label="Task Description"
					variant="outlined"
					type="text"
					name="todo[task]"
					onChange={handleOnChange}
				/>
				<Button variant="contained" color="primary" type="submit">
					Add Task
				</Button>
			</form>
		</div>
	);
};

export default TodoForm;
