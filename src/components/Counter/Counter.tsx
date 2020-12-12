import React from 'react'
import { observer } from 'mobx-react'
import { count } from '../../state/count'
import './Counter.scss'

const Counter: React.FC = () => {
  const increment = () => {
    count.increment()
  }
  const decrement = () => {
    count.decrement()
  }
  const reset = () => {
    count.reset()
  }

  return (
    <>
      <div className="count">{count.count}</div>
      <div className="btns">
        <button onClick={increment} className="btn">
          +1
        </button>
        <button onClick={decrement} className="btn">
          -1
        </button>
        <button onClick={reset} className="btn">
          reset
        </button>
      </div>
    </>
  )
}

export default observer(Counter)
