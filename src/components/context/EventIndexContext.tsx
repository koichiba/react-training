import { createContext } from "react";

interface props {
  changeEventIndex: Function;
}
const EventIndexContext = createContext({} as props);

export default EventIndexContext;
