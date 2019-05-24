import { createContext } from 'react'

// Reactが提供するcreateContextでContextを作成します。
// 作成したContextは、1つはProviderコンポーネントとして、もう1つはConsumerコンポーネントとして利用します。
// このファイルの責任は、Contextを作成すること、そして、作成したContextをコンポーネント側で利用できるようにexportするだけです。
const CounterContext = createContext()
export default CounterContext
