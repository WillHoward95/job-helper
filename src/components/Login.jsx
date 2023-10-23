import NavBar from "./NavBar";
import { useState } from "react";
import { emails } from "../emails";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserObj, setAuth } from "../features/job/jobSlice";

const Login = () => {
  const navigate = useNavigate();
  let [userEmail, setUserEmail] = useState("");
  const dispatch = useDispatch();

  const userObj = emails.find((email) => {
    return email.email === userEmail;
  });

  // console.log(userObj);

  const notify = (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <NavBar />
      {/* where the user enters their comparison */}
      <div className="appSection">
        <h2>Email Address:</h2>
        <textarea
          className="job-textarea add-job-textarea"
          type="text"
          autoFocus
          onInput={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <button
          className="button add-button"
          onClick={() => {
            if (!userObj) {
              notify(
                `Your email is not in our system, please use the email on the page to contact us`
              );
            } else {
              dispatch(setUserObj(userObj));
              dispatch(setAuth(true));
              localStorage.setItem("authorised", true);
              navigate("/prosonboard");
            }
          }}
        >
          Login
        </button>
        <p>
          If you don't have access please email{" "}
          <a href="mailto: alan@brightspark.coach">
            Alan Shepherd (alan@brightspark.coach)
          </a>{" "}
          to request it.
        </p>
      </div>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};

export default Login;
