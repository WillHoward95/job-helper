import { useState } from "react";
import { editPros, deleteItem } from "../../features/job/jobSlice";
import { useDispatch } from "react-redux";

const ProItem = (props) => {
  const dispatch = useDispatch();
  const { index, item } = props;
  let [editBoolean, setEditBoolean] = useState(false);

  let [newProInput, setNewProInput] = useState("");
  let [newProWeight, setNewProWeight] = useState();

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
      <button
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
          setNewProInput("");
          setNewProWeight(undefined);
          setEditBoolean(!editBoolean);
        }}
      >
        Save
      </button>
    </div>
  ) : (
    <div key={index}>
      <h2>{item.pro}</h2>
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
          dispatch(deleteItem({ pro: item.pro }));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ProItem;
