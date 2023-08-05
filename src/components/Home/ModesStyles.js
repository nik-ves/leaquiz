import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  transition: all 0.3s;
`;

export const Navigation = styled.nav`
  & ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    font-size: 1.8rem;
  }

  & li {
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const NavigationLink = styled(NavLink)`
  color: gold;
  display: inline-block;
  padding: 3rem;
  width: 50rem;
  border: 2px solid gold;
  transition: all 0.2s;
  //background-image: url("/images/thresh1.jpg");

  &:hover {
    color: black;
    background-color: gold;
    scale: 105%;
  }
`;
