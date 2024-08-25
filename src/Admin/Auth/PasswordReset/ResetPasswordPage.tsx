import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Spinner } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styles from "./ResetPasswordPage.module.css";
import { changePassword } from "../../../Redux/Admin/Admin";
import { AppDispatch } from "../../../Redux/store"; // Import the type for your app's dispatch

const ResetPasswordPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // Use the AppDispatch type here
  const email = location.state?.email || "";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitErrors, setSubmitErrors] = useState<string>(""); // State for submission errors

  const validationSchema = Yup.object({
    otp: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Must include a lowercase letter")
      .matches(/[0-9]/, "Must include a number")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = async (values: {
    otp: string;
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true); // Show loader
    const { otp, password } = values;
    const newPassword = password;

    try {
      // Dispatch the action and log the response
      const response = await dispatch(
        changePassword({ email, otp, newPassword }) as any
      ); // Type assertion to any

      console.log("Password reset response:", response); // Log the response

      // Check response for errors and set submitErrors state
      if (response?.payload?.message === "Invalid OTP") {
        setSubmitErrors("Invalid OTP. Please check the OTP and try again.");
      } else if (
        response?.payload?.message === "Password changed successfully"
      ) {
        // Clear errors and navigate on successful response
        setSubmitErrors("");
        navigate("/password-reset-success");
      }
    } catch (error) {
      // Log the error details and set submitErrors state
      console.error("Password reset failed:", error);
      setSubmitErrors("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className={styles.resetPageContainer}>
      <div className={styles.container}>
        <h1
          style={{
            fontFamily: "var(--fontFamily)",
            fontSize: 32,
            textAlign: "left",
            fontWeight: "Bold",
          }}
        >
          Reset Password
        </h1>
        <Formik
          initialValues={{ otp: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className={styles.formGroup}>
                <label htmlFor="otp">OTP:</label>
                <Field
                  name="otp"
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP"
                  style={{ padding: 14 }}
                  disabled={loading}
                />
                <ErrorMessage
                  name="otp"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">New Password:</label>
                <div className={styles.passwordWrapper}>
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter new password"
                    style={{ padding: 14 }}
                    disabled={loading}
                  />
                  <span
                    className={styles.passwordToggleIcon}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <div className={styles.passwordWrapper}>
                  <Field
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Confirm new password"
                    style={{ padding: 14 }}
                    disabled={loading}
                  />
                  <span
                    className={styles.passwordToggleIcon}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-danger"
                />
              </div>
              {/* Display submitErrors message */}
              {submitErrors && (
                <div
                  className="text-danger"
                  style={{
                    marginBottom: 24,
                    padding: "4px 16px",
                    fontFamily: "900",
                    textAlign: "center",
                  }}
                >
                  {submitErrors}
                </div>
              )}
              <div className={styles.formGroupBtndiv}>
                <Button
                  style={{
                    backgroundColor: "#ffaa00",
                    borderColor: "#ffaa00",
                    padding: "14px 24px",
                  }}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Reset Password"
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
