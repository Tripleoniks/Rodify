import "./Header.scss";
import Logo from "../../component/Logo/Logo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("GIRO_TOKEN"),
    }
  }

const Header = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("null")
    useEffect(() => {
        if(localStorage.GIRO_TOKEN){
          axios.get("https://giropay.xyz/api/v1/giro-app/auth/me", config)
        //   .then(res => setLoading(false))
          .then(res => setUser(res?.data?.user))
          .catch(err => console.log(err))
        }
      }, [])

      console.log(user)

      const signOut = () => {
          localStorage.removeItem("GIRO_TOKEN")
          localStorage.removeItem("currentUser")
            window.location.href = "/"
      }
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-4 logo-row">
          <Logo />
        </div>
       {
       user === "null" ? <div className="col-md-8 group-button">
          <Link className="signin" to="/signin">
            Login
          </Link>
          <Link className="register" to="register">
            Register
          </Link>
        </div> :
        <div className="col-md-4 group-button">
        <p style={{color: "#fff"}} className="user">Hi {user?.email?.slice(0, -9)}</p>
        <button onClick={signOut} className="logout">Logout</button>
        </div>
        }
      </div>
    </div>
  );
};

export default Header;
