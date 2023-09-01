import ProsQuestionnaire from "./Questionnaire/ProsQuestionnaire";
import ConsQuestionnaire from "./Questionnaire/ConsQuestionnaire";

const Questionnaire = () => {
  return (
    <div>
      <ProsQuestionnaire />
      <ConsQuestionnaire />
      <button>Get Results</button>
    </div>
  );
};

export default Questionnaire;
