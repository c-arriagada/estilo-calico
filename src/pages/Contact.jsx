import React from "react";
import NavBar from "../components/NavBar";

function Contact() {
    return (
        <div>
            <NavBar />
            <div className="contact">
                <h1>Contact Us</h1>
                <form action="#">
                    <label for="name">Name</label><br></br>
                    <input type="text" id="name" name="name" size={30}/><br></br>
                    <label for="email">Email</label><br></br>
                    <input type="text" id="email" name="email" size={30}/><br></br>
                    <label for="message">Message</label><br></br>
                    <textarea id="message" name="message" rows={10} cols={33}/><br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact;