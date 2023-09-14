import { selectCons, setNewCon } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ConsItem from "./ConsItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConsListInputs = () => {
  const dispatch = useDispatch();
  const cons = useSelector(selectCons);
  let [inputBoolean, setInputBoolean] = useState(false);
  let [newConInput, setNewConInput] = useState("");
  let [newConWeight, setNewConWeight] = useState();

  const notify = () => {
    toast.error(`Please enter a con title and a weight to add a con`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="appSection">
      <div>
        <h1>Cons</h1>
        <h3>Con:</h3>
        <h3>Value:</h3>
      </div>
      {cons.map((item, index) => {
        return <ConsItem item={item} index={index} key={index} />;
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
        className="button"
        onClick={() => {
          if (newConInput && newConWeight) {
            dispatch(setNewCon({ con: newConInput, weight: newConWeight }));
          }
          if (!newConInput || !newConWeight) {
            if (inputBoolean) {
              notify();
            }
          }
          setInputBoolean(!inputBoolean);
          setNewConInput("");
          setNewConWeight(undefined);
        }}
      >
        {inputBoolean ? "Save Con" : "Add a Con"}
      </button>
      {inputBoolean ? (
        <button
          className="button"
          onClick={() => {
            setInputBoolean(!inputBoolean);
          }}
        >
          Cancel
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ConsListInputs;
