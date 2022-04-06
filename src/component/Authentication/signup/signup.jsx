import "./signup.scss";
import Logo from "../../Logo/Logo";
import { useState } from "react";
import ButtonLoader from "../../buttonLoader/buttonLoader";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const Register = () => {
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
        "https://giropay.xyz/api/v1/giro-app/auth/register",
        formFields
      );
      resetFormField();
      setIsLoading(false);
      toast.success("User successfully created");
      history.push("/signin");
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
        <div className="signin-left col-md-3">
          <Logo />
        </div>
        <div className="signin-right col-md-9 col-12">
          <div className="signin-form" data-aos="fade-up">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                className="form-control s-form"
                placeholder="Email"
                onChange={handleChange}
                value={email}
                required
              />
              <input
                type="password"
                name="password"
                className="form-control s-form"
                placeholder="Password"
                onChange={handleChange}
                value={password}
                required
              />

              {isLoading ? (
                <button className="form-control frm-btn">
                  {" "}
                  Please wait <ButtonLoader />
                </button>
              ) : (
                <button className="form-control frm-btn">Register</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
