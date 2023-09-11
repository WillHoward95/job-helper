import { useState } from "react";
import { useDispatch } from "react-redux";
import { editInput } from "../../features/job/jobSlice";

const JobsItem = (props) => {
  const dispatch = useDispatch();
  const { item, index } = props;
  let [editBoolean, setEditBoolean] = useState(false);
  let [editText, setEditText] = useState("");

  const handleEdit = () => {
    dispatch(editInput({ newJob: editText, oldJob: item.job }));
    setEditBoolean(!editBoolean);
  };

  return editBoolean ? (
    <div>
      <textarea
        key={index}
        placeholder={item.job}
        onInput={(e) => {
          setEditText(e.target.value);
        }}
        autoFocus
      ></textarea>

      <button
        onClick={() => {
          handleEdit();
        }}
      >
        Save
      </button>
      <button>Delete</button>
    </div>
  ) : (
    <div>
      <h2 key={index}>{item.job}</h2>
      <button
        onClick={() => {
          handleEdit();
        }}
      >
        Edit
      </button>
      <button>Delete</button>
    </div>
  );
};

export default JobsItem;
