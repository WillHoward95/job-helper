import React from "react";
import ProsList from "./Inputs/ProsList";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./NavBar";

const ProsInputs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <ProsList />
      <button
        className="button main-button"
        onClick={() => {
          navigate("/consonboard");
        }}
      >
        Go To Cons Page
      </button>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default ProsInputs;
