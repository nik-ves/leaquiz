import axios from "axios";
import React, { useState } from "react";
import ChampionData from "../data/ChampionData.json";

export const ChampionContext = React.createContext({
  getRandomChampionData: () => {},
  generatedChampion: [],
  setGeneratedChampion: () => {},
  inputChampion: [],
  setInputChampion: () => {},
});

const ChampionContextProvider = (props) => {
  const [generatedChampion, setGeneratedChampion] = useState([]);
  const [inputChampion, setInputChampion] = useState([]);

  const generateRandomChampion = () => {
    let champions = Object.keys(ChampionData);

    return champions[Math.floor(Math.random() * champions.length)];
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
      gender: ChampionData[_selectedChampion].gender,
      positions: ChampionData[_selectedChampion].positions,
      rangeType: ChampionData[_selectedChampion].rangeType,
      yearOfRelease: ChampionData[_selectedChampion].yearOfRelease,
      race: ChampionData[_selectedChampion].race,
      regions: ChampionData[_selectedChampion].regions,
    };
  };

  const getRandomChampionData = async (_inputChampion = "") => {
    try {
      let championName;

      if (_inputChampion !== "") {
        championName = _inputChampion;
      } else {
        championName = generateRandomChampion();
      }

      const championData = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${championName}.json`
      );

      return modifyChampionData(
        championData.data.data[championName],
        championName
      );
    } catch (error) {
      // placeholder, currently does nothing
    }
  };

  // const generateRandomChampionSkin = async () => {
  //   const randomChampionData = await getRandomChampionData();
  //   const arrayOfSkins = randomChampionData.skins;

  //   // // return arrayOfSkins[Math.floor(Math.random() * arrayOfSkins.length)];
  //   console.log(arrayOfSkins[Math.floor(Math.random() * arrayOfSkins.length)]);
  // };

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
    generatedChampion,
    setGeneratedChampion,
    inputChampion,
    setInputChampion,
  };

  return (
    <ChampionContext.Provider value={champsValue}>
      {props.children}
    </ChampionContext.Provider>
  );
};

export default ChampionContextProvider;
