import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./ContactUs.css"; // Import your CSS file here
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs: React.FC = () => {
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
      console.log(values);
    },
  });

  return (
    <section className="contact-us-section">
      <div className="contact-info">
        <h2 className="contact-info-h2">Contact Us</h2>
        <div className="contact-item">
          <div className="contact-item-icon">
            <FaEnvelope size={12} className="contact-icon" />{" "}
          </div>
          <span>info@antigravitygroup.ng</span>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <FaPhone size={12} className="contact-icon" />
          </div>
          <span>+234 704 8000 803</span>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <FaPhone size={12} className="contact-icon" />{" "}
          </div>
          <span>+234 704 8000 804</span>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="Name"
              type="text"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Email"
              type="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              placeholder="Subject"
              type="text"
              {...formik.getFieldProps("subject")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
