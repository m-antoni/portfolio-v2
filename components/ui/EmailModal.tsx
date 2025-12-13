"use client";

import { useState, useEffect } from "react";
import "./email-modal.css";
import { toast } from "react-toastify";

type EmailModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    subject: false,
    body: false,
  });

  // Sync modal open
  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      clearForm();
    }, 200);
  };

  const clearForm = () => {
    setEmail("");
    setSubject("");
    setBody("");
    setErrors({ email: false, subject: false, body: false });
  };

  const handleSubmit = async () => {
    // Validate fields
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      email: email.trim() === "" || !emailRegex.test(email), // must not be empty & valid format
      subject: subject.trim() === "",
      body: body.trim() === "",
    };
    setErrors(newErrors);

    // If any field is empty, show toast and stop
    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, body }),
      });

      const data = await res.json();

      // Limit requests to 3 to prevent form spam
      if (res.status === 429) {
        handleClose();
        toast.error(`${data.message}`, {
          position: "top-center",
          style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 500,
          },
        });
      }

      // Success request
      if (res.ok) {
        toast.success(`${data.message}`, {
          position: "top-center",
          style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 500,
          },
        });
        handleClose();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send email", { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={`nm-backdrop ${isVisible ? "show" : "hide"}`}
      onClick={handleClose}
    >
      <div className="nm-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="nm-title">Contact Form</h2>

        <input
          className={`nm-input ${errors.email ? "error" : ""}`}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`nm-input ${errors.subject ? "error" : ""}`}
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className={`nm-textarea ${errors.body ? "error" : ""}`}
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <div className="nm-actions">
          <button
            className="nm-btn-light"
            onClick={handleClose}
            disabled={loading}
          >
            Close
          </button>
          <button
            className="nm-btn-primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
