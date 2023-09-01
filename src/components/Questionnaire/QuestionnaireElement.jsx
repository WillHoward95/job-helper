import {
  selectJobs,
  addPro,
  addCon,
  removePro,
} from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const QuestionnaireElement = (props) => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const { pro, weight, con } = props;
  let [checkboxBoolean, setCheckboxBoolean] = useState(false);

  const handleChangeAdd = (job, pro, con, weight) => {
    if (pro) {
      console.log(job, pro, weight);
      dispatch(addPro({ job: job, pro: pro, weight: weight }));
    }
    if (con) {
      console.log(job, con, weight);
      dispatch(addCon({ job: job, con: con, weight: weight }));
    }
  };

  const handleChangeRemove = (job, pro, con, weight) => {
    if (pro) {
      console.log(job, pro, weight);
      dispatch(removePro({ job: job, pro: pro, weight: weight }));
    }
    if (con) {
      console.log(job, con, weight);
      // dispatch(addCon({ job: job, con: con, weight: weight }));
    }
  };

  return (
    <div>
      {jobs.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.job}</h2>
            <input
              type="checkbox"
              onChange={() => {
                setCheckboxBoolean(!checkboxBoolean);
                if (!checkboxBoolean) {
                  handleChangeAdd(item.job, pro, con, weight);
                } else {
                  handleChangeRemove(item.job, pro, con, weight);
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default QuestionnaireElement;
