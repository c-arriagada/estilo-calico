import React from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Icon from "../components/Icon";
// import logo from '../assets/images/ES_logo.jpg';

function Home() {
    const mediaIconsLinks = ["www.instagram.com", "www.facebook.com", "www.tiktok.com"]

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