//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import About from "./routes/About";
//import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
  
      <Navbar/>
      
      
    </div>
  );
}

export default App;
