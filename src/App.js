import { Fragment, useContext, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { ChampionContext } from "./context/champions-context";
import Autosuggest from "react-autosuggest";

import Champions from "./data/Champions.json";

function App() {
  const { getRandomChampionData, generateRandomChampionSkin } =
    useContext(ChampionContext);
  const [championData, setChampionData] = useState({});

  const getAndSetChampionData = async () => {
    const test = await getRandomChampionData();
    setChampionData(test);
  };

  const allChampions = Object.keys(Champions);
  console.log(allChampions);

  return (
    <Fragment>
      <GlobalStyles />

      {/* <Autosuggest suggestions={allChampions} /> */}

      <button onClick={getAndSetChampionData}>Test</button>
      <button onClick={generateRandomChampionSkin}>View</button>

      <p>{championData.name}</p>
    </Fragment>
  );
}

export default App;
