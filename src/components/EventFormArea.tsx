import React, { useState } from "react";
import EventInputForm from "./EventInputForm";

interface Props {
  events: any[];
}
const EventFormArea: React.FC<Props> = ({ events }) => {
  return (
    <>
      {events.map((r: any, i: number) => {
        console.log(1);
        return <EventInputForm key={r.id} event={events[i]} />;
      })}
    </>
  );
};

export default EventFormArea;
