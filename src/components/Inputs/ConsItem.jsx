import { useState } from "react";
import { editCons, deleteItem } from "../../features/job/jobSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConsItem = (props) => {
  const dispatch = useDispatch();
  const { index, item } = props;
  let [editBoolean, setEditBoolean] = useState(false);

  let [newConInput, setNewConInput] = useState("");
  let [newConWeight, setNewConWeight] = useState();

  const notify = (action) => {
    toast.error(`Please enter a pro title and a weight to ${action}`, {
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
      <button
        className="button"
        onClick={() => {
          if (newConInput && newConWeight) {
            dispatch(
              editCons({
                newCon: newConInput,
                oldCon: item.con,
                newConWeight: newConWeight,
              })
            );
          }

          if (!newConInput || !newConWeight) {
            if (editBoolean) {
              notify("edit a con");
            }
          }

          setNewConInput("");
          setNewConWeight(undefined);
          setEditBoolean(!editBoolean);
        }}
      >
        Save
      </button>
      <button
        className="button"
        onClick={() => {
          setNewConInput("");
          setNewConWeight(undefined);
          setEditBoolean(!editBoolean);
        }}
      >
        Cancel
      </button>
    </div>
  ) : (
    <div key={index}>
      <h2>{item.con}</h2>
      <h2>{item.weight}</h2>
      <button
        className="button"
        onClick={() => {
          setEditBoolean(!editBoolean);
        }}
      >
        Edit
      </button>
      <button
        className="button"
        onClick={() => {
          dispatch(deleteItem({ con: item.con }));
        }}
      >
        Delete
      </button>
      <ToastContainer />
    </div>
  );
};

export default ConsItem;
