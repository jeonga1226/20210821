import React from 'react'

import styled from 'styled-components'

import Header from '../components/todo/Header'
import List from '../components/todo/List'
import Footer from '../components/todo/Footer'

const Container = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

function TodoPage() {
  return (
    <Container>
      <Header />
      <List />
      <Footer />
    </Container>
  )
}

export default TodoPage
