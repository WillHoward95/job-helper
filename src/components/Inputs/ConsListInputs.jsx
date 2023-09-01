import { selectCons, setNewCon } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const ConsListInputs = () => {
  const dispatch = useDispatch();
  const cons = useSelector(selectCons);
  let [inputBoolean, setInputBoolean] = useState(false);
  let [newConInput, setNewConInput] = useState("");
  let [newConWeight, setNewConWeight] = useState();

  return (
    <div>
      <h1>List of Jobs</h1>
      {cons.map((item, index) => {
        return (
          <div key={index}>
            <h2>Con: {item.con}</h2>
            <h2>Sad factor: {item.weight}</h2>
          </div>
        );
      })}
      {inputBoolean ? (
        <div>
          <p>Pro:</p>
          <textarea
            autoFocus
            onInput={(e) => {
              setNewConInput((newConInput = e.target.value));
            }}
          ></textarea>
          <p>Happy Factor:</p>
          <select
            onChange={(e) => {
              setNewConWeight(e.target.value);
            }}
          >
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
          if (newConInput && newConWeight) {
            dispatch(setNewCon({ con: newConInput, weight: newConWeight }));
            setNewConInput("");
            setNewConWeight(undefined);
          }
          setInputBoolean(!inputBoolean);
        }}
      >
        {inputBoolean ? "Save Con" : "Add a Con"}
      </button>
    </div>
  );
};

export default ConsListInputs;
