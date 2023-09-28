import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./NavBar";

const ConsOnboard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <div>
        <p>
          LIFE is not always perfect and there will always be negatives or
          obstacles to your goals. This section is to identify what elements may
          be an obstacle or negative and for you to put a level of importance to
          them.
        </p>
        <p>For Example:</p>
        <p>
          In my stage of life there are a few things that would cause a major
          problem for me and a few that are just annoying but need to be
          considered.
        </p>
        <p>
          <em>"The cost to set up a business is more than £10k."</em>
        </p>
        <p>This is my maximum budget, so it scores 10.</p>
        <p>
          <em>
            "I need an income flow within 6 months, anything longer is a
            problem".
          </em>
        </p>
        <p>
          This is pretty important too but not a deal breaker, so it scores a 5.
        </p>
        <p>
          <em>"The business must be based in a city."</em>
        </p>
        <p>Not keen on this but it's only a small issue, so it scores a 7.</p>
      </div>
      <button
        className="button main-button"
        onClick={() => {
          navigate("/consinputs");
        }}
      >
        Enter Cons
      </button>
    </div>
  );
};

export default ConsOnboard;
