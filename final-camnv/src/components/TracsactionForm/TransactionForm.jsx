import React, { useState, useEffect } from 'react'

export const TransactionForm = ({ showTrant, showDaftFrom, addDaft, addTranct }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [total, setTotal] = useState()
    const [isInvalid, setInvalid] = useState({
        Title: false,
        Description: false,
        Quantity: false,
        Price: false
    })
    const [validate, setValidate] = useState({
        titleMsg: '',
        descriptionMsg: '',
        quantityMsg: '',
        priceMsg: ''
    })
    const validateAll = () => {
        const msg = {}
        const isInvalid = {}

        const regexText = /^([a-zA-Z\s?]+){1,}$/
        if (title.length === 0) {
            msg.titleMsg = "Please enter input Title"
            isInvalid.Title = true
        } else if (!regexText.test(title)) {
            msg.titleMsg = "Title requied"
            isInvalid.Title = true
        }

        if (description.length === 0) {
            msg.descriptionMsg = "Please enter input Description"
            isInvalid.Description = true
        } else if (!regexText.test(description)) {
            msg.descriptionMsg = "Description requied"
            isInvalid.Description = true
        }
        const regexNumber = /([1-9]+){1,}/

        if (quantity.length === 0) {
            msg.quantityMsg = "Please enter input quantity"
            isInvalid.Quantity = true
        } else if (!regexNumber.test(quantity)) {
            msg.quantityMsg = "Quantity is > 0"
            isInvalid.Quantity = true
        }
        if (price.length === 0) {
            msg.priceMsg = "Please enter input price"
            isInvalid.Price = true
        } else if (!regexNumber.test(price)) {
            msg.priceMsg = "Quantity is > 0"
            isInvalid.Price = true
        }
        setValidate(msg)
        setInvalid(isInvalid)
        if (Object.keys(msg).length > 0) {
            return false
        }
        return true
    }
    useEffect(() => {
        setTotal(
            price * quantity
        )
    }, [price, quantity])
    useEffect(() => {
        setTitle(showTrant.title === undefined ? title : showTrant.title)
        setDescription(showTrant.description === undefined ? description : showTrant.description)
        setPrice(showTrant.price === undefined ? price : showTrant.price)

    }, [showTrant])

    useEffect(() => {
        setTitle(showDaftFrom.title === undefined ? title : showDaftFrom.title)
        setDescription(showDaftFrom.description === undefined ? description : showDaftFrom.description)
        setPrice(showDaftFrom.price === undefined ? price : showDaftFrom.price)
    }, [showDaftFrom])

    const handleOnclickSave = () => {
        const isValidate = validateAll()
        if (!isValidate) return;
        const data = {
            ...showTrant,
            title: title,
            description: description,
            price: total,
        }
        addDaft(data)
        setTitle('')
        setDescription('')
        setPrice('')
        setQuantity('')
    }
    const handleOnclickSaveDaft = () => {
        const isValidate = validateAll()
        if (!isValidate) return;
        const data = {
            ...showTrant,
            title: title,
            description: description,
            price: total,
        }
        addTranct(data)
        setTitle('')
        setDescription('')
        setPrice('')
        setQuantity('')
    }
    return (
        <div className="form-transaction">
            <form >
                <div className="heading-form">
                    <h4>Transaction Form</h4>
                </div>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"

                        className={`form-control ${(isInvalid.Title ? 'is-invalid' : '')}`}
                        value={title}
                        placeholder="Enter title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        {validate.titleMsg}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input
                        type="text"
                        className={`form-control ${(isInvalid.Description ? 'is-invalid' : '')}`}
                        value={description}
                        placeholder="Enter Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        {validate.descriptionMsg}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Quantity</label>
                    <input
                        type="text"

                        className={`form-control ${(isInvalid.Quantity ? 'is-invalid' : '')}`}
                        value={quantity}
                        placeholder="Enter Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        {validate.quantityMsg}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input
                        type="text"
                        className={`form-control ${(isInvalid.Price ? 'is-invalid' : '')}`}
                        value={price}
                        placeholder="Enter Price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        {validate.priceMsg}
                    </div>
                </div>
                <div className="form-btn">
                    <button class="btn btn-primary" type="button" onClick={handleOnclickSaveDaft}>Save</button>
                    <button class="btn btn-success" type="button" onClick={handleOnclickSave} >Save draft</button>
                </div>
            </form>

        </div>
    )
}
