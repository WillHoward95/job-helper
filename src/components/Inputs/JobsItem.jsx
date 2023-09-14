import { useState } from "react";
import { useDispatch } from "react-redux";
import { editInput, deleteItem } from "../../features/job/jobSlice";

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
        className="button"
        onClick={() => {
          dispatch(editInput({ newJob: editText, oldJob: item.job }));
          setEditBoolean(!editBoolean);
        }}
      >
        Save
      </button>
      <button className="button">Delete</button>
    </div>
  ) : (
    <div>
      <h2 key={index}>{item.job}</h2>
      <button
        className="button"
        onClick={() => {
          dispatch(editInput({ newJob: editText, oldJob: item.job }));
          setEditBoolean(!editBoolean);
        }}
      >
        Edit
      </button>
      <button
        className="button"
        onClick={() => {
          dispatch(deleteItem({ job: item.job }));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default JobsItem;
