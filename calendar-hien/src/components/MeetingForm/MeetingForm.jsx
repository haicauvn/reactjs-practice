import React, { useEffect, useState } from 'react';


function MeetingForm({ infoEdit, editItem, addItem, onCancel}) {
    const [titile, setTitile] = useState(infoEdit.name || '');
    const [day, setDay] = useState(infoEdit.day || '');
    const [startTime, setStartTime] = useState(infoEdit.startTime || '');
    const [endTime, setEndTime] = useState(infoEdit.endTime || '');
    const [content, setContent] = useState(infoEdit.content || '');
    const [info, setInfo] = useState({ ...infoEdit });

    useEffect(() => {
        setTitile(infoEdit.titile || '');
        setDay(infoEdit.day || '');
        setStartTime(infoEdit.startTime || '');
        setEndTime(infoEdit.endTime || '' );
        setContent(infoEdit.content || '');
    }, [infoEdit])

    useEffect(() => {
        setInfo({ titile, day, startTime, endTime, content });
    }, [titile, day, startTime, endTime, content])



    const [isInvalid, setInvalid] = useState({
        titile: false,
        day: false,
        startTime: false,
        endTime: false,
        content: false
    });
    const [msgValidate, setMsgValidate] = useState({
        titile: '',
        day: '',
        startTime: '',
        endTime: '',
        content: ''
        // email: '',
        // password: ''
    })

    const validateForm = () => {
        const msg = {};
        const invalid = {};

        if (titile.length < 4) {
            invalid.titile = true;
            msg.titile = 'Atleast 4 characaters required';
        }

        if (!day || day < 0 || day > 21) {
            invalid.day = true;
            msg.day = 'Invalid day';
        }

        if (!startTime) {
            invalid.startTime = true;
            msg.startTime = 'Required start time';
        }

        if (!endTime) {
            invalid.endTime = true;
            msg.endTime = 'Required end time';
        }

        if (content.length < 5) {
            invalid.content = true;
            msg.content = 'Invalid Content';
        }

        // if (!/^[0-9]{1,3}$/.test(startTime)) {
        //     invalid.startTime = true;
        //     msg.startTime = 'Invalid Age';
        // }

        // if (address.length < 2) {
        //     invalid.address = true;
        //     msg.address = "Atleast 2 characaters required";
        // }

        // if (!/^[0-9\+\s\-\\)\\(]{6,20}$/.test(phone)) {
        //     invalid.phone = true;
        //     msg.phone = "Invalid Phone";
        // }



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

    const resetForm = () => {
        setTitile('');
        setDay('')
        setStartTime('')
        setEndTime('')
        setContent('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        if (Object.keys(infoEdit).length > 0) {
            editItem({ ...infoEdit, ...info });
            onCancel();
        } else {
            addItem(info);
            resetForm();
        }
    }

    return (
        <div>
            <h2 className='d-flex justify-content-left'>MeetingForm</h2>

            <form className='d-flex justify-content-center pb-3 row'>
                <div className="col-6 pb-3">
                    <label htmlFor="name-input">Titile</label>
                    <input
                        type="text"
                        onChange={(e) => { setTitile(e.target.value) }}
                        className={`form-control ${isInvalid.titile ? 'is-invalid' : ''}`}
                        id="name-input"
                        value={titile}
                        required />
                    <div className="invalid-feedback">
                        {msgValidate.titile}
                    </div>
                </div>

                <div className="col-6 pb-3">
                    <label htmlFor="age-input">Day</label>
                    <input
                        type="number"
                        onChange={(e) => { setDay(e.target.value) }}
                        className={`form-control ${isInvalid.day ? 'is-invalid' : ''}`}
                        id="age-input"
                        value={day}
                        required />
                    <div className="invalid-feedback">
                        {msgValidate.day}
                    </div>
                </div>

                <div className="col-6 pb-3">
                    <label htmlFor="address-input">Start Time</label>
                    <input
                        type="time"
                        onChange={(e) => { setStartTime(e.target.value) }}
                        className={`form-control ${isInvalid.startTime ? 'is-invalid' : ''}`}
                        id="address-input"
                        value={startTime}
                        required />
                    <div className="invalid-feedback">
                        {msgValidate.startTime}
                    </div>
                </div>

                <div className="col-6 pb-3">
                    <label htmlFor="address-input">End Time</label>
                    <input
                        type="time"
                        onChange={(e) => { setEndTime(e.target.value) }}
                        className={`form-control ${isInvalid.endTime ? 'is-invalid' : ''}`}
                        id="address-input"
                        value={endTime}
                        required />
                    <div className="invalid-feedback">
                        {msgValidate.endTime}
                    </div>
                </div>

                <div className="col-12 pb-3">
                    <label htmlFor="address-input">Content</label>
                    <textarea
                        type='textarea'
                        onChange={(e) => { setContent(e.target.value) }}
                        className={`form-control ${isInvalid.content ? 'is-invalid' : ''}`}
                        id="address-input"
                        value={content}
                        required
                        rows='3' />
                    <div className="invalid-feedback">
                        {msgValidate.content}
                    </div>
                </div>
                <div className='btn-container col-12'>
                    <div className="row d-flex justify-content-end  pt-4 row">
                        {infoEdit.id ?
                            <button className="btn btn-success col-1" type="button"
                            onClick={onCancel}>
                                Cancel
                            </button>
                            : null}

                        <div className='btn-box ml-4 col-1 mr-2'>
                            <button className="btn btn-primary" type="button"
                                onClick={handleSubmit}>
                                {infoEdit.id ? 'Update' : 'Create'}
                            </button>
                        </div>
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



export default MeetingForm;