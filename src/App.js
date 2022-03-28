import React, { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const newTodo = { id: Math.random().toString(), ...todo };
    setTodoList((prevState) => {
      return [...prevState, newTodo];
    });
  };

  const deleteTodo = (id) => {
    const tmp = [...todoList];
    const filter = tmp.filter((todo) => todo.id !== id);
    setTodoList(filter);
  };
  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      {todoList.length == 0 ? (
        <h2 style={{ textAlign: "center" }}>List is empty!</h2>
      ) : (
        <TodoList onDeleteTodo={deleteTodo} todoItems={todoList} />
      )}
    </div>
  );
}

export default App;
