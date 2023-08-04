import { useContext, useState } from "react";
import Container from "../components/UI/Container";
import { ChampionContext } from "../context/champions-context";
import { styled } from "styled-components";
import ChampionForm from "../components/Champion/ChampionForm";

const Desc = styled.p`
  font-size: 2rem;
  color: white;
`;

const Champion = () => {
  const { getRandomChampionData, championData, generateRandomChampion } =
    useContext(ChampionContext);
  //const [currentChampion] = useState({});

  return (
    <Container>
      <ChampionForm />
      <p>Guess the champion</p>
      <Desc>{championData?.name}</Desc>
      {/* <Desc>{championData.positions}</Desc>
      <Desc>{championData.race}</Desc>
      <Desc>{championData.rangeType}</Desc>
      <Desc>{championData.regions}</Desc>
      <Desc>{championData.yearOfRelease}</Desc> */}
      <button onClick={generateRandomChampion}>Random champ</button>
      <button onClick={getRandomChampionData}>Get data</button>
    </Container>
  );
};

export default Champion;
