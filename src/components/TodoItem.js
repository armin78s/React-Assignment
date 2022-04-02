import React, { Fragment} from "react";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const deleteTodoItem = () => {
    dispatch({ type: 'REMOVE' , itemId:props.todo.id});
  };
  return (
    <Fragment>
      <td className="border border-slate-600">{props.index}</td>
      <td className="border border-slate-600">{props.todo.title}</td>
      <td className="border border-slate-600">{props.todo.description}</td>
      <td className="border border-slate-600">
        {props.todo.date.toLocaleString("en-US", { month: "long" })}/
        {props.todo.date.toLocaleString("en-US", { day: "2-digit" })}/
        {props.todo.date.getFullYear()}
      </td>
      <td className="border border-slate-600">
        <button className="bg-red-600 text-white px-4 py-1 rounded-md border border-slate-500" onClick={deleteTodoItem}>Delete</button>
      </td>
    </Fragment>
  );
};

export default TodoItem;
