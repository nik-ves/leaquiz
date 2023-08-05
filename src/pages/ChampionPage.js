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
  const { getRandomChampionData, setGeneratedChampion } =
    useContext(ChampionContext);
  const [championData, setChampionData] = useState([]);

  const startGame = async () => {
    const data = await getRandomChampionData();
    setChampionData(data);
    setGeneratedChampion(data);
  };

  return (
    <Container>
      <ChampionForm generatedChampion={championData} />

      <Desc>{championData?.name}</Desc>

      <button onClick={startGame}>Start game</button>
    </Container>
  );
};

export default Champion;
