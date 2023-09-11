import { useState } from "react";
import { editCons, deleteItem } from "../../features/job/jobSlice";
import { useDispatch } from "react-redux";

const ConsItem = (props) => {
  const dispatch = useDispatch();
  const { index, item } = props;
  let [editBoolean, setEditBoolean] = useState(false);

  let [newConInput, setNewConInput] = useState("");
  let [newConWeight, setNewConWeight] = useState();

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
          setNewConInput("");
          setNewConWeight(undefined);
          setEditBoolean(!editBoolean);
        }}
      >
        Save
      </button>
    </div>
  ) : (
    <div key={index}>
      <h2>{item.con}</h2>
      <h2>{item.weight}</h2>
      <button
        onClick={() => {
          setEditBoolean(!editBoolean);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          dispatch(deleteItem({ con: item.con }));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ConsItem;
