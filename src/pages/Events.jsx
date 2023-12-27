import React from "react";
import NavBar from "../components/NavBar";
import Calendar from "../components/Calendar";

function Events() {

    return (
        <div>
            <NavBar />
            <div className="events">
                <h1>Events</h1>
                <section className="event-list">
                    <h3>Coming soon...</h3>
                    <Calendar />
                </section>
            </div>
        </div>
    )
}

export default Events;