import { useState } from "react";
import data from "../src/data/data.json";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MyOrder from "./components/MyOrder/MyOrder";
function App() {
  const [menu, setMenu] = useState([...data]);
  const [infoEdit, setInfoEdit] = useState("");
  const [orders, setOrders] = useState([]);
  const [item, setItem] = useState("");

  // handle
  const onAdd = (item) => {
    console.log("addItem", item);

    item.quality = 1;
    const newOrders = [...orders];
    const index = orders.findIndex((e) => e.id === item.id);
    if (index < 0) {
      newOrders.push(item);
    } else {
      let quatity = +newOrders[index].quality +1;
      console.log( newOrders[index].quality, 'neworder');
      console.log(quatity, 'quatity');
      newOrders[index].quality = newOrders[index].quality+1;
    }
    setOrders(newOrders);
  };

  const onDelete = (item) => {
    setOrders(orders.filter((e) => e.id !== item.id));
  };

  const onEdit = (id, quatity) => {

  }
  return (
    <>
      <div className="container">
        <Menu onAdd={onAdd} menu={menu} />
        <MyOrder onAdd={onAdd} orders={orders} onDelete={onDelete} onEdit={onEdit}/>
      </div>
    </>
  );
}

export default App;
