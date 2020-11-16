import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
