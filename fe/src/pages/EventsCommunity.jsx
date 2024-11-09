import React, { createContext, useContext } from "react";
import { CommunityContainer } from "../components";
import data from "../utils/list-event";
const AllEventCommunityContext = createContext();

const EventsCommunity = () => {
  return (
    <AllEventCommunityContext.Provider value={data}>
      <CommunityContainer />
    </AllEventCommunityContext.Provider>
  );
};

export const useAllEventCommunity = () => useContext(AllEventCommunityContext);

export default EventsCommunity;
