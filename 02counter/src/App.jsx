import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 10

  const addValue = () => {
    // console.log("Clicked", Math.random());
    // counter = counter + 1
    setCounter(counter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    console.log("Clicked", counter);
  }

  const removeValue = () => {
    // console.log("Clicked", Math.random());
    // counter = counter + 1
    setCounter(counter - 1)
    console.log("Clicked", counter);
  }

  return (
    <>
    <h1>Testing ...</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
