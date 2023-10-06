import React from "react";
import ConsList from "./Inputs/ConsList";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./NavBar";
import { selectCons } from "../features/job/jobSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConsInputs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const cons = useSelector(selectCons);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const notify = () => {
    toast.error(
      `You must add at least one Con to progress through to the next page`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };

  return (
    <div>
      <NavBar />
      <ConsList />
      <button
        className="button main-button"
        onClick={() => {
          if (cons.length > 0) {
            navigate("/jobsonboard");
          } else {
            notify();
          }
        }}
      >
        Go To Comparisons
      </button>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default ConsInputs;
