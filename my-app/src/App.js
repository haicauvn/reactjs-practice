import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const data = [
    { id: 1, titile: "Todo1" },
    { id: 2, titile: "Todo2" },
    { id: 3, titile: "Todo3" },
    { id: 4, titile: "Todo4" },
  ];

  const [todos, setTodos] = useState([...data]);

  const handleOnClickTodo = (id) => {
    const index = todos.findIndex((e) => e.id === id);
    if (index < 0) return;
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList);
  };

  const handleSubmit = (todo) => {
    const id = Math.floor(Math.random() * 100000 + Math.random() * 999999);
    setTodos((prev) => [...prev, { id, titile: todo.titile }]);
  };

  console.log(todos);
  return (
    <div>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todos={todos} onClickTodo={handleOnClickTodo} />;
    </div>
  );
}

export default App;
