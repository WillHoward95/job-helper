import React from "react";
import ConsList from "./Inputs/ConsList";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./NavBar";

const ConsInputs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="appContainer">
      <NavBar />
      <ConsList />
      <button
        className="button main-button"
        onClick={() => {
          navigate("/jobsonboard");
        }}
      >
        Go To Comparisons
      </button>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default ConsInputs;
