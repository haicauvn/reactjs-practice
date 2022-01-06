import React, { useState } from "react";
import './CreateForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const CreateForm = ({
    errors,
    addFormData,
    handleAddFormChange,
    handleAddFormSubmit,
  }) => {
    return (
        <form className="mx-auto p-lg-4" style={{ width: '80%' }} onSubmit={handleAddFormSubmit}>
            <div className="row">
                <div className="col-3">
                    Name:
                </div>
                <div className="col input-group-sm">
                    <input id="nameInput" className="form-control" value={addFormData.fullName} name="fullName" onChange={handleAddFormChange} />
                    <span style={{ color: "red" }}>{errors["fullName"]}</span>
                </div>
                
            </div>
            <br />
            <div className="row">
                <div className="col-3">
                    Age:
                </div>
                <div className="col input-group-sm">
                    <input type="age" className="form-control" id="age" value={addFormData.age} name="age" onChange={handleAddFormChange} />
                    <span style={{ color: "red" }}>{errors["age"]}</span>
                </div>
                
            </div>
            <br />
            <div className="row">
                <div className="col-3">
                    Address:
                </div>
                <div className="col input-group-sm">
                    <input type="address" className="form-control" id="address" value={addFormData.address} name="address" onChange={handleAddFormChange} />
                    <span style={{ color: "red" }}>{errors["address"]}</span>
                </div>
                
            </div>
            <br />
            <div className="row">
                <div className="col-3">
                    Phone:
                </div>
                <div className="col input-group-sm">
                    <input type="phone" className="form-control" id="phone" value={addFormData.phone} name="phone" onChange={handleAddFormChange} />
                    <span style={{ color: "red" }}>{errors["phone"]}</span>
                </div>
                
            </div>
            <br />
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success">create</button>
            </div>
        </form>
    );
}

export default CreateForm;