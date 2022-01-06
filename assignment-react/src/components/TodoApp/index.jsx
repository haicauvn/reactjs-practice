import React, { useState } from 'react';
import data from '../../data/data-todo.json';

function TodoApp({ }) {

    const [todos, setTodos] = useState(data);
    const [value, setValue] = useState('');
    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(e => e.id !== id))
    }

    const handleCompleteTodo = (id) => {
        const index = todos.findIndex(e => e.id === id);
        const newTodos = [...todos];
        newTodos[index] = {
            ...newTodos[index],
            is_completed: !newTodos[index].is_completed,
        }
        setTodos(newTodos);
    }

    const handleAddTodo = (e) => {
        const id = Math.floor(Math.random() * 1000000 + Math.random() * 9999999);
        e.preventDefault();
        setTodos(
            [...todos, {
                id : id,
                titile: value,
                is_completed: false
            }],
        )
        setValue('');
    }

    return (
        <div className="container-fluid">
            <h2 className='d-flex justify-content-center'>To-Do List</h2>
            <p className='d-flex justify-content-center'>Enter text into the input field to add items to your list</p>
            <p className='d-flex justify-content-center'>Click the "X" to remove the item from your list</p>
            <p className='d-flex justify-content-center'>Click the item to mark it as complete</p>

            <div className="d-flex justify-content-center pb-3 row">
                <input className='col-3' value={value} onChange={(e) => { setValue(e.target.value) }}>
                </input>
                <div className='col-1'>
                    <button type='button' onClick={handleAddTodo} className='btn btn-primary ' >
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>

            <div className="todo-list">
                {todos.map(todo => (
                    <div className="container w-50" key={todo.id}>
                        <div className="list-group-item list-group-item-primary" >
                            <div className="d-flex justify-content-between">
                                <div onClick={() => handleCompleteTodo(todo.id)}>
                                    {todo.titile + (todo.is_completed ? " (completed)" : '')}
                                </div>
                                <div onClick={() => handleDeleteTodo(todo.id)}>
                                    <i className="far fa-window-close"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoApp;