import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Componenets/Navbar';
import Home from './Componenets/Home';
import Skills from './Componenets/Skills';
import Projects from './Componenets/Projects';

function App() {
  return (
    <Router>
      <>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
        <div className='hire-div'>
          <button className='hire-btn'><span className="hire-span">Hire Me</span></button>
          {/* <a class="bn39" href="/"><span class="bn39span">Button</span></a> */}
        </div>
      </>
    </Router>
  );
}

export default App;
