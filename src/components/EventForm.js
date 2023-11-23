import React, { useState } from 'react';

const EventForm = ({ onAddEvent, onAddExternalEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventDuration, setEventDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: eventName,
      start: `${eventDate}T${eventTime}:00`,
      duration: eventDuration,
    };

    onAddEvent(newEvent);
    setEventName('');
    setEventDate('');
    setEventTime('');
    setEventDuration('');
  };

  const handleAddExternalEvent = () => {
    const newExternalEvent = {
      title: eventName,
      id: Date.now().toString(),
    };

    onAddExternalEvent(newExternalEvent);
    setEventName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Evento:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </label>
        <br />
        <label>
          Data do Evento:
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </label>
        <br />
        <label>
          Horário do Evento:
          <input type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
        </label>
        <br />
        <label>
          Duração do Evento:
          <input
            type="text"
            placeholder="Ex: 2 horas"
            value={eventDuration}
            onChange={(e) => setEventDuration(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Adicionar Evento</button>
      </form>
      <br />
      <button onClick={handleAddExternalEvent}>Adicionar Evento Externo</button>
    </div>
  );
};

export default EventForm;
