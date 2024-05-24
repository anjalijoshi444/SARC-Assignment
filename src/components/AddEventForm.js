import React, { useState } from 'react';
import axios from 'axios';
//import { getEvents, createEvent, updateEvent } from './api';
import './AddEventForm.css';
import './api';
const AddEventForm = () => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [date, setDate] = useState('');
const [location, setLocation] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    const event = { title, description, date,location };

    axios.post('http://localhost:8000/api/events/', event)
    .then(response => {
        console.log(response.data);
        // Reset form
        setTitle('');
        setDescription('');
        setDate('');
        setLocation('');
    })
    .catch(error => {
        console.error('There was an error creating the event!', error);
    });
    
};

return (
    <form onSubmit={handleSubmit} className='form-container'>
        <h1 className='form-title'>Book now!</h1>
    <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required  className='form-input'/>
    </div>
    <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required className='form-input' />
    </div>
    <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className='form-input'/>
    </div>
    <button type="submit" className='form-button'>Add Event</button>
    </form>
);
};
export default AddEventForm;
