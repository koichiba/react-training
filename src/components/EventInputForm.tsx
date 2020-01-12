import React, { useState, useContext, useEffect } from "react";
import EventIndexContext from "./context/EventIndexContext";
import styled from "styled-components";

const CreateButton: React.FC = () => {
  return (
    <div className="button-area">
      <button>イベント作成</button>
    </div>
  );
};

interface EditButton {}
const EditButton: React.FC<EditButton> = () => {
  function updateEvent() {}
  return (
    <div className="button-area">
      <button>イベント更新</button>
    </div>
  );
};

// style
const ActiveDiv = styled.div`
  background-color: "red";
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
  const [data, setData] = useState("a");
  const [name, setName] = useState("");
  useEffect(() => {
    setName(event.name);
  }, [event]);

  if (!data) {
    return null;
  }
  if (!isShow) {
    return null;
  }

  const changeHandle = (e: any) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    // setName(e.target.value);
  };

  return (
    <>
      <ActiveDiv>
        <EventInput
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input type="submit" value="送信" />
      </ActiveDiv>
      {event ? <EditButton /> : <CreateButton />}
    </>
  );
};

export default EventInputForm;
