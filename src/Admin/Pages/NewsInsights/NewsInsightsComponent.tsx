import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../Redux/store";
import {
  deleteNewsInsight,
  fetchNewsInsights,
  updateNewsInsight,
  createNewsInsight,
} from "../../../Redux/Admin/newsInsightsSlice";
import { Modal, Button, Form } from "react-bootstrap";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import styles from "./NewsInsights.module.css"; // Make sure to update the styles import path
import Loader from "../../../Components/Loader/Loader";

const NewsInsightsComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { insights, status, error } = useSelector(
    (state: RootState) => state.newsInsights
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedImage, setEditedImage] = useState<File | null>(null);
  const [editedImagePreview, setEditedImagePreview] = useState<string | null>(
    null
  );
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // State for loading
  const [deleteLoading, setDeleteLoading] = useState(false); // State for delete loading
  const [updateLoading, setUpdateLoading] = useState(false); // State for update loading

  useEffect(() => {
    dispatch(fetchNewsInsights())
      .then((response) => {
        console.log("News insights fetched successfully:", response);
      })
      .catch((err) => {
        console.error("Failed to fetch news insights:", err);
      });
  }, [dispatch]);

  const handleDelete = (insight: any) => {
    setSelectedInsight(insight);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedInsight) {
      setDeleteLoading(true); // Show loader
      dispatch(deleteNewsInsight(selectedInsight._id))
        .then(() => {
          setShowDeleteModal(false); // Hide modal on success
          setDeleteLoading(false); // Hide loader
        })
        .catch((error) => {
          console.error("Failed to delete news insight:", error);
          setDeleteLoading(false); // Hide loader on error
        });
    }
  };

  const handleEdit = (insight: any) => {
    setEditing(true);
    setSelectedInsight(insight);
    setEditedTitle(insight.title);
    setEditedDescription(insight.content);
    setEditedImage(null);
    setEditedImagePreview(insight.image);
  };

  const handleSave = () => {
    if (selectedInsight) {
      setUpdateLoading(true); // Show loader
      const formData = new FormData();
      formData.append("title", editedTitle);
      formData.append("description", editedDescription);
      if (editedImage) formData.append("image", editedImage);

      const imageFile = formData.get("image");
      dispatch(
        updateNewsInsight({
          _id: selectedInsight._id,
          title: editedTitle,
          content: editedDescription,
          image: imageFile instanceof File ? imageFile : undefined, // Ensure imageFile is of type File
        })
      )
        .then(() => {
          setEditing(false);
          setUpdateLoading(false); // Hide loader
        })
        .catch((error) => {
          console.error("Failed to update news insight:", error);
          setUpdateLoading(false); // Hide loader on error
        });
    }
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isNew = false
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageURL = reader.result as string;
        if (isNew) {
          setNewImage(file);
          setNewImagePreview(imageURL);
        } else {
          setEditedImage(file);
          setEditedImagePreview(imageURL);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleView = (insight: any) => {
    setSelectedInsight(insight);
    setShowViewModal(true);
  };
  const handleCreate = () => {
    if (newTitle && newDescription && newImage) {
      setLoading(true); // Show loader

      // Generate an excerpt (e.g., first 100 characters of the description)
      const excerpt = newDescription.substring(0, 100);

      dispatch(
        createNewsInsight({
          title: newTitle,
          content: newDescription,
          excerpt: excerpt, // Include the excerpt here
          image: newImage,
        })
      )
        .then(() => {
          setShowCreateModal(false);
          setNewTitle("");
          setNewDescription("");
          setNewImage(null);
          setNewImagePreview(null); // Reset preview URL
          setLoading(false); // Hide loader
        })
        .catch((error) => {
          console.error("Failed to create news insight:", error);
          setLoading(false); // Hide loader on error
        });
    } else {
      console.error("Please fill all fields and select an image.");
    }
  };

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: 90, fontWeight: 900 }}>
        News Insights
      </h2>

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Button variant="primary" onClick={() => setShowCreateModal(true)}>
          Create News Insight
        </Button>
      </div>

      <div className={styles.container}>
        {Array.isArray(insights) && insights.length > 0 ? (
          insights.map((insight) => (
            <div key={insight._id} className={styles.item}>
              <img
                src={insight.image}
                alt={insight.title}
                className={styles.image}
              />
              <div className={styles.icons}>
                <div className={styles.iconsdiv}>
                  <FaEye
                    className={`${styles.icon} ${styles.viewbutton}`}
                    onClick={() => handleView(insight)}
                  />
                </div>
                <div className={styles.iconsdiv}>
                  <FaEdit
                    className={`${styles.icon} ${styles.editicon}`}
                    onClick={() => handleEdit(insight)}
                  />
                </div>
                <div className={styles.iconsdivdelete}>
                  <FaTrash
                    className={`${styles.icon} ${styles.deleteicon}`}
                    onClick={() => handleDelete(insight)}
                  />
                </div>
              </div>
              <div className={styles.title}>{insight.title}</div>
              <div className={styles.description}>
                {insight.content.length > 180
                  ? `${insight.content.substring(0, 180)}...`
                  : insight.content}
              </div>
            </div>
          ))
        ) : (
          <div>No insights available</div>
        )}

        {/* Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {deleteLoading ? (
              <Loader /> // Show loader
            ) : (
              <>
                <p>Are you sure you want to delete the insight titled:</p>
                <h5>{selectedInsight?.title}</h5>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
              disabled={deleteLoading} // Disable button while loading
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={confirmDelete}
              disabled={deleteLoading} // Disable button while loading
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

        {/* View Insight Modal */}
        <Modal
          show={showViewModal}
          onHide={() => setShowViewModal(false)}
          dialogClassName={styles.viewModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedInsight?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedInsight?.image}
              alt={selectedInsight?.title}
              className={styles.imagePreview}
            />
            <p>{selectedInsight?.content}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowViewModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Create News Insight Modal */}
        <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Create News Insight</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {loading ? (
              <Loader /> // Show loader
            ) : (
              <Form>
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </Form.Group>
                <br />

                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                  />
                </Form.Group>
                <br />

                <Form.Group controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e as any, true)}
                  />
                  {newImagePreview && (
                    <img
                      src={newImagePreview}
                      alt="Preview"
                      className={styles.imagePreview}
                    />
                  )}
                </Form.Group>
                <br />
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowCreateModal(false)}
              disabled={loading} // Disable button while loading
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={handleCreate}
              disabled={loading} // Disable button while loading
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Edit News Insight Modal */}
        <Modal show={editing} onHide={() => setEditing(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit News Insight</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {updateLoading ? (
              <Loader /> // Show loader
            ) : (
              <Form>
                <Form.Group controlId="formEditTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                </Form.Group>
                <br />

                <Form.Group controlId="formEditDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                </Form.Group>
                <br />

                <Form.Group controlId="formEditImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e as any, false)}
                  />
                  {editedImagePreview && (
                    <img
                      src={editedImagePreview}
                      alt="Preview"
                      className={styles.imagePreview}
                    />
                  )}
                </Form.Group>
                <br />
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setEditing(false)}
              disabled={updateLoading} // Disable button while loading
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={handleSave}
              disabled={updateLoading} // Disable button while loading
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div style={{ marginTop: 120 }}></div>
    </div>
  );
};

export default NewsInsightsComponent;
