import { selectJobs } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import CheckboxElement from "./CheckboxElement";

const QuestionnaireElement = (props) => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const { pro, weight, con } = props;

  return (
    <div className="appSection questionnaireElement">
      {jobs.map((item, index) => {
        return (
          <div key={index} className="table-layout">
            <h3>{item.job}</h3>
            <CheckboxElement
              job={item.job}
              pro={pro}
              con={con}
              weight={weight}
            />
          </div>
        );
      })}
    </div>
  );
};

export default QuestionnaireElement;
