import React, { useState, useContext } from "react";
import { v4 } from "uuid";

import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const AddTodo = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = theme;
  const style = isLightTheme ? light : dark;

  const { dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState("");

  const onHandleValue = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        todo: {
          id: v4(),
          title,
        },
      },
    });
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Thêm việc cần làm..."
        onChange={onHandleValue}
        required
      />
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default AddTodo;
