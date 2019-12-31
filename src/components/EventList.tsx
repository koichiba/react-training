import React, { useContext } from "react";
import EventIndexContext from "./context/EventIndexContext";

interface EventListProps {
  // events: object[];
}
const EventList: React.FC<EventListProps> = () => {
  const { changeEventIndex, events } = useContext(EventIndexContext);
  if (events.length === 0) {
    return <span>Please wait...</span>;
  }

  const setIndex = (e: any) => {
    changeEventIndex(e);
  };

  return (
    <div className="event-list">
      {events.map((event: any, index: number) => (
        <div
          className="event-item"
          key={event.id}
          onClick={() => setIndex(index)}
        >
          {event.name}
        </div>
      ))}
    </div>
  );
};

export default EventList;
