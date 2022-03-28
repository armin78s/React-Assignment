import React, { Fragment} from "react";
import classes from "./TodoItem.module.css";
import useTodolist from "../hook/use-todolist";

const TodoItem = (props) => {
  const {deleteTodo} = useTodolist();
  const deleteTodoItem = () => {
    deleteTodo(props.todo.id);
  };
  return (
    <Fragment>
      <td>{props.index}</td>
      <td>{props.todo.title}</td>
      <td>{props.todo.description}</td>
      <td>
        {props.todo.date.toLocaleString("en-US", { month: "long" })}/
        {props.todo.date.toLocaleString("en-US", { day: "2-digit" })}/
        {props.todo.date.getFullYear()}
      </td>
      <td>
        <button className={classes.button} onClick={deleteTodoItem}>Delete</button>
      </td>
    </Fragment>
  );
};

export default TodoItem;
