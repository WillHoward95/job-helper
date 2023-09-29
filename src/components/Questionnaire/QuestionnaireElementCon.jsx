import { selectJobs } from "../../features/job/jobSlice";
import { useSelector } from "react-redux";
import CheckboxElementCon from "./CheckboxElementCon";

const QuestionnaireElementCon = (props) => {
  const jobs = useSelector(selectJobs);
  const { weight, con } = props;

  return (
    <div className="appSection questionnaireContainer">
      {jobs.map((item, index) => {
        return (
          <div key={index} className="table-layout">
            <h3>{item.job}</h3>
            <CheckboxElementCon job={item.job} con={con} weight={weight} />
          </div>
        );
      })}
    </div>
  );
};

export default QuestionnaireElementCon;
