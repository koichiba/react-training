import React, { useState } from "react";
import EventInputForm from "./EventInputForm";

interface Props {
  events: any[];
}
const EventFormArea: React.FC<Props> = ({ events }) => {
  return (
    <>
      {events.map((r: any, i: number) => {
        return <EventInputForm key={r.id} event={events[i]} />;
      })}
    </>
  );
};

export default EventFormArea;
