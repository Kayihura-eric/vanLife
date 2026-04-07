import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
function Home() {
  return (
    <>
      <main>
        <div className="container">
          <h2>You got the travel plans, We got travel Vans.</h2>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button className="find-van">Find your van.</button>
        </div>
      </main>
      <footer>
        <div className="container-footer">
          <p>&copy;2026 #vanlife</p>
        </div>
      </footer>
    </>
  );
}
function About() {
  return (
    <>
      <main>
        <div className="container-img">
          <img src="./src/assets/photo3.jpg" alt="person upon the car" />
          <h4 className="img-title">
            Don't squeeze in a sedan when you could relax in a van.
          </h4>
          <p className="img-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum unde
            accusantium fuga nesciunt ad iure distinctio? Est beatae et atque
            doloribus necessitatibus, nemo eveniet velit, tenetur pariatur eaque
            exercitationem iste? In praesentium, magni sapiente laborum nemo,
            eius deleniti natus dignissimos excepturi.
          </p>
          <div className="explore-van-container">
            <p className="explore-van-details">
              Your destination is waiting.
              <br /> Your van is ready.
            </p>
            <button className="explore-btn">Explore our Vans</button>
          </div>
        </div>
      </main>
      <footer>
        <div className="container-footer">
          <p>&copy;2026 #vanlife</p>
        </div>
      </footer>
    </>
  );
}
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
      </Routes>
    </BrowserRouter>
  );
}
