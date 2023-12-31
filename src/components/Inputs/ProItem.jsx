import { useState } from "react";
import { editPros, deleteItem } from "../../features/job/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectPros } from "../../features/job/jobSlice";

const ProItem = (props) => {
  const dispatch = useDispatch();
  const { index, item } = props;
  let [editBoolean, setEditBoolean] = useState(false);
  const pros = useSelector(selectPros);
  let [newProInput, setNewProInput] = useState("");
  let [newProWeight, setNewProWeight] = useState();

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

  return editBoolean ? (
    <div key={index} className="proConJobItem">
      <div className="table-layout edit-input">
        <textarea
          defaultValue={item.pro}
          onInput={(e) => {
            setNewProInput(e.target.value);
          }}
        ></textarea>
        <select
          onChange={(e) => {
            setNewProWeight(e.target.value);
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
            if (alreadyIncludes(newProInput)) {
              notify("You have entered a Pro that is already in the list");
            } else {
              if (newProInput && newProWeight) {
                dispatch(
                  editPros({
                    newPro: newProInput,
                    oldPro: item.pro,
                    newProWeight: newProWeight,
                    oldProWeight: item.weight,
                  })
                );
              } else if (newProInput) {
                dispatch(
                  editPros({
                    newPro: newProInput,
                    oldPro: item.pro,
                    newProWeight: item.weight,
                    oldProWeight: item.weight,
                  })
                );
              } else if (newProWeight) {
                dispatch(
                  editPros({
                    newPro: item.pro,
                    oldPro: item.pro,
                    newProWeight: newProWeight,
                    oldProWeight: item.weight,
                  })
                );
              }

              setNewProInput("");
              setNewProWeight(undefined);
              setEditBoolean(!editBoolean);
            }
          }}
        >
          Save
        </button>
        <button
          className="button half-button"
          onClick={() => {
            setNewProInput("");
            setNewProWeight(undefined);
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
          {index + 1}. {item.pro}
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
            dispatch(deleteItem({ pro: item.pro, weight: item.weight }));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProItem;
