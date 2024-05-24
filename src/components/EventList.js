import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { getEvents, createEvent, updateEvent, deleteEvent } from './api';
import './EventList.css';
const EventList = () => {
const [events, setEvents] = useState([]);

useEffect(() => {
    axios.get('http://localhost:8000/api/events/')
    .then(response => {
        setEvents(response.data);
    })
    .catch(error => {
        console.error('There was an error fetching the events!', error);
    });
}, []);

return (
    <div className='container'>
    <ul>
        {events.map(event => (
        <li key={event.id} className='event-item'>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            
        </li>
        ))}
    </ul>
    </div>
);
};

export default EventList;
