// 서버로부터 todo 리스트를 받아온다
// GET = 서버로 부터 데이터를 받아올 때
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

// POST = 서버로 데이터를 보내야 할 때
export async function insertTodo(label) {
  const response = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 받아온 타입
    },
    body: JSON.stringify({
      isDone: false,
      label,
    }),
  })

  return response.ok //true or false
}

// PUT = 업데이트 업데이트주소/:id
// todo = 업데이트가 되어야 할 값
export async function updateTodoStatus(todo) {
  const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })

  return response.ok
}

// DELETE
export async function deleteTodo(id) {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE',
  })

  return response.ok
}
