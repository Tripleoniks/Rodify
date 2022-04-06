import { BrowserRouter, Switch, Route } from "react-router-dom";
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

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  const [notification, setNotification] = useState(true);

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
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/blogs" component={Blogs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
