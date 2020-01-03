import React, { useState, useContext } from "react";
import EventInputForm from "./EventInputForm";
import EventIndexContext from "./context/EventIndexContext";

interface Props {
  activeEventIndex: number;
}
const EventFormArea: React.FC<Props> = ({ activeEventIndex }) => {
  const { events } = useContext(EventIndexContext);
  return <></>;
};

export default EventFormArea;
