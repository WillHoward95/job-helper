import React from "react";
import ProsOnboard from "./components/ProsOnboard";
import ConsOnboard from "./components/ConsOnboard";
import JobsOnboard from "./components/JobsOnboard";
import ProsInputs from "./components/ProsInputs";
import ConsInputs from "./components/ConsInputs";
import JobsInputs from "./components/JobsInputs";
import Questionnaire from "./components/Questionnaire";
import ResultsTable from "./components/ResultsTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<ProsOnboard />}></Route>
          <Route path="/prosonboard" element={<ProsOnboard />}></Route>
          <Route path="/prosinputs" element={<ProsInputs />}></Route>
          <Route path="/consonboard" element={<ConsOnboard />}></Route>
          <Route path="/consinputs" element={<ConsInputs />}></Route>
          <Route path="/jobsonboard" element={<JobsOnboard />}></Route>
          <Route path="/jobsinputs" element={<JobsInputs />}></Route>
          <Route path="/questionnaire" element={<Questionnaire />}></Route>
          <Route path="/resultstable" element={<ResultsTable />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
