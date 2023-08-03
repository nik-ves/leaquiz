import axios from "axios";
import React, { useState } from "react";

export const ChampionContext = React.createContext({
  test: {},
});

const ChampionContextProvider = (props) => {
  const champsValue = {
    test: {},
  };

  return (
    <ChampionContext.Provider value={champsValue}>
      {props.children}
    </ChampionContext.Provider>
  );
};

export default ChampionContextProvider;
