import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './users.json'

const TableApp = () => {

    const [users, setUser] = useState(data)

    const getSortOrder = (prop) => {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
    } 

    const handleOrderBy = (event) =>{
        const sortedUser = [...users];
        sortedUser.sort(getSortOrder(event.target.value));
        setUser(sortedUser);
    }

    return (
        <div className="container-fluid">
            <h3>A Simple Web App</h3>
            <div className="d-inline-block">
                <h3>Order by</h3>
                <select className="form-select" aria-label="Default select example" style={{ width: "200px" }} onChange={(event) => handleOrderBy(event)}>
                    <option defaultValue>Select field to sort</option>
                    <option value="id">id</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="email">Email</option>
                    <option value="birthDay">Birthday</option>
                    <option value="salary">Salary</option>
                </select>
            </div>

            <hr />
            <form>
                <table className="table ">
                    <thead className="fw-bold text-center">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {users.map((user) => (
                            <Fragment key={user.id}>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.birthDay}</td>
                                    <td>{user.salary}</td>
                                    <td>(+84){user.phoneNumber}</td>
                                </tr>

                            </Fragment>
                        ))}

                    </tbody>
                </table>
            </form>
        </div >

    )
}

export default TableApp;