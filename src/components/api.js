import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'http://127.0.0.1:8000/api/events/'; // Ensure this matches your Django API URL

// Function to get all events
export const getEvents = async () => {
    try{
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

// Function to create a new event
export const createEvent = async (event) => {
    try {
        const response = await axios.post(API_BASE_URL, event);
        return response.data;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
};

// Function to update an existing event
export const updateEvent = async (id, event) => {
    try {
        const response = await axios.put(`${API_BASE_URL}${id}/`, event);
        return response.data;
    } catch (error) {
        console.error('Error updating event:', error);
        throw error;
    }
};

// Function to delete an event
export const deleteEvent = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}${id}/`);
    } catch (error) {
        console.error('Error deleting event:', error);
        throw error;
    }
};
