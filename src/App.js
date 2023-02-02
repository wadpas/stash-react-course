import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Login from './components/Login'
import Persons from './components/Persons'
import Posts from './components/Posts'
import RandomNumber from './components/RandomNumber'

const texts = ['Click', 'Hit', 'Press']

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Login />
      <Persons />
      <RandomNumber maxNum={50} />
      <Counter
        count={count}
        incrementCount={incrementCount}
        resetCount={resetCount}
        texts={texts}
      />
      <Posts />
    </div>
  )
}

export default App
