import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/vans/Vans';
import VanDetail from './pages/vans/VanDetail';
import Layout from "./components/Layout";
import Dashboard from "./pages/host/Dashboard";
import HostLayout from "./components/HostLayout";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import "./App.css";
import './Server'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path = "vans" element = {<Vans />} />
          <Route path="vans/:id" element = {<VanDetail />} />
          <Route path = "host" element = {<HostLayout />}>
            {/* when a child route has the same path with its parent you have to replace the path of child to index */}
            <Route index element = {<Dashboard />} />
            <Route path = "income" element = {<Income />} />
            <Route path = "vans" element = {<HostVans />} />
            <Route path = "vans/:id" element = {<HostVanDetail />} />
            <Route path = "reviews" element = {<Reviews />} />
          </Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}
