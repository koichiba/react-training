import React, {
  useState,
  useEffect,
  useLayoutEffect,
  Suspense,
  lazy
} from "react";
import EventList from "./components/EventList";

const App: React.FC = () => {
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

export default App;
