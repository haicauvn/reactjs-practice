import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handleSubmit = (event) => {
        console.log(user.name);
        event.preventDefault();
        alert(`Submitting Name ${user.name, user.email, user.password}`);
    }

    const handleChangeValue= (evt) => {
        const value = evt.target.value;
        setUser({
            ...user,
            [evt.target.name]: value
        });
    }

    return (
        <form className="mx-auto p-lg-4 border" style={{ width: '400px' }} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label fw-bold">Name</label>
                <input className="form-control" id="nameInput" minLength="4" value={user.name} name="name" onChange={handleChangeValue}></input>
                
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Mail</label>
                <input type="email" className="form-control" id="email" value={user.email} name="email" onChange={handleChangeValue}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">Password</label>
                <input type="password" className="form-control" minLength="6" id="password" value={user.password} name="password" onChange={handleChangeValue}></input>
            </div>
            <div className="mb-3 d-grid ">
                <button type="submit" className="btn btn-danger">Submit</button>
            </div>
        </form>


    );
}

export default Register;