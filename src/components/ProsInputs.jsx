import React from "react";
import ProsList from "./Inputs/ProsList";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./NavBar";
import { selectPros } from "../features/job/jobSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProsInputs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pros = useSelector(selectPros);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const notify = () => {
    toast.error(
      `You must add at least one Pro to progress through to the next page`,
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
      <ProsList />
      <button
        className="button main-button"
        onClick={() => {
          if (pros.length > 0) {
            navigate("/consonboard");
          } else {
            notify();
          }
        }}
      >
        Go To Cons Page
      </button>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default ProsInputs;
