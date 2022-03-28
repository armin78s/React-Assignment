import { useContext } from "react";
import TodoContext from "../store/todo-context";

const useTodolist = () =>{
    const context = useContext(TodoContext);

    const deleteTodo = (id) =>{
        context.deleteTodo(id);
    }

    return{
        todoList: context.todoList,
        deleteTodo : deleteTodo
    }
}

export default useTodolist;