import { useState } from "react";
import styles from "./style.module.css";
import YOUTUBE_BG from "../../assets/youtubebg.jpg";
const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.signUpForm}>
        <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
        {!isSignInForm && (
          <input
            className={styles.inputField}
            type="text"
            placeholder="Enter your Full Name"
          ></input>
        )}
        <input
          className={styles.inputField}
          type="text"
          placeholder="Email or Mobile number"
        ></input>
        <input className={styles.inputField} type="text" placeholder="Password"></input>
        <button className={styles.signInOrSignUpBtn}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <div className={styles.signUpText}>
          <span>
            {isSignInForm ? "New to Youtube?" : "Already Registered?"}
            <p onClick={toggleSignInForm} className={styles.signInOrSignUp}>
              {isSignInForm ? "Sign up now" : "Sign in now"}
            </p>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
