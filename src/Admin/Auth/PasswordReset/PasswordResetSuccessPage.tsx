import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./PasswordResetSuccessPage.module.css";

const PasswordResetSuccessPage: React.FC = () => {
  const [show, setShow] = React.useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/admin");
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ textAlign: "center" }}>
          Password Reset Successful
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <FaCheckCircle className={styles.successIcon} />
        <p className={styles.successMessage}>
          Your password has been reset successfully!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleClose}
          className={styles.okButton}
          style={{
            backgroundColor: "#ffaa00",
            borderColor: "#ffaa00",
            padding: "14px 24px",
            width: '100%'
          }}
        >
          Proceed to Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PasswordResetSuccessPage;
