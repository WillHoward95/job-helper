import { selectJobs } from "../../features/job/jobSlice";
import { useSelector } from "react-redux";
import CheckboxElementPro from "./CheckboxElementPro";

const QuestionnaireElementPro = (props) => {
  const jobs = useSelector(selectJobs);
  const { pro, weight } = props;

  return (
    <div className="appSection questionnaireContainer">
      {jobs.map((item, index) => {
        return (
          <div key={index} className="table-layout">
            <h3>{item.job}</h3>
            <CheckboxElementPro job={item.job} pro={pro} weight={weight} />
          </div>
        );
      })}
    </div>
  );
};

export default QuestionnaireElementPro;
