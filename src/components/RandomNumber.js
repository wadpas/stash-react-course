import { useState } from 'react'

function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum))

  function generateRandomNum(maxNumber) {
    return Math.floor(Math.random() * maxNumber)
  }

  function setGenerateNum(maxNumber) {
    setRandomNum(generateRandomNum(maxNumber))
  }

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={() => setGenerateNum(maxNum)}>
        Generate new random number
      </button>
    </div>
  )
}

export default RandomNumber
