import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>   
      <h1>hello world</h1>
      <Footer></Footer>
    </>
  )
}

export default App
