import React, { useState } from "react";
import PropTypes from "prop-types";
function Todo({ id, todoTitle, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const [showEdit, setShowEdit] = useState({
    id: null,
    show: false,
  });
  const onToggleEdit = (id) => {
    setShowEdit({ id: id, show: !showEdit.show });
    console.log(showEdit);
  };
  const onEditTodo = (e) => {
    setEdit(e.target.value);
  };
  const submitUpdate = (e, id) => {
    const newEditTodo = e.target.value;
    if (e.key === "Enter" && newEditTodo) {
      setEdit({
        id: id,
        value: newEditTodo,
      });
      onToggleEdit(id);
      console.log(edit);
      editTodo(id, newEditTodo);
      setEdit({
        id: id,
        value: "",
      });
    }
  };

  return (
    <div className="todo">
      <button className="Todo-delete btn" onClick={() => removeTodo(id)}>
        Del
      </button>
      <button className="Todo-edit btn" onClick={() => onToggleEdit(id)}>
        Edit
      </button>
      {showEdit.show ? (
        <input
          type="text"
          placeholder="Edit a toto"
          value={edit.value}
          className="edit-input"
          onChange={onEditTodo}
          onKeyDown={(e) => submitUpdate(e, id)}
        />
      ) : (
        <div className="Todo-title">
          Id:{id} Todo: {todoTitle}
        </div>
      )}
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  todoTitle: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
