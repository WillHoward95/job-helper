import { addRemovePro, selectJobs } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import SmileyChecked from "../../faces/Smiley Clicked.svg";
import SmileyUnchecked from "../../faces/Smiley Unclicked.svg";

const CheckboxElement = (props) => {
  const dispatch = useDispatch();
  const { job, pro, weight } = props;
  const jobs = useSelector(selectJobs);

  const isPro = () => {
    const jobObject = jobs.find((element) => {
      return job === element.job;
    });

    if (jobObject.pros.includes(pro)) {
      return true;
    } else {
      return false;
    }
  };

  const isChecked = isPro();

  return (
    <div className="checkboxContainer">
      <div>
        {isChecked ? (
          <img src={SmileyChecked} alt="React Logo" className="smiley" />
        ) : (
          <img src={SmileyUnchecked} alt="React Logo" className="smiley" />
        )}

        <input
          type="checkbox"
          name="cb"
          id="cb"
          onChange={() => {
            if (pro) {
              dispatch(
                addRemovePro({
                  job: job,
                  pro: pro,
                  weight: Number(weight),
                })
              );
            }
          }}
          defaultChecked={isChecked ? true : false}
        />
      </div>
    </div>
  );
};

export default CheckboxElement;
