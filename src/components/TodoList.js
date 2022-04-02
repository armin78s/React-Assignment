import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todoList = useSelector(state => state.todoList);
  let index = 1;
  return (
    <table className="border-collapse border border-slate-600 shadow-lg mt-8 m-auto">
      <thead>
        <tr>
          <th className="border border-slate-600">No</th>
          <th className="border border-slate-600">Title</th>
          <th className="border border-slate-600">Description</th>
          <th className="border border-slate-600">Due Date</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todo) => (
          <tr key={todo.id}>
            <TodoItem
              index={index++}
              todo={todo}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
