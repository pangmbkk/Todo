import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import axios from "axios";

// let id = 1;
function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3004/todo").then((res) => {
      const todoDb = res.data;
      setTodos(todoDb);
      console.log(todoDb);
    });
  }, []);

  function addTodo(newTodo) {
    axios
      .post("http://localhost:3004/todo", {
        todoTitle: newTodo,
        completeStatus: false,
      })
      .then((res) => {
        console.log("addTodo done:" + res);
        console.log(res.data);
        setTodos([...todos, res.data]);
      });

    // setTodos([{ todoTitle: newTodo }, ...todos]);
  }
  function removeTodo(id) {
    axios.delete("http://localhost:3004/todo/" + id).then((res) => {
      console.log("Dellete Todo with id", id);
    });
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  }
  function editTodo(id, newvalue) {
    axios
      .put("http://localhost:3004/todo/" + id, {
        todoTitle: newvalue,
      })
      .then((res) => {
        console.log("Edit Todo with id", id);
      });
    const updatedTodo = todos.filter((todo) =>
      todo.id === id ? (todo.todoTitle = newvalue) : todo
    );
    setTodos(updatedTodo);
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todoTitle={todo.todoTitle}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </>
  );
}

export default TodoList;
