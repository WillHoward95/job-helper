import { addRemoveCon, selectJobs } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import FrowneyChecked from "../../emoticon-expression-sad-smile-smiley-svgrepo-com.svg";
import FrowneyUnchecked from "../../emoticon-expression-sad-smile-smiley-svgrepo-com unchecked.svg";

const CheckboxElementCon = (props) => {
  const dispatch = useDispatch();
  const { job, con, weight } = props;
  const jobs = useSelector(selectJobs);

  const isCon = () => {
    const jobObject = jobs.find((element) => {
      return job === element.job;
    });

    if (jobObject.cons.includes(con)) {
      return true;
    } else {
      return false;
    }
  };

  const isChecked = isCon();

  return (
    <div className="checkboxContainer">
      <div>
        {isChecked ? (
          <img src={FrowneyChecked} alt="React Logo" className="smiley" />
        ) : (
          <img src={FrowneyUnchecked} alt="React Logo" className="smiley" />
        )}

        <input
          type="checkbox"
          name="cb"
          id="cb"
          onChange={() => {
            if (con) {
              dispatch(
                addRemoveCon({
                  job: job,
                  con: con,
                  weight: weight,
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

export default CheckboxElementCon;
