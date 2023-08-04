import { styled } from "styled-components";
import Container from "../components/UI/Container";

const WarningText = styled.p`
  text-align: center;
  font-size: 3rem;
  color: white;
  margin-top: 5rem;
`;

const PageNotFound = () => {
  return (
    <Container>
      <WarningText>This page does not exist!</WarningText>
    </Container>
  );
};

export default PageNotFound;
