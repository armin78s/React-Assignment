import React,{useContext} from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../store/todo-context";
const TodoList = () => {
  const context = useContext(TodoContext);
  let index = 1;
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {context.todoList.map((todo) => (
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
