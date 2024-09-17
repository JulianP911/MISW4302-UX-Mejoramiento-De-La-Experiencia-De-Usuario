import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
