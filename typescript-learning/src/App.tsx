// import Counter from "./Counter"
import CounterReducer from "./CounterReducer"
// import Heading from "./Heading"
// import List from "./List"
// import Section from "./Section"
// import { useCallback, useEffect, useMemo, useRef, useState } from "react"

// interface User {
//   id: number,
//   username:string,
//  }



function App() {

  // const [user,setUser] = useState<User[] | null>(null)
  // const [count, setCount] = useState<number>(1)

  // const inputRef = useRef<HTMLInputElement>(null)

  // console.log(inputRef?.current)
  // console.log(inputRef?.current?.value)


  // useEffect(() => {
  //   console.log("mounting")
  //   return () => {
  //     console.log("unmounting")
  //   }
  // }, [])

  // const addTwo = useCallback((): void => setCount(prev => prev + 2), [])

  // type fibFunc = (n: number) => number

  // const fib: fibFunc = (n) => {
  //   if (n < 2) return n
  //   return fib(n - 1) + fib(n - 2)
  // }

  // const myNumber: number = 30

  // const result = useMemo<number>(() => fib(myNumber), [myNumber])

  return (
    <>
      {/* <Heading title="hello" />
      <Section title="different title">This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["coffee", "Tacos", "code"]} render={(item: string) => <strong>{item}</strong>} />
      <button onClick={addTwo}>addTwo</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} /> */}
      <CounterReducer>{(num: number) => <>Current Count: {num}</>}</CounterReducer>
    </>
  )
}

export default App
