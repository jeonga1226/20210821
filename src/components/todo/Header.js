import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div``

const CheckButton = styled.div`
  width: 60px;
  font-size: 0;
  position: absolute;
  top: 0;
  left: -32px;
  transform: rotate(90deg);
  height: 65px;
  width: 65px;
  &::before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;

    ${({ Checked }) => Checked && 'colors:#736363;'}
  }
`

const Input = styled.input`
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  box-sizing: border-box;
`

function Header({ onAddTodo }) {
  const [label, setLabel] = useState('')

  // 라벨을 변경시키는 함수구나... 짐작
  const handleLabel = (event) => {
    setLabel(event.target.value) // 지금 input의 값으로 label을 바꿀거다
  }

  // 엔터키 감지
  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      // label 데이터를 서버로 보내서 추가 되어야함
      // 헤더 값을 형제값인 body에 준다
      // 부모로부터 받은 함수에 자신의 값을 넘겨준다
      onAddTodo(label)
      setLabel('') // 비워주면 label이 비면서 input 도 비어짐 => 양방향 데이터 바인딩
    }
  }

  return (
    <Container>
      <CheckButton a={10} b={20} Checked={true} />
      <Input value={label} onChange={handleLabel} onKeyPress={handleEnter} />
    </Container>
  )
}

export default Header
