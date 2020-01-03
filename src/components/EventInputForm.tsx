import React, { useState, useContext, useEffect } from "react";
import EventIndexContext from "./context/EventIndexContext";

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
interface EventInputFormProps {
  event: {
    id: number;
    name: string;
  };
}
const EventInputForm: React.FC<EventInputFormProps> = ({ event }) => {
  const [data, setData] = useState("a");
  const [name, setName] = useState("");
  useEffect(() => {
    setName(event.name);
  }, [event]);

  if (!data) {
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
      <div>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input type="submit" value="送信" />
      </div>
      {event ? <EditButton /> : <CreateButton />}
    </>
  );
};

export default EventInputForm;
