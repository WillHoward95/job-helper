import React from "react";
import ProsOnboard from "./components/ProsOnboard";
import ConsOnboard from "./components/ConsOnboard";
import JobsOnboard from "./components/JobsOnboard";
import ProsInputs from "./components/ProsInputs";
import ConsInputs from "./components/ConsInputs";
import JobsInputs from "./components/JobsInputs";
import Questionnaire from "./components/Questionnaire";
import Results from "./components/Results";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import { selectAuth, setAuth } from "./features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  useEffect(() => {
    if (localStorage.getItem("authorised") == "true") {
      dispatch(setAuth(true));
    }
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={auth ? <ProsOnboard /> : <Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/prosonboard"
            element={auth ? <ProsOnboard /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/prosinputs"
            element={auth ? <ProsInputs /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/consonboard"
            element={auth ? <ConsOnboard /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/consinputs"
            element={auth ? <ConsInputs /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/jobsonboard"
            element={auth ? <JobsOnboard /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/jobsinputs"
            element={auth ? <JobsInputs /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/questionnaire"
            element={auth ? <Questionnaire /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/results"
            element={auth ? <Results /> : <Navigate to="/login" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
