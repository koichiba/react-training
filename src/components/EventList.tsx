import React from "react";

interface EventListProps {
  events: object[];
  activeEventIndex: number;
}
const EventList: React.FC<EventListProps> = ({ events, activeEventIndex }) => {
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
