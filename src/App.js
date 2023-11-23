import React, { useState } from 'react';
import FullCalendarComponent from './components/Calendar/FullCalendar';
import EventForm from './components/EventForm';

const App = () => {
  const [events, setEvents] = useState([
    { title: 'Evento 1', start: '2023-11-20' },
  ]);

  const [selectedDate, setSelectedDate] = useState(null); // Adiciona estado para armazenar a data selecionada

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleDateClick = (arg) => {
    const title = prompt('Nome do Evento:');
    if (title) {
      setSelectedDate(arg.dateStr); // Armazena a data selecionada
      const time = prompt('Horário do Evento (formato HH:mm):');
      const duration = prompt('Duração do Evento (ex: 2 horas):');

      const newEvent = {
        title,
        start: `${arg.dateStr}T${time}:00`,
        duration,
      };

      setEvents([...events, newEvent]);
    }
  };

  const handleExternalEventDrop = (externalEvent) => {
    setEvents([...events, externalEvent]);
  };

  return (
    <div>
      <h1>Seu Planner</h1>
      <EventForm onAddEvent={handleAddEvent} onAddExternalEvent={handleExternalEventDrop} />
  <FullCalendarComponent
    events={events}
    handleDateClick={handleDateClick}
    handleExternalEventDrop={handleExternalEventDrop}
  />
    </div>
  );
};

export default App;
