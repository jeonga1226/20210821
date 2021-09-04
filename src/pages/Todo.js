import React, { useEffect } from 'react'

import styled from 'styled-components'

import Header from '../components/todo/Header'
import List from '../components/todo/List'
import Footer from '../components/todo/Footer'

import { fetchTodos } from '../service/todo'

const Container = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

function TodoPage() {
  // 라이프 사이클과 비슷한 효과
  useEffect(() => {
    async function fetchAndSetTodos() {
      const todos = await fetchTodos()
      console.log('mountes....', todos)
    }

    fetchAndSetTodos()
  }, [])
  return (
    <Container>
      <Header />
      <List />
      <Footer />
    </Container>
  )
}

export default TodoPage
