import './App.css';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.js";
import About from "./pages/About.js"

// Logo Citation For Project: <a href="https://www.vecteezy.com/free-vector/icons">Icons Vectors by Vecteezy</a>


function App() {
  return (
    <div className="App"> 
        <div className = "container">
          <Router>
            <Navbar />
            <section id='home'>
              <Home/>
            </section>
            <section id ='about'>
              <About/>
            </section>
            {/* <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes> */} 
            <Footer/>
          </Router>
        </div>

    </div>
  );
}

export default App;
