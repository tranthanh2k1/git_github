import React, { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/TodoReducer";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // todos: state
  // dispatch: tượng trưng cho tất cả hành động trong kho reducer
  // todoReducer: kho để lưu tất cả hành động, []: giá trị khởi điểm của state
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    dispatch({
      type: "GET_TODOS",
      payload: null,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "SAVE_TODOS",
      payload: { todos },
    });
  }, [todos]);

  const TodoContextData = {
    todos,
    dispatch,
  };

  return (
    <TodoContext.Provider value={TodoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
