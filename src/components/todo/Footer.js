import React from 'react'
import styled from 'styled-components'
import { useTodoContext } from '../context'

const Container = styled.div`
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  font-size: 15px;
  border-top: 1px solid #e6e6e6;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`

const CountText = styled.div`
  float: left;
  text-align: left;
  font-weight: 300;
`

const Filter = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
`

const Item = styled.li`
  display: inline;
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }
  ${({ selected }) =>
    selected &&
    `
        border-color: rgba(175, 47, 47, 0.2);
    `}
`
const FILTER_TYPES = ['전체', '진행중', '완료']
function Footer() {
  const {
    state: { filterType },
    action: { setFilterType },
  } = useTodoContext()

  return (
    <Container>
      {/* active todos 의 갯수 */}
      <CountText>{`10 item left`}</CountText>
      <Filter>
        {FILTER_TYPES.map((type, idx) => {
          return (
            <Item
              key={idx}
              selected={filterType === type}
              onClick={() => setFilterType(type)}
            >
              {type}
            </Item>
          )
        })}
      </Filter>
    </Container>
  )
}

export default Footer
