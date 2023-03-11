// Import React modules
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import CSS
import "./index.css";

// Import Components/Pages
import Header from "./components/Header.js";
// import Attribution from "./components/Attributions";
import Jokes from "./pages/jokes";
import Homepage from "./pages/homepage";

// Root Elements
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jokes" element={<Jokes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
