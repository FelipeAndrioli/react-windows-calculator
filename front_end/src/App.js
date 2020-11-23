import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Calculator from './components/Calculator'

function App() {
  return (
    <>
    <Router>
      <Calculator />
    </Router>
    </>
  )
}

export default App;
