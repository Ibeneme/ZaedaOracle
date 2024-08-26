import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Modal, Button, Spinner } from "react-bootstrap"; // Import Spinner for the loader
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.css";
import { AppDispatch, RootState } from "../../Redux/store";
import { login, sendOtp } from "../../Redux/Admin/Admin"; // Assuming sendOtp is imported from the same module

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [modalEmail, setModalEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [resetEmailErrors, setResetEmailErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for handling submission loader
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [errorLogin, setErrorLogin] = useState("");
  const { loading, error } = useSelector((state: RootState) => state.admin);

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    setErrorLogin("");
    setIsSubmitting(true); // Start loader

    try {
      const response = await dispatch(login(values)).unwrap();
      console.log(response, "response");
      localStorage.setItem("admin_access_token", response.token);
      navigate("/news-insights-admin");
    } catch (err: any) {
      setErrorLogin(err?.message);
      console.error(err);
    } finally {
      setIsSubmitting(false); // Stop loader
    }
  };

  const handleModalSubmit = () => {
    setResetEmailErrors(null);
    setIsSubmitting(true); // Start loader

    const emailValidationSchema = Yup.string()
      .email("Invalid email address")
      .required("Email is required");

    emailValidationSchema
      .validate(modalEmail)
      .then(() => {
        dispatch(sendOtp({ email: modalEmail }))
          .unwrap()
          .then((response) => {
            console.log(response, "OTP sent successfully");
            if (response.message === "OTP sent to your email") {
              navigate("/reset-password", { state: { email: modalEmail } });
              setShowModal(false);
            }
          })
          .catch((err) => {
            setResetEmailErrors(
              err?.message || "Failed to send OTP. Please try again."
            );
          })
          .finally(() => {
            setIsSubmitting(false); // Stop loader
          });
      })
      .catch((err) => {
        setResetEmailErrors(err.message);
        setIsSubmitting(false); // Stop loader in case of validation error
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#C4D92E",
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
                    disabled={isSubmitting} // Disable input when submitting
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
                    disabled={isSubmitting} // Disable input when submitting
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.togglePassword}
                    disabled={isSubmitting} // Disable button when submitting
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
                disabled={loading || isSubmitting} // Disable submit button when submitting
              >
                {loading || isSubmitting ? "Logging in..." : "Login"}
              </button>
              {(error || errorLogin) && (
                <div
                  style={{
                    backgroundColor: "#ff000024",
                    fontSize: 16,
                    padding: 16,
                    marginTop: 24,
                    fontWeight: 900,
                  }}
                  className={styles.errorMessage}
                >
                  {error && typeof error === "string" && error}
                  {errorLogin && typeof errorLogin === "string" && errorLogin}
                </div>
              )}
            </Form>
          )}
        </Formik>
        <br />
        <Button
          variant="link"
          onClick={() => setShowModal(true)}
          style={{ color: "#000" }}
          disabled={isSubmitting} // Disable Forgot Password button when submitting
        >
          Forgot Password?
        </Button>
        {loading && (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
          </div>
        )}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.formGroup}>
            <label htmlFor="resetEmail">Email:</label>
            <input
              id="resetEmail"
              type="email"
              className={styles.formInput}
              placeholder="Enter your email"
              value={modalEmail}
              onChange={(e) => setModalEmail(e.target.value)}
              disabled={isSubmitting} // Disable input when submitting
            />
            {resetEmailErrors && (
              <div className={styles.errorMessage}>{resetEmailErrors}</div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
            disabled={isSubmitting} // Disable Cancel button when submitting
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            style={{
              backgroundColor: "#C4D92E",
              borderColor: "#C4D92E",
              padding: "14px 24px",
            }}
            onClick={handleModalSubmit}
            disabled={!modalEmail || isSubmitting} // Disable Submit button when submitting
          >
            {isSubmitting ? (
              <Spinner
                animation="border"
                role="status"
                size="sm"
                aria-hidden="true"
                as="span"
              />
            ) : (
              "Submit"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginPage;
