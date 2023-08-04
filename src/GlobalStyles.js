import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-test: red;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  font-family: "Roboto Slab", serif;
  min-height: 100vh;
  /* background: rgb(43, 43, 43);
  background: linear-gradient(
    180deg,
    rgba(43, 43, 43, 1) 0%,
    rgba(26, 30, 34, 1) 100%
  ); */
}

html {
  overflow-y: scroll;
  box-sizing: border-box;
  font-size: 62.5%;
}

a {
  text-decoration: none;
}
`;
