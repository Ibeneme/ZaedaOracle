import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCheckCircle } from "react-icons/fa";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm } from "../../Redux/Admin/contactUs";
import { RootState, AppDispatch } from "../../Redux/store";
import Loader from "../Loader/Loader"; // Import your loader component

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { status, error } = useSelector((state: RootState) => state.contact);
  console.log(isClosing);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string(),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      dispatch(submitContactForm(values))
        .then((response) => {
          console.log(response, "response");
          if (
            response.payload.message === "Contact form submitted successfully!"
          ) {
            setShowSuccessModal(true);
            resetForm();
            //closeModal();
            setIsLoading(false);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Error submitting form:", error);
        });
    },
  });

  const closeModal = () => {
    setIsLoading(false);
    setIsClosing(true);
    onClose();
  };

  return (
    <>
      {/* Main Contact Form Modal */}
      <BootstrapModal show onHide={closeModal}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>Contact Us</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          <p>
            Have questions or need legal assistance? Fill out our contact form
            and our team will get back to you promptly.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <br />{" "}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                placeholder="name"
                type="text"
                className="form-control"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
            <br />{" "}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                placeholder="email"
                type="email"
                className="form-control"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <br />{" "}
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                id="subject"
                placeholder="subject"
                type="text"
                className="form-control"
                {...formik.getFieldProps("subject")}
              />
            </div>
            <br />{" "}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                placeholder="message"
                className="form-control"
                {...formik.getFieldProps("message")}
                style={{ height: 120 }}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-danger">{formik.errors.message}</div>
              ) : null}
            </div>
            {isLoading === true ? (
              <Loader />
            ) : (
              <Button
                type="submit"
                variant="primary"
                disabled={status === "loading"}
              >
                Submit
              </Button>
            )}
            {status === "failed" && (
              <div className="text-danger mt-2">{error}</div>
            )}
          </form>
        </BootstrapModal.Body>
      </BootstrapModal>

      {/* Success Message Modal */}
      <BootstrapModal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
      >
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>Success</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body className="text-center">
          <FaCheckCircle size={60} color="green" />
          <h5 className="mt-3">Message sent successfully!</h5>
          <Button variant="success" onClick={closeModal}>
            Close
          </Button>
        </BootstrapModal.Body>
      </BootstrapModal>
    </>
  );
};

export default Modal;
