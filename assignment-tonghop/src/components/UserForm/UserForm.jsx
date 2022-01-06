import React, { useEffect, useState } from 'react';

function UserForm({ infoEdit, addUser, editUser, onEditUser}) {
    const [name, setName] = useState(infoEdit.name || '');
    const [age, setAge] = useState(infoEdit.age || '');
    const [address, setAddress] = useState(infoEdit.address || '');
    const [phone, setPhone] = useState(infoEdit.address  || '');
    const [info, setInfo] = useState({ ...infoEdit });

    useEffect(() => {
        setInfo({ name, age, address, phone });
    }, [name, age, address, phone])

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // console.log(name);

    const [isInvalid, setInvalid] = useState({
        name: false,
        age: false,
        address: false,
        phone: false,
        // email: false,
        // password: false
    });
    const [msgValidate, setMsgValidate] = useState({
        name: '',
        age: '',
        address: '',
        phone: '',
        // email: '',
        // password: ''
    })

    const validateForm = () => {
        const msg = {};
        const invalid = {};

        if (name.length < 4) {
            invalid.name = true;
            msg.name = 'Atleast 4 characaters required';
        }

        if (!/^[0-9]{1,3}$/.test(age)) {
            invalid.age = true;
            msg.age = 'Invalid Age';
        }

        if (address.length < 2) {
            invalid.address = true;
            msg.address = "Atleast 2 characaters required";
        }

        if (!/^[0-9\+\s\-\\)\\(]{6,20}$/.test(phone)) {
            invalid.phone = true;
            msg.phone = "Invalid Phone";
        }



        // if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        //     invalid.email = true;
        //     msg.email = 'Email address is invalid';
        // }

        // if (password.length < 6) {
        //     invalid.password = true;
        //     msg.password = 'Atleast 6 characaters required';
        // }

        setMsgValidate(msg);
        setInvalid(invalid);

        if (Object.keys(msg).length > 0) {
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        if (infoEdit) {
            editUser({ ...infoEdit, ...info });
        } else {
            addUser(info);
            resetForm();
        }
    }

    const resetForm = () => {
        setName('')
        setAge('')
        setAddress('')
        setPhone('')
    }

    useEffect(() => {
        setName(infoEdit.name ? infoEdit.name : '');
        setAge(infoEdit.age ? infoEdit.age : '');
        setAddress(infoEdit.address ? infoEdit.address : '')
        setPhone(infoEdit.phone ? infoEdit.phone : '')
    }, [onEditUser])

    return (
        <div>
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
                    <label htmlFor="age-input">Age</label>
                    <input
                        type="number"
                        onChange={(e) => { setAge(e.target.value) }}
                        className={`form-control ${isInvalid.age ? 'is-invalid' : ''}`}
                        id="age-input"
                        value={age}
                        required />
                    <div className="invalid-feedback">
                        {msgValidate.age}
                    </div>
                </div>

                <div className="col-7 pb-3">
                    <label htmlFor="address-input">Address</label>
                    <input
                        type="text"
                        onChange={(e) => { setAddress(e.target.value) }}
                        className={`form-control ${isInvalid.address ? 'is-invalid' : ''}`}
                        id="address-input"
                        value={address}
                        required />
                    <div className="invalid-feedback">
                        {msgValidate.address}
                    </div>
                </div>

                <div className="col-7 pb-3">
                    <label htmlFor="address-input">Phone</label>
                    <input
                        type="text"
                        onChange={(e) => { setPhone(e.target.value) }}
                        className={`form-control ${isInvalid.phone ? 'is-invalid' : ''}`}
                        id="address-input"
                        value={phone}
                        required />
                    <div className="invalid-feedback">
                        {msgValidate.phone}
                    </div>

                    <div className="row d-flex justify-content-center pt-3 row">
                        <button className="btn btn-success col-4" type="button"
                            onClick={handleSubmit}>
                            {infoEdit.id ? 'Update' : 'Create'}
                        </button>
                    </div>
                </div>

                {/* <div className="col-7 pb-3">
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

                </div> */}
                
            </form>
        </div>
    );
}

export default UserForm;