import axios from "axios";
import React from "react";
import Champions from "../data/Champions.json";

export const ChampionContext = React.createContext({
  getRandomChampionData: () => {},
  generateRandomChampionSkin: () => {},
});

const ChampionContextProvider = (props) => {
  const generateRandomChampion = () => {
    const allChampions = Object.keys(Champions);

    return allChampions[Math.floor(Math.random() * allChampions.length)];
  };

  const generateRandomChampionSkin = async () => {
    const randomChampionData = await getRandomChampionData();
    const arrayOfSkins = randomChampionData.skins;

    // // return arrayOfSkins[Math.floor(Math.random() * arrayOfSkins.length)];
    console.log(arrayOfSkins[Math.floor(Math.random() * arrayOfSkins.length)]);
  };

  // Modifies RIOT's champion data with my custom ones and returns them
  const modifyChampionData = (_allData, _selectedChampion) => {
    return {
      name: _allData.name,
      skins: _allData.skins,
      tags: _allData.tags,
      partype: _allData.partype,
      spells: _allData.spells,
      passive: _allData.passive,
      gender: Champions[_selectedChampion].gender,
      positions: Champions[_selectedChampion].positions,
      rangeType: Champions[_selectedChampion].rangeType,
      yearOfRelease: Champions[_selectedChampion].yearOfRelease,
      race: Champions[_selectedChampion].race,
      regions: Champions[_selectedChampion].regions,
    };
  };

  const getRandomChampionData = async () => {
    try {
      const randomChampion = generateRandomChampion();

      const championData = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${randomChampion}.json`
      );

      return modifyChampionData(
        championData.data.data[randomChampion],
        randomChampion
      );
    } catch (error) {
      // placeholder, currently does nothing
    }
  };

  // const getChampionSkin = async () => {
  //   try {
  //     const randomChampion = generateRandomChampion();

  //     const championData = await axios.get(
  //       `https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${randomChampion}.json`
  //     );

  //     setChampionData(
  //       modifyChampionData(
  //         championData.data.data[randomChampion],
  //         randomChampion
  //       )
  //     );
  //   } catch (error) {
  //     // placeholder, currently does nothing
  //   }
  // }

  // Returns the correct link for the app to use
  // exports.getChampionLink = (selectedChampion) => {
  //   return selectedChampion
  //     ? `https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${selectedChampion}.json`
  //     : "https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json";
  // };

  const champsValue = {
    getRandomChampionData,
    generateRandomChampionSkin,
  };

  return (
    <ChampionContext.Provider value={champsValue}>
      {props.children}
    </ChampionContext.Provider>
  );
};

export default ChampionContextProvider;
