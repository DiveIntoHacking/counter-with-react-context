import React from 'react'

import Counter from './Counter'
import HookedCounter from './HookedCounter'
import CounterContext from './CounterContext'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)

    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement
    }
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  decrement() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    // ポイントは、Providerコンポーネントでデータを共有したいコンポーネントをwrapすることです。
    // この例では、Counterコンポーネントの中に共有したいデータがあるので、Counterコンポーネントをwrapしています。
    // また、共有したいデータは、カウンタの値(counter)と増減するための関数(incrementとdecrement)です。
    // valueに渡したデータが変更されると、それを購読しているConsumerコンポーネントでも検知することができ、
    // 変更後の値を再描画することができます。
    return (
      <CounterContext.Provider value={this.state}>
        <div>Provider側が認識しているカウンタの値: {this.state.count}</div>
        <Counter />
        <HookedCounter />
      </CounterContext.Provider>
    )
  }
}

export default App
