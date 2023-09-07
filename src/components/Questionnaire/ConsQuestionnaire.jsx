import { selectCons } from "../../features/job/jobSlice";
import { useSelector } from "react-redux";
import QuestionnaireElement from "./QuestionnaireElement";

const ConsQuestionnaire = () => {
  const cons = useSelector(selectCons);

  return (
    <div className="appSection">
      <h1>Cons</h1>
      {cons.map((item, index) => {
        return (
          <div key={index}>
            <h2>Con: {item.con}</h2>
            <h2>Value: {item.weight}</h2>
            <QuestionnaireElement con={item.con} weight={item.weight} />
          </div>
        );
      })}
    </div>
  );
};

export default ConsQuestionnaire;
