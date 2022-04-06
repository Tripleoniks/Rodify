import "./Header.scss";
import Logo from "../../component/Logo/Logo";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-4 logo-row">
          <Logo />
        </div>
        <div className="col-md-8 group-button">
          <Link className="signin" to="/signin">
            Login
          </Link>
          <Link className="register" to="register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
