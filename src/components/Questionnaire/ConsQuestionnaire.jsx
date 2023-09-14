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
            <div className="table-layout">
              <h3>Con:</h3>
              <h3>Value:</h3>
            </div>
            <div className="table-layout">
              <h3>{item.con}</h3>
              <h3>{item.weight}</h3>
            </div>
            <QuestionnaireElement con={item.con} weight={item.weight} />
          </div>
        );
      })}
    </div>
  );
};

export default ConsQuestionnaire;
