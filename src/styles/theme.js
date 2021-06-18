import { ThemeProvider } from "styled-components";

import { darkTheme } from "./../themes/default";
import GlobalStyles from "./global";

const Theme = ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
