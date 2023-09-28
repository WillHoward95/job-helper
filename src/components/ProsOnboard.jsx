import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { loadSave } from "../features/job/jobSlice";
import NavBar from "./NavBar";

const ProsOnboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (localStorage.getItem("job-helper-jobs")) {
      dispatch(
        loadSave({
          jobs: JSON.parse(localStorage.getItem("job-helper-jobs")),
          pros: JSON.parse(localStorage.getItem("job-helper-pros")),
          cons: JSON.parse(localStorage.getItem("job-helper-cons")),
        })
      );
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div className="appSection">
        <p>
          MY HAPPY APP is the place to go to keep you focussed on the things
          that really matter to you and enables you to make decisions about your
          career path, qualifications, colleges, and universities to go to,
          which job choice to follow and which business idea works best for you.
        </p>
        <p>
          LIFE is not necessarily all about money. It may be one of your
          greatest motivators but there are many other things that make for a
          balanced and happier life.
        </p>
        <p>HOW does this work?</p>
        <p>
          FIRST, you need to define ALL the things you value, desire, and want
          in your life and give them a score out of 10 with 10 meaning it is
          essential to your life/job/career/business and 1 meaning it’s a nice
          to have but of minimal importance.
        </p>
        <p>For example:</p>
        <p>
          In my business life, now after many years working for others my first
          few things reads like this…
        </p>
        <p>
          <em>
            "I want to be in charge of my diary and what I do on a daily work
            basis."
          </em>
        </p>
        <p>My Score of importance for this is 10. </p>
        <p>
          <em>"I hate wearing a suit, so NOT suited and booted"</em>
        </p>
        <p>My score for this is 6, its important but not a deal breaker. </p>
        <p>
          <em>"To be able to work remotely from a foreign country."</em>
        </p>
        <p>My score for this is 2. It would be nice but it isn’t essential.</p>
        <p>
          SO OVER TO YOU. List all the things you want in your life that are
          important to you. They can be really personal and simple, like, you
          never want to get up before 8am. This is you painting a positive
          vision of how, where, what you are going to be doing in your future –
          work and play.
        </p>
      </div>
      <button
        className="button main-button"
        onClick={() => {
          navigate("/prosinputs");
        }}
      >
        Start Here
      </button>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default ProsOnboard;
