import React from 'react';

function ListUser({ users, onDelete, onEdit }) {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">address</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(e => (
                        <tr key={e.id}>
                            <th scope="row">{e.id}</th>
                            <td>{e.name}</td>
                            <td>{e.address}</td>
                            <td className='d-flex justify-content-around'>
                                <button type='button'
                                    onClick={ () => {onEdit(e.id)}}
                                    style={{ backgroundColor: 'blue' }}>
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button type='button'
                                    onClick={() => { onDelete(e.id) }}
                                    style={{ backgroundColor: 'red' }}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListUser;