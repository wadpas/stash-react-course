import { useEffect, useState } from 'react'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }
  return (
    <div>
      <h1>Posts</h1>
      {isLoading ? (
        <h1>Is loading...</h1>
      ) : (
        posts.map((post) => <Post {...post} key={post.id} />)
      )}
    </div>
  )
}

export default Posts
