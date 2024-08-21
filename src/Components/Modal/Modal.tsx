import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Modal.module.css";
import { FaTimes } from "react-icons/fa";

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

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
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
      closeModal();
    },
  });

  const closeModal = () => {
    setIsClosing(true);
    // Wait for the animation to finish before calling onClose
    const modalContent = document.querySelector(`.${styles.modalContent}`);
    modalContent?.addEventListener(
      "animationend",
      () => {
        onClose();
      },
      { once: true }
    );
  };

  return (
    <div className={styles.modalOverlay}>
      <div
        className={`${styles.modalContent} ${isClosing ? styles.slideOut : ""}`}
      >
        <button className={styles.closeButton} onClick={closeModal}>
          <FaTimes />
        </button>
        <br /> 
        <h2>Contact Us</h2>
        <p
          style={{
            color: "#666",
            fontSize: 14,
            marginTop: -16,
            marginBottom: 24,
          }}
        >
          Have questions or need legal assistance? Fill out our contact form and
          our team will get back to you promptly.
        </p>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="name"
              type="text"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="email"
              type="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              placeholder="subject"
              type="text"
              {...formik.getFieldProps("subject")}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="message"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className={styles.error}>{formik.errors.message}</div>
            ) : null}
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
