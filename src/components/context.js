import React, { createContext, useReducer, useContext } from 'react'

// 값을 저장해놓을 박스
const Context = createContext()

// reducer : 정해진 action 대로 값을 바꾼다
// state = context 의 state값
// action = 현재 일어난 action
function reducer(state, action) {
  switch (action.type) {
    // ex.dispatch({ type: 'SET_TODO', payload"[]})
    // 여러개의 데이터를 한번에 업데이트 할 수 있다
    // set todos를 할 때  원본과 필터링 된 결과물을 한번에 저장 할 수 잇다.

    // 원본 [1,2,3], type: 2만 골라내주는 타입, 필터링 배열 [2]
    case 'SET_TODOS': {
      return {
        ...state,
        todos: action.payload,
        filteredTodos: filterTodos(action.payload, state.filterType), // 지금의 필터(ALL, ACTIVE ...)가 적용된
      }
    }

    case 'SET_FILTER': {
      return {
        ...state,
        filterType: action.payload, // 선택된 필터
        filteredTodos: filterTodos(state.todos, action.payload),
      }
    }
  }
}

function filterTodos(todos, type) {
  switch (type) {
    case '전체': {
      return todos
    }
    case '진행중': {
      return todos.filter((todo) => {
        return !todo.isDone
      })
    }
    case '완료': {
      return todos.filter((todo) => {
        return todo.isDone
      })
    }
  }
}

// Provider => 박스 값을 제공해주는 제공자
export function TodoContextProvider({ children }) {
  // state = 상태값
  // dispatch = 액션을 일으키는 함수

  const [state, dispatch] = useReducer(reducer, {
    todos: [], // 원본 배열
    filteredTodos: [], // 필터링 된 결과물
    filterType: '전체',
  })

  const setTodos = (todos) => {
    //실제  action을 일으켜서 reducer전달
    dispatch({ type: 'SET_TODOS', payload: todos })
  }

  const setFilterType = (type) => {
    dispatch({ type: 'SET_FILTER', payload: type })
  }

  const value = {
    state,
    action: {
      setTodos,
      setFilterType,
    },
  }

  return (
    <Context.Provider value={value}>
      {/*요 안에 들어오는 값들은 박스의 값을 제공받을 수 있다.*/}
      {children}
    </Context.Provider>
  )
}

export function useTodoContext() {
  return useContext(Context)
}
