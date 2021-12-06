export async function fetchApi(route, option) {
  const resp = await fetch(`http://localhost:5000/api/${route}`, option);
  const todoData = await resp.json();
  return todoData.data;
}
