import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";

const JobsOnboard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <p>
        FINALLY it's time to tell us what you are comparing today and give us
        the different options you are considering.
      </p>
      <p>In my case it's 3 different business ideas. </p>
      <ol>
        <li>Catering Franchise costing £45k. Based in UK.</li>
        <li>
          Online Food Ingredients business that would cost £3k to build and
          stock.
        </li>
        <li>UK Food consultancy advising big businesses.</li>
      </ol>

      <p>
        Yours might be schools, colleges, universities, courses, subjects to
        study, or different job or career choices to make.
      </p>
      <button
        className="button main-button"
        onClick={() => {
          navigate("/jobsinputs");
        }}
      >
        Enter Comparisons
      </button>
    </div>
  );
};

export default JobsOnboard;
