// Import React modules
import React from "react";
import ReactDOM from "react-dom/client";

// Import CSS
import "./index.css";

// Import Components
import Header from "./components/Header.js";
import QOD from "./components/QuoteofdaDay.js";
// import Attribution from "./components/Attributions";

// Root Elements
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <QOD qid="2" />
    <QOD qid="0" />
    <QOD qid="1" />
    <QOD qid="3" />
    <QOD qid="4" />
    <QOD qid="5" />
    <QOD qid="6" />
    <QOD qid="7" />
  </React.StrictMode>
);
