import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";

import defaultTheme from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}
