import { useState } from 'react'
import './App.css'
import Increment from './components/Increment.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Increment/>


    </>
  )
}

export default App
