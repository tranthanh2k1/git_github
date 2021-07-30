import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = theme;
  const style = isLightTheme ? light : dark;

  const { dispatch } = useContext(TodoContext);

  return (
    <li style={style}>
      {todo.title}
      <button
        onClick={() =>
          dispatch({
            type: "DELETE_TODO",
            payload: {
              id: todo.id,
            },
          })
        }
        className="todoItem-btn"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
