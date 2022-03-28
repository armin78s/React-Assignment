import React, { useState, useContext } from "react";
import classes from "./TodoForm.module.css";
import TodoContext from "../store/todo-context";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const context = useContext(TodoContext);

  const titleChangeHandeler = (event) => {
    setTitle(event.target.value);
    setError(false);
  };

  const dateChangeHandeler = (event) => {
    setDate(event.target.value);
    setError(false);
  };
  const descriptionChangeHandeler = (event) => {
    setDescription(event.target.value);
    setError(false);
  };

  const addNewTodo = (event) => {
    event.preventDefault();
    if (title.trim() === "" || date === "" || description.trim() === "") {
      setError(true);
      return;
    }

    const todo = {
      title: title,
      date: new Date(date),
      description: description,
    };

    context.addTodo(todo);

    setTitle("");
    setDate("");
    setDescription("");
    setError(false);
  };
  return (
    <div className={classes.todoForm}>
      <form onSubmit={addNewTodo}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={titleChangeHandeler}
          value={title}
        />
        <label className={classes.due} htmlFor="dueDate">
          Due Date
        </label>
        <input
          id="dueDate"
          type="date"
          value={date}
          onChange={dateChangeHandeler}
        />
        <div className={classes.textarea}>
          <label htmlFor="desc">Description</label>
          <br />
          <textarea
            id="desc"
            type="text"
            value={description}
            onChange={descriptionChangeHandeler}
            rows="7"
            cols="72"
          />
        </div>
        {error && (
          <h4 style={{ color: "red" }}>Please fill all the required fields</h4>
        )}
        <button className={classes.button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
