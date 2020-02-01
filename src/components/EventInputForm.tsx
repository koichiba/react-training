import React, { useState, useContext, useEffect } from "react";
import EventIndexContext from "./context/EventIndexContext";
import styled from "styled-components";

// style
const ActiveDiv = styled.div`
  background-color: red;
`;
const EventInput = styled.input`
  border: 5px solid;
`;

interface EventInputFormProps {
  event: {
    id: number;
    name: string;
  };
  isShow: boolean;
}
const EventInputForm: React.FC<EventInputFormProps> = ({ event, isShow }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(event.name);
  }, [event]);

  if (!isShow) {
    return null;
  }

  const changeHandle = (e: any) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
  };

  const createEvent = () => {
    fetch("http://localhost:3001/events", {
      method: "POST",
      body: JSON.stringify({
        name: name
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  const updateEvent = () => {
    fetch("http://localhost:3001/events/1", {
      method: "PUT",
      body: JSON.stringify({
        name: name
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  const CreateButton: React.FC = () => {
    return (
      <div className="button-area">
        <button onClick={createEvent}>イベント作成</button>
      </div>
    );
  };
  const EditButton: React.FC = () => {
    return (
      <div className="button-area">
        <button onClick={updateEvent}>イベント更新</button>
      </div>
    );
  };

  return (
    <>
      <ActiveDiv>
        <EventInput
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </ActiveDiv>
      <CreateButton />
      <EditButton />
      {/* {event ? <EditButton /> : <CreateButton />} */}
    </>
  );
};

export default EventInputForm;
