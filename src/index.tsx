import ReactDOM from "react-dom";
import App from "./App";
import PageContextProvider from "./PageContextProvider";
// import reportWebVitals from './reportWebVitals';
import "./style.scss";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";
import firebase from "firebase";
// import { firebaseConfig } from "./firebase";
import dotenv from "dotenv";

dotenv.config();

const fbApp = firebase.initializeApp({
  authDomain: "jtamedrano-portfolio.firebaseapp.com",
  projectId: "jtamedrano-portfolio",
  storageBucket: "jtamedrano-portfolio.appspot.com",
  messagingSenderId: "516026780391",
  appId: "1:516026780391:web:da639049e820fed2867042",
  measurementId: "G-RD6MWT4DPE",
  apiKey: process.env.REACT_APP_GF_KEY,
});
fbApp.analytics().logEvent("page_view");

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
