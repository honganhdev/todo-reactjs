export async function deleteTodoFunc(id) {
  const option = { method: "DELETE" };
  const resp = await fetch(`http://localhost:5000/api/todos/${id}`, option);
  const todoData = await resp.json();
  return todoData.data;
}

export async function addTodoFunc(text) {
  const option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text }),
  };
  const resp = await fetch(`http://localhost:5000/api/todos`, option);
  const todoData = await resp.json();
  return todoData.data;
}

export async function updateTodoFunc(id, data) {
  const option = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const resp = await fetch(`http://localhost:5000/api/todos/${id}`, option);
  const todoData = await resp.json();
  return todoData.data;
}
