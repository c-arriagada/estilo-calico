import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Gallery from "./pages/Gallery"
import Events from "./pages/Events"

const App = () => {

    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </Router>
    )
}

export default App;