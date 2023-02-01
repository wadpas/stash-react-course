function Counter({ count, incrementCount, resetCount, texts }) {
  return (
    <div>
      <h1>Total clicks: {count}</h1>
      {texts.map((text) => {
        return (
          <button onClick={incrementCount} key={text}>
            {text} me
          </button>
        )
      })}
      {!!count && (
        <div>
          <button
            style={{ backgroundColor: 'lightcoral' }}
            onClick={resetCount}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  )
}

export default Counter
