import React, { useState, useEffect, createContext } from "react";
import EventList from "./components/EventList";
import EventFormArea from "./components/EventFormArea";
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
    // console.log(e);
    setActiveEventIndex(activeEventIndex + e);
  };
  return (
    <div className="App">
      <EventIndexContext.Provider
        value={{
          changeEventIndex: (index: number) => changeEventIndex(index)
        }}
      >
        <EventList events={events} activeEventIndex={activeEventIndex} />
        <EventFormArea events={events} />
      </EventIndexContext.Provider>
    </div>
  );
};

export default App;
