import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithFacebookPopup,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import Button from "../../components/button/button-component";

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logFacebookUser = async () => {
    const {user} = await signInWithFacebookPopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In page</h1>
      <Button onClick={logGoogleUser} buttonType="google">Sign In with Google</Button>
      <Button onClick={logFacebookUser} buttonType="facebook">Sign In with Facebook</Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
