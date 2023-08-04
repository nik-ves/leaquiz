import { Navigation, NavigationLink, Wrapper } from "./ModesStyles";
import { useState } from "react";

const Modes = () => {
  const [isChampionHover, setIsChampionHover] = useState(false);
  const [isSplashArtHover, setIsSplashArtHover] = useState(false);
  const [isSpellHover, setIsSpellHover] = useState(false);
  const [isQuoteHover, setIsQuoteHover] = useState(false);

  return (
    <Wrapper>
      <Navigation>
        <ul>
          <li>
            <NavigationLink
              to="/champion"
              exact
              onMouseEnter={() => setIsChampionHover(true)}
              onMouseLeave={() => setIsChampionHover(false)}
            >
              {isChampionHover ? "Placeholder" : "CHAMPION"}
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              to="/champion"
              onMouseEnter={() => setIsSplashArtHover(true)}
              onMouseLeave={() => setIsSplashArtHover(false)}
            >
              {isSplashArtHover ? "Placeholder" : "SPLASH ART"}
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              to="/champion"
              exact
              onMouseEnter={() => setIsSpellHover(true)}
              onMouseLeave={() => setIsSpellHover(false)}
            >
              {isSpellHover ? "Placeholder" : "SPELL"}
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              to="/champion"
              exact
              onMouseEnter={() => setIsQuoteHover(true)}
              onMouseLeave={() => setIsQuoteHover(false)}
            >
              {isQuoteHover ? "Placeholder" : "QUOTE"}
            </NavigationLink>
          </li>
        </ul>
      </Navigation>
    </Wrapper>
  );
};

export default Modes;
