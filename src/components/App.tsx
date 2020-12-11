import React from 'react'
import Counter from './Counter/Counter'
import { Container } from './Container/Container'
import Form from './Form/Form'
import List from './List/List'
import './App.scss'

const App: React.FC = () => {
  return (
    <Container>
      <Counter />
      <Form />
      <List />
    </Container>
  )
}

export default App
