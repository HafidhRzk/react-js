import React, { useContext } from "react";
import Navbar from "../components/navbar_home";
// import imgRight from "../assets/img/black-and-white-1282260.jpg";
import Login from "../components/login";
import Register from "../components/register";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function Auth() {
  // let navigate = useNavigate();
  const [state] = useContext(UserContext);

  function checkAuth() {
    if (state.isLogin === true) {
      // navigate("/");
    }
  }
  checkAuth();

  function Form(props) {
    const login = props.login;
    if (login) {
      return <Login />;
    }
    return <Register />;
  }

  const location = useLocation();
  const tab = location.pathname === "/login" ? true : false;

  return (
    <>
      <Navbar />
      <section>
        <div className="splitLeft">
          <Form login={tab} />
        </div>
        <div className="splitRight">
          {/* <img src={imgRight} alt="" /> */}
        </div>
      </section>
    </>
  );
}
