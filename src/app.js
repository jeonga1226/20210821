// 컴포넌트 만드는 방법

// 1. class => 라이프 사이클 함수 지원, state 상태값 가질 수 있다
//          => 잘 사용하지 않음
// 2. function => 라이프 사이클 함수 지원 X, state 가질 수 없다
//             => 단순 히 외부로 부터 값을 받아서 노출한다. 

// 16.8 React hook
// hook 을 이용하면 function state 가질 수 있고, 라이프 사이클을 흉내 낼수 있다.
import React from 'react'

function App(){
    return <div>Hello App!</div>
}

export default App