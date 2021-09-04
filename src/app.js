import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TodoPage from './pages/Todo'
import ErrorPage from './pages/Error'

const ROUTES = {
  TODO: '/',
  SIGNUP: '/signup',
}

/**
 * 컴포넌트들의 최상위 컴포넌트 => App.js
 */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* / 나 /todo 모두 / 이니까 /로 들어왔을 땐 todo 페이지*/}
        <Route exact path={ROUTES.TODO}>
          <TodoPage />
        </Route>
        <Route>
          {/* 그 외에 정의되지 않은 페이지는 error page */}
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
