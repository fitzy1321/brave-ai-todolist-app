import React, { useState, useEffect } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (task.trim() !== '') {
            setTodos([...todos, task]);
            setTask('');
        }
    };

    const handleRemoveTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new todo here"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input type="checkbox" />
                        <span>{todo}</span>
                        <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
