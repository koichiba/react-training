import React, { useState } from "react";

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
      <button onClick={() => updateEvent()}>イベント更新</button>
    </div>
  );
};

interface EventInputFormProps {
  event: {
    id?: number;
    name?: string;
  };
}
const EventInputForm: React.FC<EventInputFormProps> = ({ event }) => {
  let [name, setName] = useState();
  let [test, setTest] = useState();
  console.log(event);
  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          value={test}
          onChange={e => setTest(e.target.value)}
        />
      </div>
      <div></div>
      {event ? <EditButton /> : <CreateButton />}
    </>
  );
};

export default EventInputForm;
