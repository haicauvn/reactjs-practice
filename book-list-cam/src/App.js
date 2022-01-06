
import './App.css';
import { TransactionList } from './components/TransactionList/TransactionList';
import { TransactionForm } from './components/TracsactionForm/TransactionForm';
import { DaftList } from './components/DaftList/DaftList';
import transaction from './data/transaction.json'
import { useState } from 'react';

function App() {
  const [tranctList, setTranList] = useState(transaction)
  const [daftList, setDaftList] = useState([])
  const [showForm, setShowForm] = useState({})
  const [showDaft, setshowDaft] = useState({})
  const handleClickClone = (data) => {
    const newdaft = [...daftList]
    newdaft.push(data)
    setDaftList(newdaft)
  }
  const handleClickTrack = (data) => {
    console.log(data);
    const index = tranctList.findIndex(x => x.id === data.id)
    if (index < 0) return;
    const newArr = [...tranctList]
    newArr.splice(index, 1);
    setTranList(newArr)
  }
  const handleClickshowForm = (data) => {
    setShowForm(data)
  }
  const handleClickDaftForm = (data) => {
    setshowDaft(data)
  }
  const handleAddDaft = (data) => {
    const newdaft = [...daftList]
    newdaft.push(data)
    setDaftList(newdaft)
    const index = tranctList.findIndex(x => x.id === data.id)
    if (index < 0) return;
    const newArr = [...tranctList]
    newArr.splice(index, 1);
    setTranList(newArr)
  }
  const handleAddTranct = (data) => {
    const newTranct = [...tranctList]
    newTranct.push(data)
    setTranList(newTranct)
    const index = daftList.findIndex(x => x.id === data.id)
    if (index < 0) return;
    const newArr = [...daftList]
    newArr.splice(index, 1);
    setDaftList(newArr)
  }
  const handleClickDaftDelete = (data) => {
    console.log(data);
    const index = daftList.findIndex(x => x.id === data.id)
    if (index < 0) return;
    const newArr = [...daftList]
    newArr.splice(index, 1);
    setDaftList(newArr)
  }
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <TransactionList
              tranctLists={tranctList}
              onClickClone={handleClickClone}
              onClickDelete={handleClickTrack}
              onclickShowForm={handleClickshowForm}
            />
          </div>
          <div className="col-6">
            <TransactionForm
              showTrant={showForm}
              showDaftFrom={showDaft}
              addDaft={handleAddDaft}
              addTranct={handleAddTranct}
            />
          </div>
          <div className="col-3">
            <DaftList
              daftLists={daftList}
              onclickDaftShowForm={handleClickDaftForm}
              onClickDaftDelete={handleClickDaftDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
