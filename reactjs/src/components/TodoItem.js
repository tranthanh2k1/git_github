import React from "react";

const TodoItem = (props) => {
  const onChangeCheckbox = (id) => {
    props.handleCheckbox(id);
  };

  const onRemove = (id) => {
    props.onDelete(id);
  };

  const todoItemTitle = {
    flex: 5,
    textDecoration: props.todo.isCompleted ? "line-through" : "none",
  };

  return (
    <>
      <div className="todo-item">
        <input
          type="checkbox"
          onChange={() => onChangeCheckbox(props.todo.id)}
          className="todoItem-checkbox"
        />
        <p style={todoItemTitle} className="todoItem-title">
          {props.todo.title}
        </p>
        <button
          onClick={() => onRemove(props.todo.id)}
          className="todoItem-btn"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
