import React from 'react'

export const DaftList = ({ daftLists, onclickDaftShowForm, onClickDaftDelete }) => {
    return (
        <div>
            <div >
                <div className="transaction-list">
                    <div className="heading">
                        <h4>Daft List</h4>
                    </div>
                    {
                        daftLists.map(item => (

                            <div className="Transaction-container">
                                <div className="transaction-item" key={item.id}>
                                    <div className="item-heading" >
                                        <a onClick={() => onclickDaftShowForm(item)}><i class="far fa-edit"></i></a>
                                        <a onClick={() => onClickDaftDelete(item)}><i class="far fa-trash-alt"></i></a>
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
        </div>
    )
}
