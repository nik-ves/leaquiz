import axios from "axios";
import React, { useState } from "react";
import ChampionData from "../data/ChampionData.json";

export const ChampionContext = React.createContext({
  getRandomChampionData: () => {},
  generateRandomChampion: () => {},
  championData: {},
});

const ChampionContextProvider = (props) => {
  const [championData, setChampionData] = useState({});

  const generateRandomChampion = () => {
    const allChampions = Object.keys(ChampionData);

    console.log(
      validateChampionName(
        allChampions[Math.floor(Math.random() * allChampions.length)]
      )
    );

    return validateChampionName(
      allChampions[Math.floor(Math.random() * allChampions.length)]
    );
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
      gender: ChampionData[_selectedChampion].gender,
      positions: ChampionData[_selectedChampion].positions,
      rangeType: ChampionData[_selectedChampion].rangeType,
      yearOfRelease: ChampionData[_selectedChampion].yearOfRelease,
      race: ChampionData[_selectedChampion].race,
      regions: ChampionData[_selectedChampion].regions,
    };
  };

  const getRandomChampionData = async (_championName) => {
    try {
      let selectedChampion = generateRandomChampion();
      // console.log(`Starting selectedChampion ${selectedChampion}`);

      // if (_championName) {
      //   selectedChampion = _championName;
      //   console.log(`Parameter selectedChampion ${selectedChampion}`);
      // } else {
      //   selectedChampion = generateRandomChampion();
      //   console.log(`RNG selectedChampion ${selectedChampion}`);
      // }

      const championData = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/${selectedChampion}.json`
      );

      setChampionData(
        modifyChampionData(
          championData.data.data[selectedChampion],
          selectedChampion
        )
      );

      // return modifyChampionData(
      //   championData.data.data[selectedChampion],
      //   selectedChampion
      // );
    } catch (error) {
      // placeholder, currently does nothing
    }
  };

  const validateChampionName = (_champion) => {
    switch (_champion) {
      case "Aurelion Sol":
        return "AurelionSol";

      case "Bel'Veth":
        return "Belveth";

      case "Cho'Gath":
        return "Chogath";

      case "Dr. Mundo":
        return "DrMundo";

      case "Jarvan IV":
        return "JarvanIV";

      case "K'Sante":
        return "KSante";

      case "Kai'Sa":
        return "Kaisa";

      case "Kha'Zix":
        return "Khazix";

      case "Kog'Maw":
        return "KogMaw";

      case "Lee Sin":
        return "LeeSin";

      case "Master Yi":
        return "MasterYi";

      case "Miss Fortune":
        return "MissFortune";

      case "Nunu & Willump":
        return "Nunu";

      case "Rek'Sai":
        return "RekSai";

      case "Renata Glasc":
        return "Renata";

      case "Tahm Kench":
        return "TahmKench";

      case "Twisted Fate":
        return "TwistedFate";

      case "Vel'Koz":
        return "Velkoz";

      case "Xin Zhao":
        return "XinZhao";
      default:
        return _champion;
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
    generateRandomChampion,
    championData,
  };

  return (
    <ChampionContext.Provider value={champsValue}>
      {props.children}
    </ChampionContext.Provider>
  );
};

export default ChampionContextProvider;
