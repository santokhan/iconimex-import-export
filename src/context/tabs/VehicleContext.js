import { createContext } from "react";

const Context = createContext({ tab: 1 });

export default function VehiclesContext({ children }) {
  return <Context.Provider value={1}>{children}</Context.Provider>;
}
