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

  const consTotal = (cons) => {
    let counter = 0;
    cons.forEach((item) => {
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

  const alreadyIncludes = (con) => {
    let includes = [];
    cons.map((item) => {
      if (item.con.toLowerCase() === con.toLowerCase()) {
        includes.push(con);
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
      <div>
        <h1>Cons</h1>
        <div className="table-layout">
          <h3>Con:</h3>
          <h3>Value:</h3>
        </div>
      </div>
      {cons.map((item, index) => {
        return <ConsItem item={item} index={index} key={index} />;
      })}
      {inputBoolean ? (
        <div className="inputs add-input">
          <div className="table-layout">
            <textarea
              autoFocus
              onInput={(e) => {
                setNewConInput((newConInput = e.target.value));
              }}
            ></textarea>

            <select
              onChange={(e) => {
                setNewConWeight(Number(e.target.value));
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
              if (alreadyIncludes(newConInput)) {
                notify("You have entered a Con that is already in the list");
              } else {
                if (newConInput && newConWeight) {
                  dispatch(
                    setNewCon({ con: newConInput, weight: newConWeight })
                  );
                }
                if (!newConInput || !newConWeight) {
                  if (inputBoolean) {
                    notify(`Please enter a title and a weight to add a con`);
                  }
                }
                setInputBoolean(!inputBoolean);
                setNewConInput("");
                setNewConWeight(undefined);
              }
            }}
          >
            Save
          </button>
          <button
            className="button"
            onClick={() => {
              setInputBoolean(!inputBoolean);
              setNewConInput("");
              setNewConWeight(undefined);
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
        <h2>{consTotal(cons)}</h2>
      </div>
    </div>
  );
};

export default ConsListInputs;
