import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Header from '../components/todo/Header'
import List from '../components/todo/List'
import Footer from '../components/todo/Footer'

import {
  fetchTodos,
  insertTodo,
  updateTodoStatus,
  deleteTodo,
} from '../service/todo'

import { useTodoContext } from '../components/context'

const Container = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

function TodoPage() {
  //   const [todos, setTodos] = useState([])

  //   const value = useTodoContext()

  const {
    state: { filteredTodos },
    action: { setTodos },
  } = useTodoContext()

  // 라이프 사이클과 비슷한 효과
  useEffect(() => {
    fetchAndSetTodos()
  }, [])

  async function fetchAndSetTodos() {
    const todos = await fetchTodos()

    //
    setTodos(todos)
  }

  // todo와 가까운 곳에 위치한다
  // 액션은 header에서 일어남
  // * 컨벤션 : 누구한테 넘겨줄 땐 on, 내꺼 제어는 handle
  const handleAddTodo = async (label) => {
    const success = await insertTodo(label)

    if (!success) {
      window.alert('일시적인 에러가 발생했습니다. 잠시 후 시도해주세요.')
      return
    }

    fetchAndSetTodos()
  }

  // 외부(자식)로 부터 받은 업데이트할 대상
  const handleUpdateTodo = async (todo) => {
    console.log('todo ', todo)

    // const update = { ...todo, isDone: !todo.isDone }
    const success = await updateTodoStatus({ ...todo, isDone: !todo.isDone })

    if (!success) {
      window.alert('일시적인 에러가 발생했습니다. 잠시 후 시도해주세요.')
      return
    }

    fetchAndSetTodos()
  }

  const handleDeleteTodo = async (id) => {
    // const update = { ...todo, isDone: !todo.isDone }
    const success = await deleteTodo(id)

    if (!success) {
      window.alert('일시적인 에러가 발생했습니다. 잠시 후 시도해주세요.')
      return
    }

    fetchAndSetTodos()
  }

  return (
    <Container>
      <Header onAddTodo={handleAddTodo} />
      <List
        todos={filteredTodos}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <Footer />
    </Container>
  )
}

export default TodoPage
