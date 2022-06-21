import React, { useEffect, useState } from "react";
import "./App.css";
//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  //Use Effect Run once when start
  useEffect(() => {
    document.title = "Todo List App";
    getLocalTodos();
  }, []);

  //Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Save to local
  const saveLocalTodos = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  //get Local
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setEditTodo={setEditTodo}
      />
    </div>
  );
}

export default App;
