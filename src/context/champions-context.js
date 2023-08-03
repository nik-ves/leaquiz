import axios from "axios";
import React, { useState } from "react";
import Champions from "../data/Champions.json";

export const ChampionContext = React.createContext({
  test: {},
});

const ChampionContextProvider = (props) => {
  const champsValue = {
    test: {},
  };

  const generateRandomChampion = () => {
    const allChampions = Object.keys(Champions);

    return allChampions[Math.floor(Math.random() * allChampions.length)];
  };

  // Mixes old and additional champion data and returns them
  const generateChampionData = (allData, selectedChampion) => {
    return {
      name: allData.name,
      skins: allData.skins,
      tags: allData.tags,
      partype: allData.partype,
      spells: allData.spells,
      passive: allData.passive,
      gender: Champions[selectedChampion].gender,
      positions: Champions[selectedChampion].positions,
      rangeType: Champions[selectedChampion].rangeType,
      yearOfRelease: Champions[selectedChampion].yearOfRelease,
      race: Champions[selectedChampion].race,
      regions: Champions[selectedChampion].regions,
    };
  };

  // Returns the correct link for the app to use
  // exports.getChampionLink = (selectedChampion) => {
  //   return selectedChampion
  //     ? `https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${selectedChampion}.json`
  //     : "https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json";
  // };

  return (
    <ChampionContext.Provider value={champsValue}>
      {props.children}
    </ChampionContext.Provider>
  );
};

export default ChampionContextProvider;
