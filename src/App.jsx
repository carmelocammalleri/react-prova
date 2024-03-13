import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
    </>
  )
}

export default App
