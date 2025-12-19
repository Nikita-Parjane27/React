import { useEffect, useState } from "react";
import TodoCard from "./todocard";

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch first 15 todos
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.slice(0, 15));
      });

    // Cleanup function
    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodosList;
