import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
function App() {
  const mode = useSelector(({ mode }) => mode.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <h1>hello</h1>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
