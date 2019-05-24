import React, { useContext } from 'react'

import CounterContext from './CounterContext'

// 本コンポーネントはCounterコンポーネントと同等の機能を持ちます。
// useContextを使用することでよりすっきりとした見た目となります。
// Counterコンポーネントが17行に対して、HookedCounterコンポーネントはわずか10行で実装できています。
const HookedCounter = () => {
  const { count, increment, decrement } = useContext(CounterContext)
  return (
    <>
      <div>Consumer(HookedCounterコンポーネント)側が認識しているカウンタの値: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  )
}

export default HookedCounter
