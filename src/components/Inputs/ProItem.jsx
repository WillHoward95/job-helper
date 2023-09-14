import { useState } from "react";
import { editPros, deleteItem } from "../../features/job/jobSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProItem = (props) => {
  const dispatch = useDispatch();
  const { index, item } = props;
  let [editBoolean, setEditBoolean] = useState(false);

  let [newProInput, setNewProInput] = useState("");
  let [newProWeight, setNewProWeight] = useState();

  const notify = () => {
    toast.error(`Please enter a pro title and a weight to edit a pro`, {
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

  return editBoolean ? (
    <div key={index}>
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
            }
            if (!newProInput || !newProWeight) {
              if (editBoolean) {
                notify();
              }
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
    <div key={index}>
      <div className="table-layout">
        <h3>{item.pro}</h3>
        <h3>{item.weight}</h3>
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
