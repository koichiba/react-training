import React, { useState, useEffect, createContext } from "react";
import EventList from "./components/EventList";
import EventFormArea from "./components/EventFormArea";
import EventInputFrom from "./components/EventInputForm";

import EventIndexContext from "./components/context/EventIndexContext";

const App: React.FC = () => {
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
    <div className="App">
      <EventIndexContext.Provider
        value={{
          changeEventIndex: (index: number) => changeEventIndex(index),
          events: events
        }}
      >
        <EventList />
        {events.map((event: any, index: number) => {
          if (index === activeEventIndex) {
            return <EventInputFrom event={event} />;
          }
        })}
      </EventIndexContext.Provider>
    </div>
  );
};

export default App;
