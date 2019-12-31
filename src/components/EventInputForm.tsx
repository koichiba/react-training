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
  return <div className="button-area"></div>;
};
interface EventInputFormProps {
  event?: {
    id: number;
    name: string;
  };
}
const EventInputForm: React.FC<EventInputFormProps> = ({ event }) => {
  const [data, setData] = useState({});
  console.log(event);
  useEffect(() => {
    // setData(event);
  }, [setData]);
  if (event === undefined) {
    return null;
  }

  const changeHandle = (e: any) => {
    // event.name = e.target.value;
  };

  return (
    <>
      <div>
        <input type="text" onChange={e => changeHandle(e)} />
      </div>
      <div></div>
      {event ? <EditButton /> : <CreateButton />}
    </>
  );
};

export default EventInputForm;
