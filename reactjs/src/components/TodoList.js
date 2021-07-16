import React, { useContext } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
  const { todos, onAdd, onDelete } = useContext(TodoContext);

  return (
    <div className="todo-list">
      <AddTodo onAdd={onAdd} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
