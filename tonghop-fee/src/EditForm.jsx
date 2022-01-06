import React, { useState } from "react";
import './CreateForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const EditForm = ({
    editFormData,
    handleEditFormChange,
    handleEditFormSubmit,
  }) => {
    return (
        <form className="mx-auto p-lg-4" style={{ width: '80%' }} onSubmit={handleEditFormSubmit}>
            <div className="row">
                <div className="col-3">
                    Name:
                </div>
                <div className="col input-group-sm">
                    <input id="nameInput" className="form-control" minLength="4" value={editFormData.fullName} name="fullName" onChange={handleEditFormChange} required />
                </div>

            </div>
            <br />
            <div className="row">
                <div className="col-3">
                    Age:
                </div>
                <div className="col input-group-sm">
                    <input type="age" className="form-control" id="age" value={editFormData.age} name="age" onChange={handleEditFormChange} required />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-3">
                    Address:
                </div>
                <div className="col input-group-sm">
                    <input type="address" className="form-control" minLength="6" id="password" value={editFormData.address} name="address" onChange={handleEditFormChange} required />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-3">
                    Phone:
                </div>
                <div className="col input-group-sm">
                    <input type="phone" className="form-control" minLength="6" id="password" value={editFormData.phone} name="phone" onChange={handleEditFormChange} required />
                </div>
            </div>
            <br />
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success">update</button>
            </div>
        </form>
    );
}

export default EditForm;