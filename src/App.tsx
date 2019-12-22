import React, { useState, useEffect } from "react";
import EventList from "./components/EventList";
import EventInputForm from "./components/EventInputForm";

const App: React.FC = () => {
  let [events, setEvent] = useState([]);
  useEffect(() => {
    // const f = async () => {
    //   await new Promise(r => setTimeout(r, 10000));
    //   console.log("side effect!");
    // };
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
    // f();
  }, [setEvent]);

  return (
    <div className="App">
      <EventList events={events} activeEventIndex={1} />
      <EventInputForm event={events && events[0]} />
    </div>
  );
};

export default App;
