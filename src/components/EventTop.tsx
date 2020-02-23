import React, { useState, useEffect } from "react";
import EventList from "../components/EventList";
import EventInputFrom from "../components/EventInputForm";
import EventIndexContext from "../components/context/EventIndexContext";

const EventTop: React.FC = () => {
  let [events, setEvent] = useState([]);
  let [activeEventIndex, setActiveEventIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then(response => {
        return response.json();
      })
      .then(res => {
        setEvent(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, [setEvent]);

  const changeEventIndex = (e: any) => {
    setActiveEventIndex(e);
  };

  if (events.length === 0) {
    return <span>Please wait...</span>;
  }

  return (
    <div>
      <EventIndexContext.Provider
        value={{
          changeEventIndex: (index: number) => changeEventIndex(index),
          events: events
        }}
      >
        <EventList />
        {events.map((event: any, index: number) => (
          <EventInputFrom
            event={event}
            isShow={index === activeEventIndex}
            key={index}
          />
        ))}
      </EventIndexContext.Provider>
    </div>
  );
};

export default EventTop;
