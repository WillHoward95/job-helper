import JobsList from "./Inputs/JobsList";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./NavBar";

const JobsInputs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <JobsList />
      <button
        className="button main-button"
        onClick={() => {
          navigate("/questionnaire");
        }}
      >
        Begin questionnaire
      </button>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default JobsInputs;
