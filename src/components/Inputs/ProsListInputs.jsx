import {
  selectPros,
  setNewProInput,
  selectNewProInput,
  setNewPro,
} from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const ProsListInputs = () => {
  const dispatch = useDispatch();
  const pros = useSelector(selectPros);
  const newProInput = useSelector(selectNewProInput);
  let [inputBoolean, setInputBoolean] = useState(false);

  return (
    <div>
      <h1>List of Pros</h1>
      {pros.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })}
      {inputBoolean ? (
        <textarea
          onInput={(e) => {
            dispatch(setNewProInput(e.target.value));
          }}
        ></textarea>
      ) : (
        <></>
      )}
      <button
        onClick={() => {
          dispatch(setNewPro(newProInput));
          setInputBoolean(!inputBoolean);
        }}
      >
        {inputBoolean ? "Save Pro" : "Add a Pro"}
      </button>
    </div>
  );
};

export default ProsListInputs;
