import { useState } from "react";
import { Form, SubmitBtn, TextInput, Wrapper } from "./ChampionFormStyles";
import ChampionData from "../../data/ChampionData.json";

const ChampionForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [championNames, setChampionNames] = useState(Object.keys(ChampionData));

  const valueChangeHandler = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);

    // console.log(
    //   championNames.filter((champion) => {
    //     return champion.toLowerCase().startsWith(inputTest.toLowerCase());
    //   })
    // );
  };

  const valueReset = () => {
    setInputValue("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(inputValue);

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
    </Wrapper>
  );
};

export default ChampionForm;
