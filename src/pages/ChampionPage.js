import { useContext, useState } from "react";
import Container from "../components/UI/Container";
import { ChampionContext } from "../context/champions-context";
import { styled } from "styled-components";

const Desc = styled.p`
  font-size: 2rem;
  color: white;
`;

const Champion = () => {
  const { getRandomChampionData } = useContext(ChampionContext);
  const [championData, setChampionData] = useState({});

  const getAndSetChampionData = async () => {
    const test = await getRandomChampionData();
    setChampionData(test);
  };

  console.log(championData);

  return (
    <Container>
      <p>Guess the champion</p>
      <Desc>{championData.name}</Desc>
      <Desc>{championData.positions}</Desc>
      <Desc>{championData.race}</Desc>
      <Desc>{championData.rangeType}</Desc>
      <Desc>{championData.regions}</Desc>
      <Desc>{championData.yearOfRelease}</Desc>
      <button onClick={getAndSetChampionData}>Start game</button>
    </Container>
  );
};

export default Champion;
