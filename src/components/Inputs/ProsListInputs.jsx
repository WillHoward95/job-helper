import { selectPros, setNewPro } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ProItem from "./ProItem.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProsListInputs = () => {
  const dispatch = useDispatch();
  const pros = useSelector(selectPros);
  let [inputBoolean, setInputBoolean] = useState(false);
  let [newProInput, setNewProInput] = useState("");
  let [newProWeight, setNewProWeight] = useState();

  const notify = () => {
    toast.error(`Please enter a title and a weight to add a pro`, {
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
        <h1>Pros</h1>
        <div className="table-layout">
          <h3>Pro:</h3>
          <h3>Value:</h3>
        </div>
      </div>
      {pros.map((item, index) => {
        return <ProItem item={item} index={index} key={index} />;
      })}
      {inputBoolean ? (
        <div className="inputs add-input">
          <div className="table-layout">
            <textarea
              autoFocus
              onInput={(e) => {
                setNewProInput((newProInput = e.target.value));
              }}
            ></textarea>
            <select
              onChange={(e) => {
                setNewProWeight(Number(e.target.value));
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
        </div>
      ) : (
        <></>
      )}
      <button
        className="button add-button"
        onClick={() => {
          if (newProInput && newProWeight) {
            dispatch(setNewPro({ pro: newProInput, weight: newProWeight }));
          }
          if (!newProInput || !newProWeight) {
            if (inputBoolean) {
              notify();
            }
          }
          setInputBoolean(!inputBoolean);
          setNewProInput("");
          setNewProWeight(undefined);
        }}
      >
        {inputBoolean ? "Save Pro" : "Add a Pro"}
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

export default ProsListInputs;
