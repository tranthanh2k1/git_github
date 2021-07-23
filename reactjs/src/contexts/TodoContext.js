import React, { createContext, useState, useEffect } from "react";
import { v4 } from "uuid";
import axios from "axios";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // const API = "http://localhost:3001/todos";

  const onAdd = async (todo) => {
    await axios.post(`http://localhost:3001/todos`, {
      id: v4(),
      title: todo,
      isCompleted: false,
    });

    setTodos([
      ...todos, //spread operator
      {
        id: v4(),
        title: todo,
        isCompleted: false,
      },
    ]);
  };

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);

    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // useEffect(() => {}): luôn luôn chạy sau mỗi lần render
  // useEffect(() => {}, []): chạy 1 lần duy nhất
  // useEffect(() => {}, [dependencies]): chạy ít nhất 1 lần nếu dependencies thay đổi thì chạy lại hàm
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:3001/todos`);
      setTodos(data);
    };

    fetchData();
  }, []);

  const TodoContextData = {
    todos,
    onAdd,
    onDelete,
  };

  return (
    <TodoContext.Provider value={TodoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
