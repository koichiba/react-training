import React, { useState, useEffect } from "react";

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
  const [test, setTest] = useState();

  const changeHandle = (e: any) => {
    setTest(e.target.value);
  };

  if (event === undefined) {
    return <></>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          defaultValue={event.name}
          value={test}
          onChange={e => changeHandle(e)}
        />
      </div>
      <div></div>
      {event ? <EditButton /> : <CreateButton />}
    </>
  );
};

export default EventInputForm;
