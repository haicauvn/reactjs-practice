import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import CreateForm from './CreateForm';
import EditForm from './EditForm';

const List = () => {

    const [users, setUser] = useState([
        { id: 1, fullName: "khai1", address: "address1", phone: "123", age: "20" },
        { id: 2, fullName: "khai2", address: "address2", phone: "456", age: "21" },
        { id: 3, fullName: "khai3", address: "address3", phone: "789", age: "22" }
    ])

    const [addFormData, setAddFormData] = useState({
        fullName: "",
        address: "",
        phone: "",
        age: "",
    });

    const [editFormData, setEditFormData] = useState({
        fullName: "",
        address: "",
        phone: "",
        age: "",
    });

    const [errors, setErrors] = useState({});

    const [editUserId, setEditUserId] = useState(null);
    const [createState, setCreateState] = useState(false);
    const [editState, setEditState] = useState(false);

    const handleValidation = () => {
        let fields = addFormData;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["fullName"]) {
            formIsValid = false;
            errors["fullName"] = "Name cannot be empty";
        }

        // if (typeof fields["fullName"] !== "undefined") {
        //     if (!fields["fullName"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["fullName"] = "Only letters";
        //     }
        // }

        //Email
        if (!fields["age"]) {
            formIsValid = false;
            errors["age"] = "Age cannot be empty";
        }else{
            if (!fields["age"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["age"] = "Only numbers";
            }
            if(Number(fields["age"]) > 200){
                formIsValid = false;
                errors["age"] = "Age is not valid";
            }
        }
        if (!fields["address"]) {
            formIsValid = false;
            errors["address"] = "Address cannot be empty";
        }

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Phone cannot be empty";
        }else{
            if (!fields["phone"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["phone"] = "Only numbers";
            }
        }

        setErrors(errors);
        return formIsValid;
    }

    const ShowCreateForm = () => {
        if (editState === true) {
            setEditState(false);
        }
        setCreateState(!createState);
    }

    const ShowEditForm = (event, user) => {
        if (createState === true) {
            setCreateState(false);
        }
        setEditState(!editState);
        const formValues = {
            fullName: user.fullName,
            address: user.address,
            phone: user.phone,
            age: user.age,
        };
        setEditFormData(formValues);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        if (handleValidation()) {
            let newID = users.length + 1
            const newUser = {
                id: newID,
                fullName: addFormData.fullName,
                address: addFormData.address,
                phone: addFormData.phone,
                age: addFormData.age,
            };
            const newUsers = [...users, newUser];
            setUser(newUsers);
        } else {
            alert("Form has errors.");
        }

    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedUser = {
            id: editUserId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phone: editFormData.phone,
            age: editFormData.age,
        };

        const newUsers = [...users];

        const index = users.findIndex((user) => user.id === editUserId);

        newUsers[index] = editedUser;

        setUser(newUsers);
        setEditUserId(null);
        setEditState(false)
    };

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleEditClick = (event, user) => {
        event.preventDefault();
        setEditUserId(user.id);
        const formValues = {
            fullName: user.fullName,
            address: user.address,
            phone: user.phone,
            age: user.age,
        };
        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditUserId(null);
    };

    const handleDeleteClick = (userId) => {
        const newUsers = [...users];

        const index = users.findIndex((user) => user.id === userId);

        newUsers.splice(index, 1);

        setUser(newUsers);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleEditFormSubmit}>
                        <table className="table ">
                            <thead className="fw-bold text-center">
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {users.map((user) => (
                                    <Fragment key={user.id}>
                                        {editUserId === user.id ? (
                                            <tr>
                                                <td>{user.id}</td>
                                                <td><input value={editFormData.fullName} name="fullName" onChange={handleEditFormChange} /></td>
                                                <td><input value={editFormData.address} name="address" onChange={handleEditFormChange} /></td>
                                                <td>
                                                    <button type="submit" className="btn btn-sm btn-primary" style={{ width: '33px', height: '33px', marginRight: '5px' }}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ) : (
                                            <tr>
                                                <td onClick={(event) => handleEditClick(event, user)}>{user.id}</td>
                                                <td onClick={(event) => handleEditClick(event, user)}>{user.fullName}</td>
                                                <td onClick={(event) => handleEditClick(event, user)}>{user.address}</td>
                                                <td>
                                                    <button type="button" className="btn btn-sm btn-primary" style={{ width: '33px', height: '33px', marginRight: '5px' }} onClick={(event) => ShowEditForm(event, user)}>
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>

                                                    <button type="button" className="btn btn-sm btn-danger" style={{ width: '33px', height: '33px' }} onClick={() => handleDeleteClick(user.id)}>x</button>
                                                </td>
                                            </tr>

                                        )}

                                    </Fragment>
                                ))}

                            </tbody>
                        </table>
                    </form>
                    <br />
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary" onClick={ShowCreateForm}>create user</button>
                    </div>
                </div>
                <div className="col">
                    {createState && <CreateForm errors={errors} addFormData={addFormData} handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit} />}
                    {editState && <EditForm editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} />}
                </div>
            </div>


        </div >

    )
}

export default List;