import React from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Icon from "../components/Icon";
// import logo from '../assets/images/ES_logo.jpg';

function Home() {
    const mediaIconsLinks = ["https://www.instagram.com/estilocalico/", "https://www.facebook.com/people/Estilo-Calico/61552456245908/?mibextid=LQQJ4d", "https://www.tiktok.com/@estilocalico"]

    const socialMediaIcons = mediaIconsLinks.map((icon) => <Icon icon={icon}/>)

    return (
        <>
            <div className="home">
                <NavBar /> 
                <div className="media-icons">
                {socialMediaIcons}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home;