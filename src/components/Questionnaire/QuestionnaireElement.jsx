import { selectJobs, addPro } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const QuestionnaireElement = (props) => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const { pro, weight, con } = props;
  let [checkboxBoolean, setCheckboxBoolean] = useState(false);

  const handleChange = (job, pro, con, weight) => {
    dispatch(addPro({ job: job, pro: pro, weight: weight }));
    // console.log(job, pro, con, weight);
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
                console.log(item.job, con, pro, weight);
                setCheckboxBoolean(!checkboxBoolean);
                handleChange(item.job, pro, con, weight);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default QuestionnaireElement;
