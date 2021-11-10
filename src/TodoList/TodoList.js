import React, { Component } from 'react';
import TodoForm from './TodoForm';

const api_url = 'http://localhost:3001';

const TodoList = () => {
	return (
		<div>
			<TodoForm />
			<ul>
				<li>Todo #1</li>
				<li>Todo #2</li>
			</ul>
		</div>
	);
};

export default TodoList;
