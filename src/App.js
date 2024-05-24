import React, {useState} from 'react';
import EventList from './components/EventList';
import AddEventForm from './components/AddEventForm';
import './App.css';
//import api from './components/api';
const App = () => {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  return (
    <div className='App'>
      <h1 className='title1'>Event Planners</h1>
      <AddEventForm onAdd={handleAddEvent} />
      <EventList events={events} />
    </div>
  );
};

export default App;
