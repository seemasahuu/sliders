 import './App.css';
 import {Route,Routes } from "react-router-dom";
 import Home from './Home';
 import About from './About';
  
function App() {
  return (
    <div className=" bg-red-100 py-10 px-10">
           <Home/>
            <Routes>
            <Route path="/About" element={About} />
            </Routes>
    </div>
  );
}

export default App;
