import React, { useState, useEffect } from "react";

// interface EventListProps {
//   events: object[];
// }
const EventList: React.FC = () => {
  let [events, setEvent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then(response => {
        return response.json();
      })
      .then(res => {
        setEvent(res.map((c: any) => c));
      })
      .catch(error => {
        console.log(error);
      });
  }, [setEvent]);
  console.log(events);
  if (events.length === 0) {
    return <span>Please wait...</span>;
  }

  return (
    <div className="event-list">
      {events.map((event: any) => (
        <div className="event-item" key={event.id}>
          {event.name}
        </div>
      ))}
    </div>
  );
};

export default EventList;
