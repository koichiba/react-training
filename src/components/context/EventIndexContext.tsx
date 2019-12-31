import { createContext } from "react";

interface props {
  changeEventIndex: Function;
  events: object[];
}
const EventIndexContext = createContext({} as props);

export default EventIndexContext;
