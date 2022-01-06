import React, { useEffect, useState } from 'react';


function MyOrder({ orders, onDelete, onEdit }) {
    const [items, setItems, onAdd] = useState([...orders]);
    const [total, setTotal] = useState(() => {
        let totalPrice = 0;
        orders.forEach(order => {
            totalPrice += order.quality;
        });
        return totalPrice;
    });
    const [invalid, setInvalid] = useState({
        name: false,
        category: false,
        min: false,
        max: false,
    });
    const [msg, setMsg] = useState({
        name: '',
        category: '',
        min: '',
        max: '',
    })

    useEffect(() => {
        console.log('effect');
        setItems([...orders]);
        let totalPrice = 0;
        orders.forEach(order => {
            totalPrice += (+order.quality) * (+order.price);
        });
        setTotal(totalPrice);
    }, [orders])

    useEffect(() => {
        console.log('effect');
        let totalPrice = 0;
        orders.forEach(order => {
            totalPrice += (+order.quality) * (+order.price);
        });
        setTotal(totalPrice);
    }, [items])



    return (
        <div className='container'>
            <h4>2. My Order</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">1</th>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>$ {item.price}.00 x
                                <input
                                    type="number"
                                    onChange={(e) => {
                                        const index = items.findIndex(e => item.id === e.id)
                                        console.log(index, index);
                                        let newItems = [...items];
                                        newItems[index].quality = e.target.value;
                                        setItems(newItems);
                                    }}
                                    id="price-input"
                                    value={item.quality}
                                    required
                                    style={{ width: '60px' }} />
                                <div className="invalid-feedback">
                                    {msg.max}
                                </div>
                                = $ {item.price * item.quality}.00</td>
                            <td>
                                <button
                                    onClick={() => {
                                        // alert(`Delete ${item.name}` );
                                        if (window.confirm(`Delete ${item.name}`) == true) {
                                            onDelete(item);
                                        }
                                    }}>

                                    <i className='fa fa-trash button-delete' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <div className='d-flex justify-content-end'>
                <h4 className='pr-3'>Total: $ {total}.00</h4>
                <button type="button" className="btn btn-primary">Place order</button>
            </div>

            <div style={{ height: '100px' }}></div>
        </div>
    );
}

export default MyOrder;