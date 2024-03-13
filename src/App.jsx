import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Music from "./pages/Music"
import Events from "./pages/Events"
import Contact from "./pages/Contact";
import './App.css'

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements (
            <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="music" element={<Music />} />
                    <Route path="events" element={<Events />} />
                    <Route path="contact" element={<Contact />} />
            </Route>
        )
    )

    return (
        <RouterProvider router={router}/>
    )
}

export default App;