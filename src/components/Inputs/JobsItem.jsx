import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editInput, deleteItem, selectJobs } from "../../features/job/jobSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobsItem = (props) => {
  const dispatch = useDispatch();
  const { item, index } = props;
  let [editBoolean, setEditBoolean] = useState(false);
  let [editText, setEditText] = useState("");
  const jobs = useSelector(selectJobs);

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

  const alreadyIncludes = (job) => {
    let includes = [];
    jobs.map((item) => {
      if (item.job.toLowerCase() === job.toLowerCase()) {
        includes.push(job);
      }
    });
    if (includes.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return editBoolean ? (
    <div className="proConJobItem">
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
            if (alreadyIncludes(editText)) {
              notify(
                "You have entered a comparison that is already in the list"
              );
            } else {
              dispatch(editInput({ newJob: editText, oldJob: item.job }));
              setEditBoolean(!editBoolean);
            }
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
