import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./../themes/default";
import GlobalStyles from "./global";

const Theme = ({ children, darkMode }) => {
  const theme = darkMode.value
    ? { ...darkTheme, darkMode }
    : { ...lightTheme, darkMode };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
