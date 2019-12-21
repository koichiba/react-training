import React, { Suspense } from "react";
import EventList from "./EventList";

const Sample: React.FC = () => {
  return (
    <div className="App">
      <EventList />
      <div className="event-form">
        <input type="text" />
        <div className="button-area">
          <button>プレビュー</button>
          <button>イベント作成</button>
          <button>イベント更新</button>
        </div>
      </div>
    </div>
  );
};

export default Sample;
