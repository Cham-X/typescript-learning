import { ReactNode, useState } from "react"

type childrenType = {
    children: (num: number) => ReactNode
}

export default function CounterReducer({children}:childrenType) {
    const [count, setCount] = useState<number>(1)

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)

    return (
        <>
            <h1>{children(count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}