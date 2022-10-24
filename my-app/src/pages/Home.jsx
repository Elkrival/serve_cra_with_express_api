import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/data">Data</Link>
      </header>
    </div>
  )
}

export default Home
