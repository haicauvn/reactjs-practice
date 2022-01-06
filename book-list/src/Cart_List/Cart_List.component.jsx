import React, { useEffect, useState } from 'react'
import './Cart_List.component.css'
export const Cart_List = ({ carItem, deleteCart, selectedCartId, onSelectedCart, showFormCart }) => {
    const [total, setTotal] = useState(0)
    const handleOnclick = (cart) => {
        if (window.confirm("Are you want delete cart ?")) {
            deleteCart(cart)
        }
    }
    const handleOnclickSelected = (cart) => {
        onSelectedCart(cart)
        showFormCart(cart)
    }

    useEffect(() => {
        setTotal(
            carItem.reduce((sum, item) =>
                sum + item.total
                , 0))

    }, [carItem])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carItem.map((cart, index) => (
                            <tr key={index} data-selected={cart.id === selectedCartId}>
                                <td onClick={() => handleOnclickSelected(cart)}>{cart.title}</td>
                                <td>{cart.quantity}</td>
                                <td>{cart.total}</td>
                                <td> <a onClick={() => handleOnclick(cart)}><i class="far fa-trash-alt"></i></a></td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td>Total</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
