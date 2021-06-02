import ReactDOM from "react-dom";
import App from "./App";
import PageContextProvider from "./PageContextProvider";
// import reportWebVitals from './reportWebVitals';
import "./style.scss";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";
import firebase from "firebase";
import { firebaseConfig } from "./firebase";

const fbApp = firebase.initializeApp(firebaseConfig);
fbApp.analytics().logEvent("page_view");

console.log(firebaseConfig.apiKey);
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
