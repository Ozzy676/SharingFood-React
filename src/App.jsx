import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Form from './components/Form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-grid">
      <Header />
      <Sidebar />
      <Form />
    </div>

  )
}

export default App
