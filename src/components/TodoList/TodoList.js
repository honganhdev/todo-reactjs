import React from "react";
import TodoComponent from "../TodoComponent/TodoComponent";

export const TodoList = ({ loading, completeTodo, removeTodo, todos }) => {
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          {todos.map((todo) => (
            <TodoComponent
              key={todo.id}
              id={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};
