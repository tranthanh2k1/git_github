import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { v4 } from "uuid";

const TodoList = () => {
  // sử dụng state để sét giá trị mặc định, method setState để thay đổi giá trị mặc định
  const [todos, setTodos] = useState([
    {
      id: v4(),
      title: "Việc 1",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Việc 2",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Việc 3",
      isCompleted: false,
    },
  ]);

  const onAdd = (todo) => {
    setTodos([
      ...todos, //spread operator
      {
        id: v4(),
        title: todo,
        isCompleted: false,
      },
    ]);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const handleCheckbox = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <AddTodo onAdd={onAdd} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={onDelete}
            handleCheckbox={handleCheckbox}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
