import React, { useState, useEffect } from 'react'
import './Form.component.css'
export const Form = ({ showBook, addCart, showCart, updateCart }) => {
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState(1)
    const [publibDate, setPublibDate] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(1)
    const [isInvalid, setInvalid] = useState(false)
    const [validate, setValidate] = useState('')

    useEffect(() => {
        setTitle(showBook.title === undefined ? title : showBook.title)
        setType(showBook.type === undefined ? type : showBook.type)
        setAuthor(showBook.author === undefined ? author : showBook.author)
        setPrice(showBook.price === undefined ? price : showBook.price)
        setPublibDate(showBook.publibDate === undefined ? publibDate : showBook.publibDate)
    }, [showBook])

    useEffect(() => {
        setTitle(showCart.title === undefined ? title : showCart.title)
        setType(showCart.type === undefined ? type : showCart.type)
        setAuthor(showCart.author === undefined ? author : showCart.author)
        setPrice(showCart.price === undefined ? price : showCart.price)
        setPublibDate(showCart.publibDate === undefined ? publibDate : showCart.publibDate)
    }, [showCart])

    useEffect(() => {
        setTotal(
            price * quantity
        )
    }, [price, quantity])

    const handelSubmitForm = () => {
        const regex = /^([01]?[0-9]|20)$/
        if (quantity.toString().length === 0) {
            setValidate("Please enter input quantity")
            setInvalid(true)
        } else if (!regex.test(quantity)) {
            setValidate("Quantity is invalid")
            setInvalid(true)
        } else {
            setInvalid(false)
            const data = {
                ...showBook,
                title: title,
                type: type,
                author: author,
                price: price,
                publibDate: publibDate,
                quantity: quantity,
                total: total
            }
            addCart(data)
            setTitle('')
            setType('')
            setAuthor('')
            setPrice('')
            setPublibDate('')
            setQuantity('')
            setTotal('')
        }
    }
    const handelSubmitCart = () => {
        const regex = /^([01]?[0-9]|20)$/
        if (quantity.toString().length === 0) {
            setValidate("Please enter input quantity")
            setInvalid(true)
        } else if (!regex.test(quantity)) {
            setValidate("Quantity is invalid")
            setInvalid(true)
        } else {
            setInvalid(false)
            const data = {
                ...showBook,
                title: title,
                type: type,
                author: author,
                price: price,
                publibDate: publibDate,
                quantity: quantity,
                total: total
            }
            updateCart(data)
            setTitle('')
            setType('')
            setAuthor('')
            setPrice('')
            setPublibDate('')
            setQuantity('')
            setTotal('')
            showCart.title = undefined
        }
    }
    return (
        <div>
            <form className="form-container">
                <div class="form-row">
                    <div class="col-md-12 mb-3">
                        <label for="validationDefault01">Title</label>
                        <input type="text" class="form-control" placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">Type</label>
                        <input type="text" class="form-control" placeholder="Type"
                            value={type}
                            onChange={(e) => setType(e.target.value)} />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Author</label>
                        <input type="text" class="form-control" placeholder="Author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)} />

                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Public Date</label>
                        <input type="text" class="form-control" placeholder="Public Date"
                            value={publibDate}
                            onChange={(e) => setPublibDate(e.target.value)} />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">Price</label>
                        <input type="text" class="form-control" placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Quantity</label>
                        <input type="number" placeholder="Quantity"
                            className={`form-control ${(isInvalid ? 'is-invalid' : '')}`}
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />
                        <span className="total">*</span>
                        <div className="invalid-feedback">
                            {validate}
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Total</label>
                        <input type="text" class="form-control" placeholder="Last name"
                            value={total}
                        />
                        <span className="total">=</span>
                    </div>
                </div>
                {
                    showCart.title === undefined ? <button class="btn btn-primary" type="button" onClick={handelSubmitForm}>Submit</button>
                        : <button class="btn btn-warning" type="button" onClick={handelSubmitCart}>Update</button>
                }
            </form>
        </div>
    )
}
