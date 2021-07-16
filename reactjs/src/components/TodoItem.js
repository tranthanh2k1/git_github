import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const TodoItem = (props) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = theme;
  const style = isLightTheme ? light : dark;

  const onRemove = (id) => {
    props.onDelete(id);
  };

  // const todoItemTitle = {
  //   flex: 5,
  //   textDecoration: props.todo.isCompleted ? "line-through" : "none",
  // };

  return (
    <li style={style}>
      {props.todo.title}
      <button onClick={() => onRemove(props.todo.id)} className="todoItem-btn">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
