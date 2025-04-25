import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import Boxswitch from './components/Boxswitch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Product/>
    <Boxswitch/>
    </>
  )
}

export default App
