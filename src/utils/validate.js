export const validateField = (name, value, isSignInForm = false) => {
  switch (name) {
    case "fullName":
      if (isSignInForm) return null; // skip in sign-in
      if (!value.trim()) return "Full name is required.";
      if (value.trim().length < 3) return "Full name must be at least 3 characters.";
      return null;

    case "email":
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;
      if (!value.trim()) return "Email cannot be empty.";
      if (!emailRegex.test(value)) return "Please enter a valid email address.";
      return null;

    case "password":
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (!value.trim()) return "Password cannot be empty.";
      if (!passwordRegex.test(value)) return "Please enter a valid password.";
      return null;

    default:
      return null;
  }
};