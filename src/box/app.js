// 컴포넌트 만드는 방법

// 1. class => 라이프 사이클 함수 지원, state 상태값 가질 수 있다
//          => 잘 사용하지 않음
// 2. function => 라이프 사이클 함수 지원 X, state 가질 수 없다
//             => 단순 히 외부로 부터 값을 받아서 노출한다.

// 16.8 React hook
// hook 을 이용하면 function state 가질 수 있고, 라이프 사이클을 흉내 낼수 있다.
import React, { useState } from 'react'

// useXXX => hook, functional 컴포넌트 내부에서만 사용이 가능
// 지금의 백그라운드 칼라 #efefef => state => change => hotpink
// 변화될 백그라운드 칼라 hotpink
// rerender => state값이 변하면 컴포넌트를 다시 그린다.

// state : 스타일을 변화시키고 싶다
//const [값, 값을 바꿀 수 있는 함수] = useState(기본값)

function App() {
  const [boxStyle, setBoxStyle] = useState({
    width: 100,
    height: 100,
    backgroundColor: '#efefef',
  })

  console.log(boxStyle)

  const { width, height, backgroundColor } = boxStyle

  // state를 다루는 함수는 앞에 handle 이라는 이름을 붙인다. 약속된 컨벤션
  // 버튼이 눌렷을때 박스사이즈를 키운다
  // boxstyle의 넓이값과 높이값에 *2한다
  // 값이 변한다 -> 컴포넌트가 다시그려진다.
  const handleIncrementBoxSize = () => {
    console.log('click')
    setBoxStyle({
      ...boxStyle, // backgrounColor는 유지한다
      width: boxStyle.width * 2,
      height: boxStyle.height * 2,
    })
  }

  return (
    <div>
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        }}
      >
        box
      </div>
      <button onClick={handleIncrementBoxSize}>+</button>
    </div>
  )
}

export default App

// export { App } => 여러개를 내보낼 때 용이
// export default App 함수자체 => 하나만 내보낼 때는 default
