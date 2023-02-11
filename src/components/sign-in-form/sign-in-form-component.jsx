import { useState } from "react";

import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";
import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
  signInUserWithEmailAndPassword,
  mergeFacebookUser,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form-style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const logFacebookUser = async () => {
    try {
      await signInWithFacebookPopup();
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        await mergeFacebookUser();
      } else {
        console.log(error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("This email not exists");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label={"Email"}
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>

          <Button type="button" onClick={logGoogleUser} buttonType="google">
            Sign In with Google
          </Button>

          <Button type="button" onClick={logFacebookUser} buttonType="facebook">
            Sign In with Facebook
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
