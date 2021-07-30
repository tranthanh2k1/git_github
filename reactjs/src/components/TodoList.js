import React, { useContext } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);

  return (
    <div className="todo-list">
      <AddTodo />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
