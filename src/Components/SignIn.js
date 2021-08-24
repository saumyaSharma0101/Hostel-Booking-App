import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

function SignIn(props) {
  const { signInWithGoogle, signInWithFacebook } = props;
  return (
    <div className="signInPage">
      <b>Hostel Allocation</b>
      <div>Please sign-in:</div>
      <GoogleLoginButton
        style={{ width: "20%" }}
        onClick={() => {
          //props.signInWithGoogle();
          signInWithGoogle();
        }}
      >
        <span>Sign in with Google</span>
      </GoogleLoginButton>
      <FacebookLoginButton
        style={{ width: "20%" }}
        onClick={() => {
          //props.signInWithFacebook();
          signInWithFacebook();
        }}
      >
        <span>Sign in with Facebook</span>
      </FacebookLoginButton>
    </div>
  );
}

export default SignIn;
