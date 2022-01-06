import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import ListUser from "./components/ListUser/ListUser";
import UserForm from "./components/UserForm/UserForm";
import data from "./data/data.json";

function App() {
  const [users, setUsers] = useState([...data]);
  const [infoEdit, setInfoEdit] = useState("");
  const [showForm, setShowform] = useState(false);

  const handleDeleteUser = (id) => {
    setUsers(users.filter((e) => e.id !== id));
  };

  const handleAddUser = (info) => {
    console.log({ ...info }, "info");
    const newUser = [...users];
    const id = generateRandom();
    newUser.push({ ...info, id });
    setUsers(newUser);
  };

  const editUser = (info) => {
    console.log(info);
    const index = users.findIndex((e) => e.id == info.id);
    const newUser = { ...users[index], ...info };
    const newUsers = [...users];
    newUsers[index] = newUser;
    setUsers(newUsers);
    setInfoEdit('');
    setShowform(true);
  };

  const onEditUser = (id) => {
    const index = users.findIndex((e) => e.id == id);
    setInfoEdit(users[index]);
  };

  const generateRandom = () => {
    // return Math.floor(Math.random() * 1000000 + Math.random() * 10009);
    return +users[users.length - 1].id + 1;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ListUser
            users={users}
            onEdit={onEditUser}
            onDelete={handleDeleteUser}
          />
          <div className="">
            <button
              type="button"
              className="btn btn-primary "
              onClick={() => {
                setShowform(!showForm);
                setInfoEdit({});
              }}
            >
              Create User
            </button>
          </div>
        </div>
        <div className="col">
          {showForm || infoEdit ? (
            <UserForm
              infoEdit={infoEdit}
              editUser={editUser}
              addUser={handleAddUser}
              onEditUser={onEditUser}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
