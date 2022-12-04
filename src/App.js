import './App.css';
import Login from "./react-admin/Login";
import Home from "./pages/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='nuestraEm' element={<NuestraEm></NuestraEm>}></Route>
            <Route path='Servicios' element={<Servicios></Servicios>}></Route>
            <Route path='Productos' element={<Productos></Productos>}></Route> */}
          <Route path='*' element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
