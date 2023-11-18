import Counter from "./Counter"
import Heading from "./Heading"
import List from "./List"
import Section from "./Section"
import { useState } from "react"


function App() {

  const [count, setCount]  = useState(1)


  return (
    <>
      <Heading title="hello" />
      <Section title="different title">This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["coffee","Tacos","code"]}
    </>
  )
}

export default App
