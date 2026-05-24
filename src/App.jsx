import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Vans from './components/Vans';
import "./App.css";
import './Server'
export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="logo" to="/">
          <h4>#VANLIFE</h4>
        </Link>
        <nav>
          <ul className="ul-items">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/vans">Vans</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path = "/vans" element = {<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}
