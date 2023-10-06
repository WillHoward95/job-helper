import { selectPros } from "../../features/job/jobSlice";
import { useSelector } from "react-redux";
import QuestionnaireElementPro from "./QuestionnaireElementPro";

const ProsQuestionnaire = () => {
  const pros = useSelector(selectPros);

  return (
    <div>
      <h1>Pros</h1>
      {pros.map((item, index) => {
        return (
          <div key={index}>
            <div className="table-layout">
              <h3>Pro: {item.pro}</h3>
              <h3 className="nobreak">Value: {item.weight}</h3>
            </div>
            {/* <div className="table-layout">
              <h3>{item.pro}</h3>
              <h3>{item.weight}</h3>
            </div> */}
            <QuestionnaireElementPro pro={item.pro} weight={item.weight} />
          </div>
        );
      })}
    </div>
  );
};

export default ProsQuestionnaire;
