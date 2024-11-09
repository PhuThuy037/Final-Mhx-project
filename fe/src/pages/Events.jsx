import React, { createContext, useContext } from "react";
import { EventContainer } from "../components";
import mockData from "../utils/mockData";



const AllEventContext = createContext();

const Events = () => {
  return (
    <AllEventContext.Provider value={mockData}>
      <EventContainer />
    </AllEventContext.Provider>
  );
};

export const useAllEventContext = () => useContext(AllEventContext);

export default Events;
