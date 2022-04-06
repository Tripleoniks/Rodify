import Logo from "../../Logo/Logo";
import "./signin.scss";
import ButtonLoader from "../../buttonLoader/buttonLoader";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const defaultFormFields = {
  email: "",
  password: "",
};

const Authentication = (props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await axios.post(
        "https://giropay.xyz/api/v1/giro-app/auth/login", formFields
      );
      console.log(user);
      localStorage.setItem("GIRO_TOKEN", user?.data?.token);
      localStorage.setItem("currentUser", user?.data?.token)
      resetFormField();
      setIsLoading(false);
      if (user.status === 200) {
        toast.success("Welcome");
        window.location.href ="/blogs"
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error);
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="signin">
      <div className="sign-row row">
        <div className="signin-left col-md-3 col-12">
          <Logo />
        </div>
        <div className="signin-right col-md-9 col-12">
          <div className="signin-form" data-aos="fade-up">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control s-form"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <input
                type="password"
                className="form-control s-form"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              {isLoading ? (
                <button className="form-control frm-btn">
                  {" "}
                  Please wait <ButtonLoader />
                </button>
              ) : (
                <button className="form-control frm-btn">Login</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
