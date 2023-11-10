import React from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// import logo from '../assets/images/ES_logo.jpg';

function Home() {
    return (
        <>
            <div className="home">
                <NavBar />    
                <Footer />
            </div>
        </>
    )
}

export default Home;