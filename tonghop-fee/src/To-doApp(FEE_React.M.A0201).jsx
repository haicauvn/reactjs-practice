import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './TodoApp.css'

function TodoApp() {
    const [todoLists, setTodo] = useState([
        {
            id: "1",
            title: "Todo 1",
            state: false
        },
        {
            id: "2",
            title: "Todo 2",
            state: true
        }
    ]);

    const [addFormData, setAddFormData] = useState({
        title: "",
        state: ""
    });

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        let newID = todoLists.length + 1
        const newList = {
            id: newID,
            title: addFormData.title,
            state: false
        };

        const newLists = [...todoLists, newList];
        setTodo(newLists);
    };

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleChangeState = (listId) =>{
        const newLists = [...todoLists];
        const index = todoLists.findIndex((todo) => todo.id === listId)
        const completedTodo = {
            id:listId,
            title: todoLists[index].title,
            state: !todoLists[index].state
        }
        newLists[index] = completedTodo;
        setTodo(newLists)
    }

    const handleDeleteClick = (listId) => {
        const newLists = [...todoLists];

        const index = todoLists.findIndex((todo) => todo.id === listId);

        newLists.splice(index, 1);

        setTodo(newLists);
    };

    return (
        <div className="container-fluid">
            <h2 className="d-flex justify-content-center">To-do App</h2>
            <br />
            <span id="guide" className="d-flex justify-content-center">Enter text into the input field to add items to your list.</span>
            <br />
            <span id="guide" className="d-flex justify-content-center">Click the "X" to remove the item from your list.</span>
            <br />
            <span id="guide" className="d-flex justify-content-center">Click the item to mark it as complete.</span>
            <br />
            <div className="d-flex flex-row justify-content-center d-inline">
                <input placeholder="Input to do" name="title" onChange={handleAddFormChange}/> <button type="submit" className="border-0" onClick={handleAddFormSubmit}><FontAwesomeIcon icon={faPlusCircle} /></button>
            </div>
            {todoLists.map((todo) => (
                <Fragment key={todo.id.toString()}>
                    <br />
                    <div className="todo row" >
                        <div className="col" onClick={() => handleChangeState(todo.id)}>
                            <span className="align-middle">{todo.title} {todo.state===true?"(completed)":""}</span>
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-sm" onClick={() => handleDeleteClick(todo.id)}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>



                    </div>
                    <br />
                </Fragment>


            ))}
        </div>
    );
}

export default TodoApp;