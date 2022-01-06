import React, { useState } from 'react';

function UserForm({ }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isInvalid, setInvalid] = useState({
        name: false,
        email: false,
        password: false
    });
    const [msgValidate, setMsgValidate] = useState({
        name: '',
        email: '',
        password: ''
    })


    const handleSubmit = (e) => {
        const msg = {};
        const invalid = {};
        e.preventDefault();

        if (name.length < 4) {
            invalid.name = true;
            msg.name = 'Atleast 4 characaters required';
        }

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            invalid.email = true;
            msg.email = 'Email address is invalid';
        }

        if (password.length < 6) {
            invalid.password = true;
            msg.password = 'Atleast 6 characaters required';
        }

        setMsgValidate(msg);
        setInvalid(invalid);

        if(Object.keys(msg).length) {
            
        }
    }

    return (
        <div className='container'>
            <form className='d-flex justify-content-center pb-3 row'>
                <div className="col-7 pb-3">
                    <label htmlFor="name-input">Name</label>
                    <input
                        type="text"
                        onChange={(e) => { setName(e.target.value) }}
                        className={`form-control ${isInvalid.name ? 'is-invalid' : ''}`}
                        id="name-input"
                        value={name}
                        required />
                    <div className="invalid-feedback">
                        {msgValidate.name}
                    </div>

                </div>

                <div className="col-7 pb-3">
                    <label htmlFor="email-input">Email</label>
                    <input
                        type="text"
                        onChange={(e) => { setEmail(e.target.value) }}
                        className={`form-control ${isInvalid.email ? 'is-invalid' : ''}`}
                        id="email-input"
                        value={email}
                        required />
                    <div className="invalid-feedback">
                        {msgValidate.email}
                    </div>

                </div>

                <div className="col-7 pb-3">
                    <label htmlFor="password-input">Password</label>
                    <input
                        type="password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        className={`form-control ${isInvalid.password ? 'is-invalid' : ''}`}
                        id="password-input"
                        value={password}
                        required />
                    <div className="invalid-feedback">
                        {msgValidate.password}
                    </div>

                </div>
                <button className="btn btn-danger col-6" type="button" onClick={handleSubmit}>Create User</button>
            </form>
        </div>
    );
}

export default UserForm;