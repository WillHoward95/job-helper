import React from "react";
import JobsListInputs from "./Inputs/JobsListInputs";
import ProsListInputs from "./Inputs/ProsListInputs";
import ConsListInputs from "./Inputs/ConsListInputs";

const Inputs = () => {
  return (
    <div>
      <JobsListInputs />
      <ProsListInputs />
      <ConsListInputs />
      <button>Begin questionnaire</button>
    </div>
  );
};

export default Inputs;
