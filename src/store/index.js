import { createStore } from "redux";

const todoReducer = (state = { todoList: [] }, action) => {
  if (action.type === "ADD") {
    return { todoList: [...state.todoList, action.item] };
  }
  if (action.type === "REMOVE") {
    const tmp = [...state.todoList];
    const filter = tmp.filter((todo) => todo.id !== action.itemId);
    return {
      todoList: filter,
    };
  }
  return state;
};

const store = createStore(todoReducer);

export default store;
