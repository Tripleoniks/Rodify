import "./Footer.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <div className="row link-row">
        <p className="col-md-3">
          {" "}
          <Link to="/">Blog</Link>
        </p>
        <p className="col-md-3">
          {" "}
          <Link to="/">Privacy Policy</Link>
        </p>
        <p className="col-md-3">
          {" "}
          <Link to="/">About</Link>
        </p>
        <p className="col-md-3">
          {" "}
          <Link to="/">Contact</Link>
        </p>
      </div>
      <p className="copy-p">copyright Rodufy 2022</p>
    </div>
  );
};

export default Footer;
