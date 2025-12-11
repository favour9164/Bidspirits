import { useState } from "react";
import "./feedbackForm.css";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    let temp = {};

    if (!formData.name.trim()) temp.name = "Name is required";
    if (!formData.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Enter a valid email";

    if (!formData.message.trim()) temp.message = "Message cannot be empty";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setShowModal(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <>
        <div className="container">
        <form className="feedback-form" onSubmit={handleSubmit}>
            <h2 className="form-title">We Value Your Feedback</h2>

            <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
                }
            />
            {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
            <label>Email</label>
            <input
                type="text"
                value={formData.email}
                onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
                }
            />
            {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
            <label>Message</label>
            <textarea
                rows="4"
                value={formData.message}
                onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
                }
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
            </div>

            <button className="submit-btn" type="submit">
            Submit Feedback
            </button>
        </form>

        {showModal && (
            <div className="f-modal-overlay" onClick={() => setShowModal(false)}>
            <div
                className="f-modal-box"
                onClick={(e) => e.stopPropagation()}
            >
                <h3>Thank You! 🎉</h3>
                <p>Your feedback has been submitted successfully.</p>
                <button
                className="close-btn"
                onClick={() => setShowModal(false)}
                >
                Close
                </button>
            </div>
            </div>
        )}
        </div>
    </>
  );
}
