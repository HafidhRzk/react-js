import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";

import Router from "./router/route"

import { API, setAuthToken } from "./config/api";

function App() {
  const [state, dispatch] = useContext(UserContext);
  console.log(state)

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await API.get("/auth/check-auth");
        if (response.status === 404) {
          return dispatch({
            type: "AUTH_ERROR",
          });
        }

        let payload = response.data.data;
        payload.token = localStorage.token;
        dispatch({
          type: "USER_SUCCESS",
          payload,
        });
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    if (localStorage.token) {
      checkUser()
    }
  }, [dispatch]);

  return (Router)
}

export default App;
