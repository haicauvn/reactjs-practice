import React, { useEffect, useState } from 'react';


function Menu({ menu, onAdd }) {
    // state
    const [list, setList] = useState([...menu]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

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

    const validateForm = () => {
        const msg = {};
        const invalid = {};

        if (!/^[A-Za-z\s]{0,}$/.test(name)) {
            invalid.name = true;
            msg.name = 'Only Alphabet Chracter';
        }

        if (!/^[0-9]{0,}$/.test(min)) {
            invalid.min = true;
            msg.min = 'Min price required number';
        }

        if (!/^[0-9]{0,}$/.test(max)) {
            invalid.max = true;
            msg.max = 'Max price required number';

        } else if (!max) {
        }
        else if (+max < +min) {
            invalid.max = true;
            msg.max = 'Required greater than min';
        }

        setMsg(msg);
        setInvalid(invalid);

        if (Object.keys(msg).length > 0) {
            return false;
        }
        return true;
    }
    // handle
    const handleFilter = () => {
        if (!validateForm()) {
            return;
        }

        let newList = [...menu];
        // filter name;
        newList = menu.filter(e => e.name.toUpperCase().includes(name.toUpperCase()));

        // filter category
        newList = newList.filter(e => e.category.toUpperCase().includes(category.toUpperCase()))

        // filter min
        newList = newList.filter(e => e.price >= +min);

        // filter max
        newList = newList.filter(e => (!max || e.price <= +max));
        setList(newList);
    }

    const resetFilter = () => {
        setName('');
        setCategory('');
        setMin('');
        setMax('');
    }

    useEffect(() => {
        handleFilter();
    }, [name, category, min, max])

    return (
        <div>
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <h5>Filter</h5>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-3 pb-3">
                            <label htmlFor="name-input">Name</label>
                            <input
                                type="text"
                                onChange={(e) => { setName(e.target.value) }}
                                className={`form-control ${invalid.name ? 'is-invalid' : ''}`}
                                id="name-input"
                                value={name}
                                required />
                            <div className="invalid-feedback">
                                {msg.name}
                            </div>
                        </div>

                        <div className="col-3 pb-3">
                            <label htmlFor="name-input">Category</label>
                            <select className='custom-select mr-sm-2' name="" id=""
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}>
                                <option value="">All</option>
                                <option value="Food">Food</option>
                                <option value="Desert">Desert</option>
                                <option value="Drink">Drink</option>

                            </select>
                        </div>
                        <div className="col-3 pb-3">
                            <label htmlFor="name-input">Min Prices</label>
                            <input
                                type="text"
                                onChange={(e) => { setMin(e.target.value) }}
                                className={`form-control ${invalid.min ? 'is-invalid' : ''}`}
                                id="name-input"
                                value={min}
                                required />
                            <div className="invalid-feedback">
                                {msg.min}
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <label htmlFor="name-input">Max Prices</label>
                            <input
                                type="text"
                                onChange={(e) => { setMax(e.target.value) }}
                                className={`form-control ${invalid.max ? 'is-invalid' : ''}`}
                                id="price-input"
                                value={max}
                                required />
                            <div className="invalid-feedback">
                                {msg.max}
                            </div>
                        </div>
                        <div className='col-3'>
                            <button type="button"
                                onClick={resetFilter}
                                className="btn btn-secondary">Clear</button>
                        </div>
                    </div>
                </div>
            </div>
            <form className='d-flex justify-content-center pb-3 row'>
                <div className="container">
                    <h4>1. Menu</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{+index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>$ {item.price}.00</td>
                                    <td>
                                        <button type="button" className="btn btn-primary"
                                            onClick={
                                                () => {
                                                    onAdd(item);
                                                }
                                            }>+ Add to order</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
}

export default Menu;