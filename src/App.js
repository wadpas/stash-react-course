import './App.css'
import PetInfo from './components/PetInfo'
import RandomNumber from './components/RandomNumber'

function App() {
  return (
    <div className="App">
      <div>
        <PetInfo animal="cat" age="3" />
        <PetInfo animal="dog" age="4" hasPet={false} />
      </div>
      <RandomNumber maxNum={50} />
    </div>
  )
}

export default App
