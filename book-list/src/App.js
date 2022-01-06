
import './App.css';
import { Book_List } from './Book_List/Book_List.component';
import { Cart_List } from './Cart_List/Cart_List.component';
import { Form } from './Form/Form.component';
import book from './Data/book.json'
import { useState } from 'react';
function App() {
  const [bookLists, setBookList] = useState(book)
  const [showForm, setShowForm] = useState({})
  const [showCart, setShowCart] = useState({})
  const [cart, setCart] = useState([])
  const [selected, setSelected] = useState({})
  const [selectedCart, setSelectedCart] = useState({})
  const handleshowform = (item) => {
    setShowForm(item)
  }
  const handleAddCart = (data) => {
    const newCart = [...cart]
    newCart.push(data)
    setCart(newCart)
  }
  const handleDeleteCart = (data) => {
    console.log(data);
    var index = cart.findIndex(x => x.id === data.id)
    if (index < 0) return;
    const newCart = [...cart]
    newCart.splice(index, 1);
    setCart(newCart)
  }
  const handleshowFormCart = (data) => {
    setShowCart(data)
  }
  const handleUpdateCart = (data) => {
    if (data.quantity === '0') {
      handleDeleteCart(data)
    } else {
      setCart(
        cart.map(item => {
          if (item.id === data.id) {
            return { ...data }
          }
          else
            return item
        })
      )
    }

  }
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 book_container">
            <div className="heading-title">
              book-list
            </div>
            <Book_List
              bookList={bookLists}
              selectedId={selected.id}
              onSelected={setSelected}
              onclickShowForm={handleshowform} />
          </div>
          <div className="col-6">
            <div className="row" >
              <div className="col-12 form_container">
                <div className="heading-title">
                  form
                </div>
                {cart.length > 0 ?
                  <div class="alert alert-success" role="alert">
                    Add cart success
                  </div> : ''}
                <Form
                  showBook={showForm}
                  showCart={showCart}
                  addCart={handleAddCart}
                  updateCart={handleUpdateCart} />
              </div>
              <div className="col-12 cart-container">
                <div className="heading-title">
                  cart-List
                </div>
                <Cart_List
                  carItem={cart}
                  deleteCart={handleDeleteCart}
                  showFormCart={handleshowFormCart}
                  selectedCartId={selectedCart.id}
                  onSelectedCart={setSelectedCart} />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
