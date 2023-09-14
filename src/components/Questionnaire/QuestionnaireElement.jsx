import {
  selectJobs,
  addRemovePro,
  addRemoveCon,
} from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";

const QuestionnaireElement = (props) => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const { pro, weight, con } = props;

  return (
    <div className="appSection">
      {jobs.map((item, index) => {
        return (
          <div key={index} className="table-layout">
            <h3>{item.job}</h3>
            <Checkbox
              type="checkbox"
              onChange={() => {
                if (pro) {
                  dispatch(
                    addRemovePro({
                      job: item.job,
                      pro: pro,
                      weight: weight,
                    })
                  );
                } else if (con) {
                  dispatch(
                    addRemoveCon({
                      job: item.job,
                      con: con,
                      weight: weight,
                    })
                  );
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
