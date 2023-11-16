import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import UnderConst from './pages/under/UnderConst';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/store" element={ <UnderConst/> } />
        <Route path="/about" element={ <UnderConst/> } />
        <Route path="/contact" element={ <UnderConst/> } />
        <Route path="/register" element={ <UnderConst/> } />
        <Route path="/login" element={ <UnderConst/> } />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
