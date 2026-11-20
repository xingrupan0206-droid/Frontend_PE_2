import { useState } from 'react'
import './App.css'
import Card from './compoment/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card/>
    </>
  )
}

export default App
