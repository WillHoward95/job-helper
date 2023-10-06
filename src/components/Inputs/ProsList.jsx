import { selectPros, setNewPro } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ProItem from "./ProItem.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProsList = () => {
  const dispatch = useDispatch();
  const pros = useSelector(selectPros);
  let [inputBoolean, setInputBoolean] = useState(false);
  let [newProInput, setNewProInput] = useState("");
  let [newProWeight, setNewProWeight] = useState();

  const prosTotal = (pros) => {
    let counter = 0;
    pros.forEach((item) => {
      counter += Number(item.weight);
    });
    return counter;
  };

  const notify = (text) => {
    toast.error(text, {
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

  const alreadyIncludes = (pro) => {
    let includes = [];
    pros.map((item) => {
      if (item.pro.toLowerCase() === pro.toLowerCase()) {
        includes.push(pro);
      }
    });
    if (includes.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="appSection">
      <div className="table-layout">
        <h1>Pros</h1>
        <h1>Value</h1>
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
      {inputBoolean ? (
        <div>
          <button
            className="button add-button"
            onClick={() => {
              if (alreadyIncludes(newProInput)) {
                notify("You have entered a Pro that is already in the list");
              } else {
                if (newProInput && newProWeight) {
                  dispatch(
                    setNewPro({ pro: newProInput, weight: newProWeight })
                  );
                }
                if (!newProInput || !newProWeight) {
                  if (inputBoolean) {
                    notify(`Please enter a title and a weight to add a pro`);
                  }
                }
                setInputBoolean(!inputBoolean);
                setNewProInput("");
                setNewProWeight(undefined);
              }
            }}
          >
            Save
          </button>
          <button
            className="button"
            onClick={() => {
              setInputBoolean(!inputBoolean);
              setNewProInput("");
              setNewProWeight(undefined);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="button add-button"
          onClick={() => {
            setInputBoolean(!inputBoolean);
          }}
        >
          Add
        </button>
      )}
      <div className="table-layout">
        <h2>Life Score:</h2>
        <h2>{prosTotal(pros)}</h2>
      </div>
    </div>
  );
};

export default ProsList;
