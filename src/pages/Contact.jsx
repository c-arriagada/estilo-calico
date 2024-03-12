import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_net2trq', 'template_rbcrrui', form.current, 'jxDPFg5GIer9tDSBm')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div>
            <NavBar />
            <div className="contact">
                <h1>Contact Us</h1>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail} id="contact-form" action="#">
                        <label for="name">Name</label><br></br>
                        <input type="text" id="name" name="user_name" size={60} /><br></br>
                        <label for="email">Email</label><br></br>
                        <input type="text" id="email" name="user_email" size={60} /><br></br>
                        <label for="message">Message</label><br></br>
                        <textarea id="message" name="message" rows={10} cols={70} /><br></br>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;