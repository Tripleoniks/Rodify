import "./Homepage.scss";
import apple from "../../asset/images/apple.svg";
import playstore from "../../asset/images/playstore.svg";
import girlHome from "../../asset/images/girlHome.png";
import man1 from "../../asset/images/man1.png";
import whatsapp from "../../asset/images/whatsapp.svg";
import email from "../../asset/images/email.svg";
import calling from "../../asset/images/calling1.svg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="row home-row">
        <div className="advance-left col-md-6">
          <h2>
            Our mission is to <span id="ad-span"> advance </span>humanity
          </h2>
          <p id="id-p">
            We would strive to achieve that through providing education and
            quality health
          </p>
          <div className="row down-row">
            <div className="col-md-6 col-6">
              <p>
                DOWNLOAD <br /> APP
              </p>
            </div>
            <div className="play-app-store-picture col-md-6 col-6">
              <img src={apple} alt="apple-logo" className="img-fluid" />
              <img src={playstore} alt="playstore-logo" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="advance-right col-md-6">
          <img
            src={girlHome}
            alt="girl picture"
            className="img-fluid"
            data-aos="flip-up"
          />
        </div>
      </div>
      <div className="row excel-row">
        <div className="excel-left col-md-6">
          <h2>
            Everything you’ll need to <span id="ex-span">excel</span> in life
          </h2>
          <p>
            We’ve curated a list of valuable resources to get you going in life,
            all for free!
          </p>
          <button className="get-started form-control">Get Started</button>
        </div>
        <div className="excel-right col-md-6">
          <img src={man1} alt="man" className="img-fluid" data-aos="fade-up" />
        </div>
      </div>
      <div className="row contact-row">
        <div className="contact-left col-md-6">
          <h2>Contact Us</h2>
          <p>
            Got any questions, feedback, request and complains? Reach out...
          </p>
          <p>
            <img src={whatsapp} alt="whatsapp" className="img-fluid" />{" "}
            +2348232323892{" "}
          </p>
          <p>
            <img src={email} alt="email" className="img-fluid" /> contact@us.com{" "}
          </p>
        </div>
        <div className="contact-right col-md-6">
          <img src={calling} alt="calling" className="img-fluid" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
