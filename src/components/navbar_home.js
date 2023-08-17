import React, { useContext } from "react";
// import logo from "../assets/img/maria-teneva-OCXL4DP3yYw-unsplash.jpg";
import { Navbar, Container } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import SweetAlert from "./swal";

export default function NavbarHome() {
  const [state, dispatch] = useContext(UserContext);

  const handleLogout = () => {
    const swalOpt = {
      message: "Success Log Out",
      type: "question",
      icon: "success",
      loc: "/login",
      callback: function (confirmed) {
        if (confirmed) {
          dispatch({
            type: 'LOGOUT',
          });
        }
      }
    }

    SweetAlert(swalOpt)
  }

  function NavContent(props) {
    const isLogin = props.isState;
    if (isLogin) {
      return (
        <Navbar.Text className="navbar" onClick={() => handleLogout()} >
          Log Out
        </Navbar.Text>
      )
    } else {
      return (
        <a href="/">
          <Navbar.Text className="navbar">
            Go To Landing Page!
          </Navbar.Text>
        </a>
      )
    }
  }

  return (
    <>
      <Navbar sticky="top" className="navbar">
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} width="40" height="40" alt="React Bootstrap logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end" >
            <div className="pointer">
              <NavContent isState={state.isLogin} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
