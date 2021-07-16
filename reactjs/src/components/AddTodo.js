import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const AddTodo = ({ onAdd }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = theme;
  const style = isLightTheme ? light : dark;

  const [textInput, setTextInput] = useState("");

  const onHandleValue = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(textInput);
    setTextInput("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        value={textInput}
        placeholder="Thêm việc cần làm..."
        onChange={onHandleValue}
        required
      />
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default AddTodo;
