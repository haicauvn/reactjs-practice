import React, { useState } from 'react';
import PropTypes from 'prop-types';
import data from '../../data/users.json'

function TableApp({ }) {
    const [users, setUsers] = useState([...data]);
    const handleSort = (event) => {
        let fieldName = event.target.value;
        console.log(event.target.value);
        if (!fieldName) {
            fieldName = 'id';
        }
        const sortedUser = [...users];
        sortedUser.sort((a, b) => {
            return (a[fieldName] > b[fieldName]) ? 1 : -1;
        })

        // Sorting by date value
        if (fieldName === 'birth_day') {
            sortedUser.sort((a, b) => {
                // stringToDate("17/9/2014", "dd/MM/yyyy", "/");
                // stringToDate("9/17/2014", "mm/dd/yyyy", "/")
                // stringToDate("9-17-2014", "mm-dd-yyyy", "-")
                const date1 = stringToDate(a[fieldName], "dd/MM/yyyy", "/");
                const date2 = stringToDate(b[fieldName], "dd/MM/yyyy", "/");
                return (date1 > date2) ? 1 : -1;
            })
        }
        setUsers(sortedUser);
    }

    function stringToDate(_date, _format, _delimiter) {
        var formatLowerCase = _format.toLowerCase();
        var formatItems = formatLowerCase.split(_delimiter);
        var dateItems = _date.split(_delimiter);
        var monthIndex = formatItems.indexOf("mm");
        var dayIndex = formatItems.indexOf("dd");
        var yearIndex = formatItems.indexOf("yyyy");
        var month = parseInt(dateItems[monthIndex]);
        month -= 1;
        var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
        return formatedDate;
    }

    return (
        <div className="container w-30">
            <h1>A simple web app</h1>
            <h4 className="">Orderby</h4>
            <select name="" id="" onChange={(e) => handleSort(e)}>
                <option value="">Select field to sort</option>
                <option value="id">Id</option>
                <option value="first_name">First Name</option>
                <option value="last_name">Last Name</option>
                <option value="email">Email</option>
                <option value="gender">Gender</option>
                <option value="birth_day">Birthday</option>
                <option value="salary">Salary</option>
                <option value="phone">Phone</option>
            </select>
            <table className="table table-borderless">
                <thead>
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
                <tbody>
                    {
                        users.map(e => (
                            <tr key={e.id}>
                                <th scope="row">{e.id}</th>
                                <td>{e.first_name}</td>
                                <td>{e.last_name}</td>
                                <td>{e.email}</td>
                                <td>{e.gender}</td>
                                <td>{e.birth_day}</td>
                                <td>{e.salary}</td>
                                <td>{e.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableApp;