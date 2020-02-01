import React, { useContext } from "react";
import EventIndexContext from "./context/EventIndexContext";

interface CreateEventItemProps {
  eventLendth: number;
}
const CreateEventItem: React.FC<CreateEventItemProps> = ({ eventLendth }) => {
  if (eventLendth === 3) {
    return null;
  }
  return (
    <div className="event-item">
      <span>作成</span>
    </div>
  );
};

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
      <CreateEventItem eventLendth={events.length} />
    </div>
  );
};

export default EventList;
