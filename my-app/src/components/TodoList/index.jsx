import React from 'react';

function TodoList({todos, onClickTodo}) {
    return (
        <div>
            {todos.map(todo => (
                <li onClick={() => onClickTodo(todo.id)} key={todo.id}>{todo.titile}</li>
            ))}
        </div>
    );
}

export default TodoList;