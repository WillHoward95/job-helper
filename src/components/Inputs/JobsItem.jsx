import { useState } from "react";
import { useDispatch } from "react-redux";
import { editInput } from "../../features/job/jobSlice";

const JobsItem = (props) => {
  const dispatch = useDispatch();
  const { item, index } = props;
  let [editBoolean, setEditBoolean] = useState(false);
  let [editText, setEditText] = useState("");

  return editBoolean ? (
    <div>
      <textarea
        key={index}
        defaultValue={item.job}
        onInput={(e) => {
          setEditText(e.target.value);
        }}
        autoFocus
      ></textarea>

      <button
        onClick={() => {
          dispatch(editInput({ newJob: editText, oldJob: item.job }));
          setEditBoolean(!editBoolean);
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
          dispatch(editInput({ newJob: editText, oldJob: item.job }));
          setEditBoolean(!editBoolean);
        }}
      >
        Edit
      </button>
      <button>Delete</button>
    </div>
  );
};

export default JobsItem;
