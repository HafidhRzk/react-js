import React from "react";
import Navbar from "../components/navbar_home";
import imgRight from "../assets/img/black-and-white-1282260.jpg";
import Login from "../components/logiin";
import Register from "../components/register";
import { useLocation } from "react-router-dom";

export default function Auth() {
  function Form(props) {
    const isLogin = props.isLogin;
    if (isLogin) {
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
          <Form isLogin={tab} />
        </div>
        <div className="splitRight">
          <img src={imgRight} alt="" />
        </div>
      </section>
    </>
  );
}
