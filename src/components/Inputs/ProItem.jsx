import { useState } from "react";
import { editPros, deleteItem } from "../../features/job/jobSlice";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const ProItem = (props) => {
  const dispatch = useDispatch();
  const { index, item } = props;
  let [editBoolean, setEditBoolean] = useState(false);

  let [newProInput, setNewProInput] = useState("");
  let [newProWeight, setNewProWeight] = useState();

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
            if (newProInput && newProWeight) {
              dispatch(
                editPros({
                  newPro: newProInput,
                  oldPro: item.pro,
                  newProWeight: newProWeight,
                })
              );
            } else if (newProInput) {
              dispatch(
                editPros({
                  newPro: newProInput,
                  oldPro: item.pro,
                  newProWeight: item.weight,
                })
              );
            } else if (newProWeight) {
              dispatch(
                editPros({
                  newPro: item.pro,
                  oldPro: item.pro,
                  newProWeight: newProWeight,
                })
              );
            }

            setNewProInput("");
            setNewProWeight(undefined);
            setEditBoolean(!editBoolean);
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
            dispatch(deleteItem({ pro: item.pro }));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProItem;
