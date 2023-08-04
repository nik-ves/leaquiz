import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LogoText = styled(NavLink)`
  display: flex;
  justify-content: center;
  font-size: 7rem;
  color: gold;
  margin: 5rem 0;
`;

const Logo = () => {
  return <LogoText to="/">Leaquiz</LogoText>;
};

export default Logo;
