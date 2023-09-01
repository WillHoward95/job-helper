import React from "react";
import Inputs from "./components/Inputs";
import Questionnaire from "./components/Questionnaire";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Inputs />}></Route>
          <Route path="/inputs" element={<Inputs />}></Route>
          <Route path="/questionnaire" element={<Questionnaire />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
