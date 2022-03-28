import React, { useContext } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContext, { TodoContextProvider } from "./store/todo-context";

function App() {
  const context = useContext(TodoContext);

  return (
    <div>
      <TodoForm  />
      {context.todoList.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>List is empty!</h2>
      ) : (
        <TodoList/>
      )}
    </div>
  );
}

export default App;
