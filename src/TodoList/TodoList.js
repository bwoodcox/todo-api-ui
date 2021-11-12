import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const apiURL = 'http://localhost:3001/api/v1/todos';

const TodoList = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(apiURL).then((response) => response.json()).then((response_items) => setItems(response_items.reverse()));
	}, []);

	const updateTodoList = (item) => {
		let _items = [...items];
		_items.unshift(item);
		console.log(items);
		console.log(_items);
		setItems(_items);
	};

	return (
		<div>
			<TodoForm apiURL={apiURL} updateList={updateTodoList} />
			<ul id="todo_list">{items.map((item) => <TodoItem key={item.id} item={item} />)}</ul>
		</div>
	);
};

export default TodoList;
