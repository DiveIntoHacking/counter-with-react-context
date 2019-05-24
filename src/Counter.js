import React from 'react'

import CounterContext from './CounterContext'

// 本ファイルでは、Counterコンポーネントを定義しています。
// Counterコンポーネントの内部にConsumerコンポーネントを設置します。
// Consumerコンポーネントでは、対のProviderコンポーネントが設定するvalueの値を常に購読しています。つまり監視しているんですね。
// Providerコンポーネントがvalueを設定する時で、かつ、値が変更された時などにそれを検知し、対応するDOMを再描画することができます。
//
// このアプリケーションの場合は、カウンタの値(counter)と増減するための関数(incrementとdecrement)が渡されます。
// 変わりうるのは、カウンタの値です。
// +1ボタンや-1ボタンをクリックしてカウンタの値を変更してみましょう。
// Provider側が認識しているカウンタの値とConsumer側が認識しているカウンタの値が常に同期していることがわかるでしょう。
//
// 次に、使い方です。
// Consumerコンポーネントの内部にコールバックを設置します。
// そのコールバックの引数には、Providerコンポーネントがvalueに設定するオブジェクトを受け取ることができます。
// 今回のアプリケーションの場合は、カウンタの値(counter)と増減するための関数(incrementとdecrement)の3つです。
// 受け取った値や関数を適宜domに描画したり、onClick等のコールバックとして関連付けたりします。
const Counter = () => {
  return (
    <CounterContext.Consumer>
      {
        ({ count, increment, decrement }) =>  {
          return (
            <>
              <div>Consumer(Counterコンポーネント)側が認識しているカウンタの値: {count}</div>
              <button onClick={increment}>+1</button>
              <button onClick={decrement}>-1</button>
            </>
          )
        }
      }
    </CounterContext.Consumer>
  )
}

export default Counter
