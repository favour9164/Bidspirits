import React, { useState, useEffect } from "react";
import "./welcomeModal.css"; 

export default function WelcomeModal({ onSubmit }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    setError("");
    onSubmit(name); 
  };

  return (
    <div className="welcome-overlay">
      <div className="welcome-modal">
        <h3>Welcome to BidSpirit</h3>
        <p>
          Discover timeless art, rare antiques, and exclusive collectibles from trusted sellers 
          around the world. Before you explore, we’d love to know your name.
        </p>

        <input
          type="text"
          placeholder="Please enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button onClick={handleSubmit}>Enter now</button>
      </div>
    </div>
  );
}
