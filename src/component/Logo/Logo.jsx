import { Link } from "react-router-dom";
import logo from "../../asset/images/Logo.png";

const Logo = () => {
  return (
    <Link to="/">
      {" "}
      <div id="logo">
        {" "}
        <img src={logo} className="img-fluid" alt="logo" />{" "}
      </div>
    </Link>
  );
};

export default Logo;
