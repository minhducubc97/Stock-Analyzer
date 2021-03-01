import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Container from './components/Container/Container'
import './App.css';

const App = () => {
  return (
    <Router>
        <Navbar/>
        <Container/>
    </Router>
  );
}

export default App;
