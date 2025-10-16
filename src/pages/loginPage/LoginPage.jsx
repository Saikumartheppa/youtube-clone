import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Header } from "../../components";
import { validateField } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../../store/slices/appSlice";
import { PROFILE_ICON } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);
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

    const error = validateField(name, value, isSignInForm);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value, isSignInForm);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid =
    isSignInForm
      ? formData.email && !errors.email && formData.password && !errors.password
      : formData.fullName && !errors.fullName &&
        formData.email && !errors.email &&
        formData.password && !errors.password;

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

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
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: formData.fullName,
            photoURL: PROFILE_ICON,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate("/");
          }).catch((error) => {
            setErrors((prev) => ({ ...prev, email: error.message }));
          });
        }).catch((error) => {
          setErrors((prev) => ({ ...prev, email: error.message }));
        });
    } else {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(() => {
          navigate("/");
        }).catch((error) => {
          setErrors((prev) => ({ ...prev, password: error.message }));
        });
    }
    console.log("Form submitted successfully!", formData);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          {!isSignInForm && (
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${styles.input} ${errors.fullName ? styles.errorInput : ""}`}
              />
              {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.input} ${errors.password ? styles.errorInput : ""}`}
          />
          {errors.password && <p className={styles.errorText}>{errors.password}</p>}
          <button type="submit" disabled={!isFormValid} className={styles.submitBtn}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className={styles.toggleText}>
            {isSignInForm ? "Don't have an account?" : "Already have an account?"}
            <span onClick={toggleSignInForm} className={styles.toggleLink}>
              {isSignInForm ? " Sign Up" : " Sign In"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
