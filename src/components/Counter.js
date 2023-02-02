import './Counter.css'
import styles from './Counter.module.css'

function Counter({ count, incrementCount, resetCount, texts }) {
  return (
    <div className={styles.counter}>
      <h1>Total clicks: {count}</h1>
      {texts.map((text) => {
        return (
          <button
            className="counter-button"
            onClick={incrementCount}
            key={text}
          >
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
