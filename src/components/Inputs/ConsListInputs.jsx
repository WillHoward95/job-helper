import {
  selectCons,
  setNewConInput,
  selectNewConInput,
  setNewCon,
} from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const ConsListInputs = () => {
  const dispatch = useDispatch();
  const cons = useSelector(selectCons);
  const newConInput = useSelector(selectNewConInput);
  let [inputBoolean, setInputBoolean] = useState(false);

  return (
    <div>
      <h1>List of Jobs</h1>
      {cons.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })}
      {inputBoolean ? (
        <textarea
          onInput={(e) => {
            dispatch(setNewConInput(e.target.value));
          }}
        ></textarea>
      ) : (
        <></>
      )}
      <button
        onClick={() => {
          dispatch(setNewCon(newConInput));
          setInputBoolean(!inputBoolean);
        }}
      >
        {inputBoolean ? "Save Con" : "Add a Con"}
      </button>
    </div>
  );
};

export default ConsListInputs;
