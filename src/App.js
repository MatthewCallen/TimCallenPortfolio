import './App.css';
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home.js";


function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar />
        <Switch>
            <Route exact path='/' element={<Home/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
