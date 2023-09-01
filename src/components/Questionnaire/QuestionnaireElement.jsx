import { selectJobs } from "../../features/job/jobSlice";
import { useSelector } from "react-redux";

const QuestionnaireElement = () => {
  const jobs = useSelector(selectJobs);

  return (
    <div>
      {jobs.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })}
    </div>
  );
};

export default QuestionnaireElement;
