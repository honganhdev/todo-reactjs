function TodoComponent({ todo, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(todo.id)}>Complete</button>
        <button onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </div>
  );
}
export default TodoComponent;
