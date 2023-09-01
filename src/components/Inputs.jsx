import React from "react";
import JobsListInputs from "./Inputs/JobsListInputs";
import ProsListInputs from "./Inputs/ProsListInputs";
import ConsListInputs from "./Inputs/ConsListInputs";
import { useNavigate } from "react-router-dom";

const Inputs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <JobsListInputs />
      <ProsListInputs />
      <ConsListInputs />
      <button
        onClick={() => {
          navigate("/questionnaire");
        }}
      >
        Begin questionnaire
      </button>
    </div>
  );
};

export default Inputs;
