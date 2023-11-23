import React, { useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

const FullCalendarComponent = ({ events, handleDateClick, handleExternalEventDrop }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.removeAllEvents();
      calendarApi.addEventSource(events);
    }
  }, [events]);

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      locales={['pt-br']}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      events={events} // Lista de eventos do calendário
      editable // Torna os eventos editáveis (arrastáveis)
      droppable // Permite a queda de eventos externos no calendário
      eventDrop={(info) => {
        // Manipular eventos soltos no calendário, se necessário
        console.log('Evento movido:', info.event);
      }}
      dateClick={handleDateClick} // Manipula cliques na data
      eventReceive={(info) => {
        // Manipula a adição de eventos externos ao calendário
        handleExternalEventDrop(info.event);
      }}
    />
  );
};

export default FullCalendarComponent;
