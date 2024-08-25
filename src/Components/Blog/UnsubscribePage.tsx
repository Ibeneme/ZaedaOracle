import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import Loader from "../Loader/Loader";
import { BASE_URL } from "../../Redux/baseUrl";

const UnsubscribePage: React.FC = () => {
  const navigate = useNavigate();
  const { email } = useParams<{ email: string }>();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConfirm = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/newsletter/unsubscribe`,
        { email }
      );

      if (response.data.message === "Email unsubscribed successfully") {
        setShowModal(true);
      } else {
        setError(response.data.message || "An unexpected error occurred");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.error ||
            "An error occurred while processing your request"
        );
      } else if (err instanceof Error) {
        // For other errors that might be thrown
        setError(err.message || "An unknown error occurred");
      } else {
        // Fallback for unknown types of errors
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "48px 24px",
          textAlign: "center",
          borderRadius: "8px",
          maxWidth: 600,
        }}
      >
        <h3 style={{ fontWeight: 800 }}>
          Confirm you want to unsubscribe from our newsletter
        </h3>
        <p>
          By unsubscribing, you will no longer receive updates on our latest
          uploads and news insights.
        </p>

        {error && <p style={{ color: "red", marginTop: "16px" }}>{error}</p>}

        <div style={{ marginTop: "48px" }}>
          {loading ? (
            <Loader /> // Replace this with your actual loader component
          ) : (
            <>
              <Button
                variant="danger"
                onClick={handleConfirm}
                style={{ marginRight: "10px" }}
              >
                Confirm
              </Button>
              <Button variant="secondary" onClick={() => navigate("/")}>
                Cancel
              </Button>
            </>
          )}
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Unsubscribed Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The email <strong>{email}</strong> has been successfully unsubscribed
          from the newsletter.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Go to Home
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UnsubscribePage;
