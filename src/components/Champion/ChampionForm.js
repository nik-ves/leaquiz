import { useState, useContext } from "react";
import { Form, SubmitBtn, TextInput, Wrapper } from "./ChampionFormStyles";
import { ChampionContext } from "../../context/champions-context";

const ChampionForm = ({ generatedChampion }) => {
  const [inputValue, setInputValue] = useState("");
  const [userChampionGuess, setUserChampionGuess] = useState("");
  const [userChampionGuessList, setUserChampionGuessList] = useState([]);
  const { getRandomChampionData, setInputChampion } =
    useContext(ChampionContext);

  const valueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const valueReset = () => {
    setInputValue("");
  };

  const getUserInputChampion = async () => {
    const data = await getRandomChampionData(inputValue);
    setUserChampionGuess(data);
    setInputChampion(data);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    getUserInputChampion();

    setUserChampionGuessList([
      ...userChampionGuessList,
      [
        userChampionGuess.name,
        userChampionGuess.partype,
        userChampionGuess.gender,
        userChampionGuess.yearOfRelease,
      ],
    ]);

    valueReset();
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler} autoComplete="off">
        <TextInput
          type="text"
          id="text"
          value={inputValue}
          onChange={valueChangeHandler}
        />

        <SubmitBtn type="submit">Guess!</SubmitBtn>
      </Form>

      {userChampionGuessList.map((guess) => console.log(guess))}
    </Wrapper>
  );
};

export default ChampionForm;
