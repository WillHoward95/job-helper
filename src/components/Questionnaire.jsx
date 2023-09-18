import ProsQuestionnaire from "./Questionnaire/ProsQuestionnaire";
import ConsQuestionnaire from "./Questionnaire/ConsQuestionnaire";
import { useNavigate } from "react-router-dom";
import { removeProsCons } from "../features/job/jobSlice";
import { useDispatch } from "react-redux";

const Questionnaire = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // window.onpopstate = () => {
  //   dispatch(removeProsCons());
  // };

  return (
    <div>
      <ProsQuestionnaire />
      <ConsQuestionnaire />
      <button
        className="button main-button"
        onClick={() => {
          navigate("/results");
        }}
      >
        Get Results
      </button>
    </div>
  );
};

export default Questionnaire;
