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
      <a href="/questionnaire">
        <button>Begin questionnaire</button>
      </a>
    </div>
  );
};

export default Inputs;
