import React from 'react'
import { render } from 'react-dom'
import { Footer } from '../components'
import{ AddTodo, VisibleTodoList } from '../containers'
import {MainDiv} from '../assets/styles'
const App = () => (
  <div>
    <MainDiv>
      <AddTodo />
      <VisibleTodoList />
    </MainDiv>
  </div>
)

export default App