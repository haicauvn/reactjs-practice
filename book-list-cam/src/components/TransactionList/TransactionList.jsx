import React, { useState, useEffect } from 'react'

export const TransactionList = ({ tranctLists, onClickClone, onClickDelete, onclickShowForm }) => {
    const [input, setInput] = useState('');
    const [search, setSearch] = useState(tranctLists)
    useEffect(() => {
        setSearch(
            tranctLists.filter(item => {
                if (input == '') {
                    return item
                } else if (item.title.includes(input)) {
                    return item
                } else if (item.description.toLowerCase().includes(input.toLowerCase())) {
                    return item
                }
            })
        )
    }, [input])

    useEffect(() => {
        setSearch(
            tranctLists
        )
    }, [tranctLists])

    return (
        <div >
            <input type="text" class="form-control" placeholder="Enter Search"
                onChange={(e) => setInput(e.target.value)}
            />
            <div className="transaction-list">
                <div className="heading">
                    <h4>Transaction List</h4>
                </div>
                {
                    search.map(item => (
                        <div className="Transaction-container" key={item.id} >
                            <div className="transaction-item"  >
                                <div className="item-heading" >
                                    <a onClick={() => onClickClone(item)}><i className="far fa-copy"></i> </a>
                                    <a onClick={() => onclickShowForm(item)} ><i className="far fa-edit"></i></a>
                                    <a onClick={() => onClickDelete(item)}><i className="far fa-trash-alt"></i></a>
                                </div>
                                <div className="transaction-main">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <p>Total price: {item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
