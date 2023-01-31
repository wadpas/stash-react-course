import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Persons from './components/Persons'
import RandomNumber from './components/RandomNumber'

const texts = ['Click', 'Hit', 'Press']

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Persons />
      <RandomNumber maxNum={50} />
      <Counter count={count} onClick={incrementCount} texts={texts} />
    </div>
  )
}

export default App
