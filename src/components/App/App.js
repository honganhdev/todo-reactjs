import React from "react";
import "./App.css";
import { TodoList } from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";
import useFetchData from "../../hooks/useFetchApi";
import {
  addTodoFunc,
  deleteTodoFunc,
  updateTodoFunc,
} from "../../helpers/functionCRUD";

function App() {
  const {
    data: todos,
    loading,
    setData: setTodos,
  } = useFetchData({
    url: "http://localhost:5000/api/todos",
  });

  const addTodo = async (text) => {
    const newTodo = await addTodoFunc(text);
    setTodos([...todos, newTodo]);
  };

  const completeTodo = async (id) => {
    id = parseInt(id);
    const updatedTodo = await updateTodoFunc(id, { isCompleted: true });
    const newTodos = todos.map((todoItem) => {
      if (id === todoItem.id) return updatedTodo;
      return todoItem;
    });
    setTodos(newTodos);
  };

  const removeTodo = async (id) => {
    id = parseInt(id);
    const delTodo = await deleteTodoFunc(id);
    todos.splice(todos.indexOf(delTodo), 1);
    setTodos([...todos]);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          loading={loading}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
