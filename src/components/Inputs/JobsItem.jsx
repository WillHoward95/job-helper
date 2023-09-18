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
        className="job-textarea"
        key={index}
        defaultValue={item.job}
        onInput={(e) => {
          setEditText(e.target.value);
        }}
        autoFocus
      ></textarea>

      <div className="half-button-container">
        <button
          className="button half-button"
          onClick={() => {
            dispatch(editInput({ newJob: editText, oldJob: item.job }));
            setEditBoolean(!editBoolean);
          }}
        >
          Save
        </button>
        <button
          className="button half-button"
          onClick={() => {
            setEditText("");
            setEditBoolean(!editBoolean);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <div className="proConJobItem">
      <h3 key={index}>{item.job}</h3>
      <div className="half-button-container">
        <button
          className="button half-button"
          onClick={() => {
            dispatch(editInput({ newJob: editText, oldJob: item.job }));
            setEditBoolean(!editBoolean);
          }}
        >
          Edit
        </button>
        <button
          className="button half-button"
          onClick={() => {
            dispatch(deleteItem({ job: item.job }));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobsItem;
