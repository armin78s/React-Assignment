import React from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
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
        {props.todoItems.map((todo) => (
          <tr key={todo.id}>
            <TodoItem
              index={index++}
              todo={todo}
              deleteItem={props.onDeleteTodo}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
