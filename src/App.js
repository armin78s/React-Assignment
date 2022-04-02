import React from "react";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const todoList = useSelector(state => state.todoList);
  return (
    <div className="font-sans font-semibold">
      <TodoForm  />
      {todoList.length === 0 ? (
        <p className="text-center mt-6 text-xl">List is empty!</p>
      ) : (
        <TodoList />
      )}
    </div>
  );
}

export default App;
