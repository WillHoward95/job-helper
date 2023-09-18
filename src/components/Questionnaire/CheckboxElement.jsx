import {
  addRemovePro,
  addRemoveCon,
  test,
  selectJobs,
} from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import { useEffect } from "react";

const CheckboxElement = (props) => {
  const dispatch = useDispatch();
  const { job, pro, con, weight } = props;
  const jobs = useSelector(selectJobs);

  const lol = () => {
    const jobObject = jobs.find((element) => {
      return job === element.job;
    });

    // console.log(jobObject);

    if (jobObject.pros.includes(pro) || jobObject.cons.includes(con)) {
      return true;
    } else {
      return false;
    }
  };

  const isChecked = lol();

  return (
    <div>
      <Checkbox
        type="checkbox"
        onChange={() => {
          if (pro) {
            dispatch(
              addRemovePro({
                job: job,
                pro: pro,
                weight: weight,
              })
            );
          } else if (con) {
            dispatch(
              addRemoveCon({
                job: job,
                con: con,
                weight: weight,
              })
            );
          }
        }}
        defaultChecked={isChecked ? true : false}
      />
    </div>
  );
};

export default CheckboxElement;
