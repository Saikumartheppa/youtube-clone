import { useState } from "react";
import styles from "./style.module.css";
import { Header } from "../../components";
import { validateField } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../../store/slices/appSlice";
import { PROFILE_ICON } from "../../utils/constants";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: null,
    email: null,
    password: null,
  });
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setFormData({ fullName: "", email: "", password: "" });
    setErrors({ fullName: null, email: null, password: null });
  };
   const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));

  // Run validation live as user types
  const error = validateField(name, value, isSignInForm);
  setErrors((prev) => ({ ...prev, [name]: error }));
};
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value, isSignInForm);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };
  const isFormValid =
  (isSignInForm
    ? formData.email && !errors.email && formData.password && !errors.password
    : formData.fullName && !errors.fullName &&
      formData.email && !errors.email &&
      formData.password && !errors.password
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate all fields at once on submit
    const newErrors = {
      fullName: validateField("fullName", formData.fullName, isSignInForm),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== null)) {
      console.log("Form has errors:", newErrors);
      return;
    }
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: formData.fullName,
            photoURL: PROFILE_ICON,
          })
            .then(() => {
              console.log(auth.currentUser);
              const {uid , email , displayName , photoURL} = auth.currentUser;
              dispatch(addUser({
                uid : uid,
                email: email,
                displayName : displayName,
                photoURL : photoURL,
              }));
            })
            .catch((error) => {
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    console.log("Form submitted successfully!", formData);
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.signUpForm}>
          <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          {!isSignInForm && (
           <>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.inputField} ${errors.fullName ? styles.inputError : ""}`}
            />
            {errors.fullName && <p className={styles.errorMessage}>{errors.fullName}</p>}
          </>
          )}
         <input
          type="text"
          name="email"
          placeholder="Email or Mobile number"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.inputField} ${errors.email ? styles.inputError : ""}`}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
          <input
          type="text"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.inputField} ${errors.password ? styles.inputError : ""}`}
        />
        {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
          <button type="submit" disabled={!isFormValid} className={styles.signInOrSignUpBtn}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
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
    </>
  );
};

export default LoginPage;
