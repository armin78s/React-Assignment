import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodolist from "./hook/use-todolist";

function App() {
  const {todoList} = useTodolist();

  return (
    <div>
      <TodoForm  />
      {todoList.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>List is empty!</h2>
      ) : (
        <TodoList/>
      )}
    </div>
  );
}

export default App;
