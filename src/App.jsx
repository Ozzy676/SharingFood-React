import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{marginLeft: '0'}}>
      <Header />
      <Sidebar />
    </div>
  )
}

export default App
