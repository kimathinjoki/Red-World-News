import './App.css';
import Navbar from '../navbar/Navbar';
import Home from '../home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sources from '../sources/Sources';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sources" element={<Sources/>}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
