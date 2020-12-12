import React from 'react'
import { observer } from 'mobx-react'
import { count } from '../../state/count'
import './Counter.scss'

const Counter: React.FC = () => {
  return (
    <>
      <div className="count">{count.count}</div>
      <div className="btns">
        <button onClick={() => count.increment()} className="btn">
          +1
        </button>
        <button onClick={() => count.decrement()} className="btn">
          -1
        </button>
        <button onClick={() => count.reset()} className="btn">
          reset
        </button>
      </div>
    </>
  )
}

export default observer(Counter)
