import { selectPros, setNewPro } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const ProsListInputs = () => {
  const dispatch = useDispatch();
  const pros = useSelector(selectPros);
  let [inputBoolean, setInputBoolean] = useState(false);
  let [newProInput, setNewProInput] = useState("");
  let [newProWeight, setNewProWeight] = useState();

  return (
    <div className="appSection">
      <div>
        <h1>Pros</h1>
        <h3>Pro:</h3>
        <h3>Value:</h3>
      </div>
      {pros.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.pro}</h2>
            <h2>{item.weight}</h2>
          </div>
        );
      })}
      {inputBoolean ? (
        <div>
          <p>Pro:</p>
          <textarea
            autoFocus
            onInput={(e) => {
              setNewProInput((newProInput = e.target.value));
            }}
          ></textarea>
          <p>Happy Factor:</p>
          <select
            onChange={(e) => {
              setNewProWeight(e.target.value);
            }}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
      ) : (
        <></>
      )}
      <button
        onClick={() => {
          if (newProInput && newProWeight) {
            dispatch(setNewPro({ pro: newProInput, weight: newProWeight }));
            setNewProInput("");
            setNewProWeight(undefined);
          }
          setInputBoolean(!inputBoolean);
        }}
      >
        {inputBoolean ? "Save Pro" : "Add a Pro"}
      </button>
    </div>
  );
};

export default ProsListInputs;
