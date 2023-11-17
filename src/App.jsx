import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Music from "./pages/Gallery"
import Events from "./pages/Events"
import Contact from "./pages/Contact";
import './App.css'

const App = () => {

    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/music" element={<Music />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App;