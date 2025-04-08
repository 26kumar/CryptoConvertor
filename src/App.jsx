import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchedData from './components/FetchedData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FetchedData/>
  )
}

export default App
