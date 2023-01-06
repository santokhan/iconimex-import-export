import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Import from "./views/Import";
import Export from "./views/Export";
import Agricultural from "./views/Agricultural";
import Industiral from "./views/Industrial";
import Vehicles from "./views/Vehicle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/#about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/import" element={<Import />}></Route>
        <Route path="/export" element={<Export />}></Route>
        <Route path="/agricultural" element={<Agricultural />}></Route>
        <Route path="/industrial" element={<Industiral />}></Route>
        <Route path="/vehicle" element={<Vehicles />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
