import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

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
      id: Math.random().toString(),
      title: title,
      date: new Date(date),
      description: description,
    };

    dispatch({ type: "ADD", item: todo });

    setTitle("");
    setDate("");
    setDescription("");
    setError(false);
  };
  return (
    <form onSubmit={addNewTodo} className="grid place-items-center mt-4">
      <div>
        <label className="text-xl" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          onChange={titleChangeHandeler}
          className="mr-6 px-4 shadow-lg py-1 rounded-md border-2 border-zinc-600"
          value={title}
        />
        <br className="sm:hidden" />
        <br className="sm:hidden"/>
        <label className="text-xl" htmlFor="dueDate">
          Due Date
        </label>
        <input
          id="dueDate"
          type="date"
          value={date}
          onChange={dateChangeHandeler}
          className="shadow-lg py-1 rounded-md border-2 border-zinc-600"
        />
      </div>
      <div className="mt-6">
        <label className="text-xl" htmlFor="desc">
          Description
        </label>
        <br />
        <textarea
          id="desc"
          type="text"
          value={description}
          onChange={descriptionChangeHandeler}
          className="resize-none rounded-md border-2 shadow-lg border-zinc-600"
          rows="7"
          cols="72"
        />
      </div>
      {error && (
        <h4 style={{ color: "red" }}>Please fill all the required fields</h4>
      )}
      <button
        className="shadow-md mt-5 bg-green-600 text-white px-16 py-2 rounded-md border border-slate-600"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
