import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserContext } from "./context/userContext";

import Home from "./pages/home";
import Auth from "./pages/auth";

import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false) {
      // navigate("/");
    }
  }, [navigate, state]);

  // eslint-disable-next-line react-hooks/exhaustive-deps


  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await API.get("/auth/check-auth");
        if (response.status === 404) {
          return dispatch({
            type: "AUTH_ERROR",
          });
        }
        let payload = response.data.data.user;
        payload.token = localStorage.token;
        dispatch({
          type: "USER_SUCCESS",
          payload,
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (localStorage.token) {
      checkUser();
    }
  }, [dispatch]);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
    </Routes>
  );
}

export default App;
