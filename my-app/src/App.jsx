import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Data from './pages/Data'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="data" element={<Data />} />
      </Routes>
    </div>
  )
}

export default App
