import { useState } from "react";

const TodoList = (props) => {
  const append = "[ ] ";
  const [todos, changeTodos] = useState(["clean room", "play"]);

  const emptyTodoList = () => {
    changeTodos([]);
    console.log(todos);
  };

  return (
    <>
      <button onClick={emptyTodoList}>Empty List</button>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{append + todo}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
