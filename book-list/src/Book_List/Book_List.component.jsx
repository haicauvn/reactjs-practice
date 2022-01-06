import React, { useState } from 'react'
import './Book_List.component.css'
export const Book_List = ({ bookList, onclickShowForm, selectedId, onSelected }) => {
    const handleIsActive = (item) => {
        if (!onclickShowForm) return;
        onSelected(item)
        onclickShowForm(item)
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Type</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>
                        <th scope="col">public date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map(book => (
                            <tr key={book.id} onClick={() => handleIsActive(book)} data-selected={book.id === selectedId}>
                                <th>{book.id}</th>
                                <td>{book.title}</td>
                                <td>{book.type}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                                <td>{book.publibDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
