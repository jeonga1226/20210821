import React from 'react'

import styled from 'styled-components'

const Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  &:last-child {
    border-bottom: none;
  }
`

const ToggleButton = styled.input`
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  appearance: none;
  ${({ completed }) =>
    completed &&
    `
  	    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E');
        height: 40px;
    `}
`

const Label = styled.label`
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  ${({ completed }) =>
    completed &&
    `
        color: #d9d9d9;
        text-decoration: line-through;
    `}
`

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  display: block;
  color: #c18585;
  &::after {
    content: '×';
    display: block;
    height: 100%;
    line-height: 1.1;
  }
`

function List() {
  return (
    <Container>
      <Item>
        <ToggleButton type="checkbox" />
        <Label>아이유 뮤비보기</Label>
        <DeleteButton />
      </Item>
      <Item>
        <ToggleButton type="checkbox" />
        <Label>아이유 뮤비보기</Label>
        <DeleteButton />
      </Item>
      <Item>
        <ToggleButton type="checkbox" />
        <Label>아이유 뮤비보기</Label>
        <DeleteButton />
      </Item>
    </Container>
  )
}

export default List
