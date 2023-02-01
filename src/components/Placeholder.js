import { useEffect, useState } from 'react'

function Placeholder() {
  const [todo, setTodo] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json))
  }, [])

  return <div>{todo && <h1>{todo.title}</h1>}</div>
}

export default Placeholder
