import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input-component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button-component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form-style";
import {
  googleSignInStart,
  // facebookSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  // const logFacebookUser = async () => {
  //   try {
  //     dispatch(facebookSignInStart());
  //   } catch (error) {
  //    console.log(error);
  //   }
  // };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
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
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>

          <Button
            type="button"
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign In with Google
          </Button>

          {/* <Button
            type="button"
            onClick={logFacebookUser}
            buttonType={BUTTON_TYPE_CLASSES.facebook}
          >
            Sign In with Facebook
          </Button> */}
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
