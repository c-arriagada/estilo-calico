import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calendar() {
    const [events, setEvents] = useState([])

    async function getEvents() {
        const response = await fetch("https://public.estilocalico.com/events");
        const data = await response.json()
        return data;
    }

    useEffect(() => {
        getEvents().then(setEvents)
    }, [])

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
        />
    )
}

