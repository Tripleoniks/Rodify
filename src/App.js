import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../src/component/Header/Header";
import Footer from "../src/component/Footer/Footer";
import Homepage from "../src/component/Homepage/Homepage";
import Signin from "./component/Authentication/signin/signin";
import Blogs from "./component/Blogs/Blogs";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Register from "./component/Authentication/signup/signup";
import { useState } from "react";
import axios from "axios";

const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("GIRO_TOKEN"),
  },
};

const currentUser = localStorage.GIRO_TOKEN;

function App() {
  useEffect(() => {
    if (currentUser) {
      axios.get("https://giropay.xyz/api/v1/giro-app/auth/me", config);
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  const [notification, setNotification] = useState(true);

  // useEffect(() => {

  // }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        {notification === true ? (
          <div className="notification">
            <button id="new-btn">New!</button>
            <p>Announcing our $15 million series A funding!</p>
            <button id="x-btn" onClick={() => setNotification(false)}>
              <i className="fa-regular fa-circle-xmark"></i>
            </button>
          </div>
        ) : null}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Signin />)}
          />
          <Route
            exact
            path="/register"
            render={() => (currentUser ? <Redirect to="/" /> : <Register />)}
          />
          <Route
            exact
            path="/blogs"
            render={() => (currentUser ? <Blogs /> : <Redirect to="/" />)}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
