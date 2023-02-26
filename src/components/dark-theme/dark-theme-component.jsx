import { ToggleButtonContainer, Sun, Moon } from "./dark-theme-style";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../../theme";

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const Toggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToggleButtonContainer onClick={Toggle}>
        {theme === "light" ? <Moon /> : <Sun />}
      </ToggleButtonContainer>
    </ThemeProvider>
  );
};

export default DarkMode;
