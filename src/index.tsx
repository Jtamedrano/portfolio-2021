import ReactDOM from "react-dom";
import App from "./App";
import PageContextProvider from "./PageContextProvider";
// import reportWebVitals from './reportWebVitals';
import "./style.scss";
import ReactGA from "react-ga";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";
ReactGA.initialize("UA-CLGVVPNP0-9");
ReactGA.pageview(window.location.pathname + window.location.search);

const theme = createMuiTheme({
  palette: createPalette({
    type: "dark",
  }),
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
