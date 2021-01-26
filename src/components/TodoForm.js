import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router-dom";
function TodoForm({ addTodo }) {
  let history = useHistory();
  const [input, setInput] = useState("");

  function onChange(event) {
    setInput(event.target.value);
  }

  function onKeyDown(event) {
    const newTodo = event.target.value;
    if (event.key === "Enter" && newTodo) {
      addTodo(newTodo);
      setInput("");
    }
  }
  return (
    <div className="todoinputheader">
      <input
        type="text"
        placeholder="Add a toto"
        value={input}
        className="todo-input"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default TodoForm;
