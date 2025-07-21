import './App.css';
import Navbar from './Componenets/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className='hire-div'>
        <button className='hire-btn'><span className="hire-span">Hire Me</span></button>
        {/* <a class="bn39" href="/"><span class="bn39span">Button</span></a> */}
      </div>
    </>
  );
}

export default App;
