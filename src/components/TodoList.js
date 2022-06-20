import React from "react";
//import components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos, setEditTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            todos={todos}
            todo={todo}
            setEditTodo={setEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
