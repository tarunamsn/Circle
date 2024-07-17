import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "./store/index.ts";

const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Provider store={store}>
         <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <App />
         </ThemeProvider>
      </Provider>
   </React.StrictMode>
);
