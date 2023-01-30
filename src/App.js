import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import PetInfo from './components/PetInfo'
import RandomNumber from './components/RandomNumber'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <div>
        <PetInfo animal="cat" age="3" />
        <PetInfo animal="dog" age="4" hasPet={false} />
      </div>
      <RandomNumber maxNum={50} />
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
    </div>
  )
}

export default App
