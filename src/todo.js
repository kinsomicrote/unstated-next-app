import React from "react";
import { StoreContainer } from "./store";

const TodoComponent = () => {
  const todo = StoreContainer.useContainer();
  return (
    <div>
      <p>Add Todos</p>
      <input type="text" value={todo.item} onChange={todo.handleTodo} />
      <button onClick={todo.handleSubmit}>Add</button>
      <div>
        <p>Dear {todo.name}, here are your current tasks;</p>
        {todo.todos.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.title}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default TodoComponent;