import { selectPros } from "../../features/job/jobSlice";
import { useSelector } from "react-redux";
import QuestionnaireElement from "./QuestionnaireElement";

const ProsQuestionnaire = () => {
  const pros = useSelector(selectPros);

  return (
    <div>
      <h1>Pros</h1>
      {pros.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.pro}</h2>
            <h2>{item.weight}</h2>
            <QuestionnaireElement pro={item.pro} weight={item.weight} />
          </div>
        );
      })}
    </div>
  );
};

export default ProsQuestionnaire;
