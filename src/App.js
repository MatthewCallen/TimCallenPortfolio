import './App.css';
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.js";

// Logo Citation For Project: <a href="https://www.vecteezy.com/free-vector/icons">Icons Vectors by Vecteezy</a>


function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
