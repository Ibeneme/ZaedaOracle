import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./Login.module.css";
import { LoginFormValues } from "./Login.types";
// import { adminLogin } from "../../Redux/Admin/Admin";
// import { ThunkDispatch } from "@reduxjs/toolkit";
// import { RootState } from "../../Redux/store";
// import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorResponse, setError] = useState<string | []>("");
  //const navigate = useNavigate();
  //const dispatch = useDispatch<ThunkDispatch<RootState, undefined, any>>();

  // Check for token on component mount
  // useEffect(() => {
  //   const token = localStorage.getItem('adminToken');
  //   if (token) {
  //     navigate('/users'); // Redirect to the Users page if token exists
  //   }
  // }, [navigate]);

  const initialValues: LoginFormValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Must include a lowercase letter")
      .matches(/[0-9]/, "Must include a number")
      .required("Required"),
  });

  const handleSubmit = (values: LoginFormValues) => {
    setError("");
    setLoading(true);
    console.log(values); // Start loader
    // dispatch(adminLogin(values))
    //   .unwrap()
    //   .then((result) => {
    //     setLoading(false); // Stop loader
    //     if (result.message === "Invalid credentials") {
    //       setError("Invalid credentials");
    //     } else if (result.token) {
    //       localStorage.setItem('adminToken', result.token); // Store the token in localStorage
    //       navigate('/users'); ; // Redirect to the Users page upon successful login
    //     } else {
    //       console.error("Unexpected result:", result);
    //     }
    //   })
    //   .catch((error: any) => {
    //     setLoading(false); // Stop loader
    //     const errorMessage = error.message || "An error occurred";
    //     console.error("Login failed:", errorMessage);
    //     setError(errorMessage);
    //   });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffaa00",
      }}
    >
      <div className={styles.loginContainer}>
        <h1 className={styles.loginContainerH1}>Admin Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={styles.loginForm}>
              <br />
              <div
                className={`${styles.formGroup} ${
                  errors.email && touched.email ? styles.error : ""
                }`}
              >
                <label htmlFor="email">Email:</label>
                <div className={styles.passwordContainer}>
                  <Field
                    name="email"
                    type="email"
                    className={styles.formInput}
                    placeholder="Enter an email address"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
              <br />
              <div
                className={`${styles.formGroup} ${
                  errors.password && touched.password ? styles.error : ""
                }`}
              >
                <label htmlFor="password">Password:</label>
                <div className={styles.passwordContainer}>
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className={styles.formInput}
                    placeholder="Enter a Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.togglePassword}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.errorMessage}
                />
                <br />
                <div className={styles.passwordHint}>
                  Password must be at least 8 characters long, include uppercase
                  and lowercase letters, a number, and a special character.
                </div>
              </div>
              <br />
              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              {errorResponse ? (
                <div
                  style={{
                    backgroundColor: errorResponse
                      ? "#ff000024"
                      : "transparent",
                    fontSize: 16,
                    padding: 16,
                    marginTop: 24,
                    fontWeight: 900,
                  }}
                  className={styles.errorMessage}
                >
                  {errorResponse}
                </div>
              ) : null}
            </Form>
          )}
        </Formik>
        <br />
        {loading && (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
