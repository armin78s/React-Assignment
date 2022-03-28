import React, { createContext, useState } from "react";

const TodoContext = createContext({
  todoList: [],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
});

export const TodoContextProvider = (props) => {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandeler = (todo) => {
    const newTodo = { id: Math.random().toString(), ...todo };
    setTodoList((prevState) => {
      return [...prevState, newTodo];
    });
  };

  const deleteTodoHandeler = (id) => {
    const tmp = [...todoList];
    const filter = tmp.filter((todo) => todo.id !== id);
    setTodoList(filter);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList: todoList,
        addTodo: addTodoHandeler,
        deleteTodo: deleteTodoHandeler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
