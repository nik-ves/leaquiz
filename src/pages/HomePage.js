import Container from "../components/UI/Container";
import Welcome from "../components/Home/Welcome";
import Modes from "../components/Home/Modes";

const Home = () => {
  return (
    <Container>
      <Welcome />

      <Modes />
    </Container>
  );
};

export default Home;
