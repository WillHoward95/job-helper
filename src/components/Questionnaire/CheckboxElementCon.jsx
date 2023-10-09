import { addRemoveCon, selectJobs } from "../../features/job/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import FrowneyChecked from "../../faces/Frowny Clicked.svg";
import FrowneyUnchecked from "../../faces/Frowny Unclicked.svg";

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
          <img src={FrowneyChecked} className="smiley" />
        ) : (
          <img src={FrowneyUnchecked} className="smiley" />
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

export default CheckboxElementCon;
