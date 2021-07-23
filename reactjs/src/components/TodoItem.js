import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const TodoItem = ({ onDelete, todo }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = theme;
  const style = isLightTheme ? light : dark;

  const onRemove = (id) => {
    onDelete(id);
  };

  return (
    <li style={style}>
      {todo.title}
      <button onClick={() => onRemove(todo.id)} className="todoItem-btn">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
