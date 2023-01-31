function Counter({ count, onClick, texts }) {
  return (
    <div>
      <h1>Total clicks: {count}</h1>
      {texts.map((text) => {
        return (
          <button onClick={onClick} key={text}>
            {text} me
          </button>
        )
      })}
    </div>
  )
}

export default Counter
