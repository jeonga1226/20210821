// 서버로부터 todo 리스트를 받아온다

export async function fetchTodos() {
  // 비동기 20s
  const response = await fetch('http://localhost:3000/todos')

  // status = 200 OK => ok
  // response.status === 200
  if (response.ok) {
    const todos = await response.json()

    return todos
  }
  return []
}
