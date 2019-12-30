import React, { useState, useEffect } from "react";
import EventList from "./components/EventList";
import EventFormArea from "./components/EventFormArea";

const App: React.FC = () => {
  let [events, setEvent] = useState([]);
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

  return (
    <div className="App">
      <EventList events={events} activeEventIndex={1} />
      <EventFormArea events={events} />
    </div>
  );
};

export default App;
