import {
  selectJobs,
  addRemovePro,
  addRemoveCon,
} from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";

const QuestionnaireElement = (props) => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const { pro, weight, con } = props;

  return (
    <div className="appSection">
      {jobs.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.job}</h2>
            <input
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
