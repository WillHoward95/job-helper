import { useState } from "react";
import { editCons, deleteItem, selectCons } from "../../features/job/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConsItem = (props) => {
  const dispatch = useDispatch();
  const { index, item } = props;
  let [editBoolean, setEditBoolean] = useState(false);
  const cons = useSelector(selectCons);
  let [newConInput, setNewConInput] = useState("");
  let [newConWeight, setNewConWeight] = useState();

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

  return editBoolean ? (
    <div key={index} className="proConJobItem">
      <div className="table-layout edit-input">
        <textarea
          defaultValue={item.con}
          onInput={(e) => {
            setNewConInput(e.target.value);
          }}
        ></textarea>
        <select
          onChange={(e) => {
            setNewConWeight(e.target.value);
          }}
        >
          <option value={0}>---</option>
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
      <div className="half-button-container">
        <button
          className="button half-button"
          onClick={() => {
            if (alreadyIncludes(newConInput)) {
              notify("You have entered a Con that is already in the list");
            } else {
              if (newConInput && newConWeight) {
                dispatch(
                  editCons({
                    newCon: newConInput,
                    oldCon: item.con,
                    newConWeight: newConWeight,
                  })
                );
              } else if (newConInput) {
                dispatch(
                  editCons({
                    newCon: newConInput,
                    oldCon: item.con,
                    newConWeight: item.weight,
                  })
                );
              } else if (newConWeight) {
                dispatch(
                  editCons({
                    newCon: item.con,
                    oldCon: item.con,
                    newConWeight: newConWeight,
                  })
                );
              }

              setNewConInput("");
              setNewConWeight(undefined);
              setEditBoolean(!editBoolean);
            }
          }}
        >
          Save
        </button>
        <button
          className="button half-button"
          onClick={() => {
            setNewConInput("");
            setNewConWeight(undefined);
            setEditBoolean(!editBoolean);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <div key={index} className="proConJobItem">
      <div className="table-layout">
        <h3>
          {index + 1}. {item.con}
        </h3>
        <h3 className="weighting">{item.weight}</h3>
      </div>
      <div className="half-button-container">
        <button
          className="button half-button"
          onClick={() => {
            setEditBoolean(!editBoolean);
          }}
        >
          Edit
        </button>
        <button
          className="button half-button"
          onClick={() => {
            dispatch(deleteItem({ con: item.con }));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConsItem;
