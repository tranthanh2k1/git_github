import React, { createContext, useState } from "react";
import { v4 } from "uuid";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
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

  const TodoContextData = {
    todos,
    onAdd,
    onDelete,
    // useReducer: là kho chứa tất cả hàm, những hàng động mà ng dùng tác động lên trên components
  };

  return (
    <TodoContext.Provider value={TodoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
