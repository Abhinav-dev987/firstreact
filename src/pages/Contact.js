import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting me! I'll get back to you soon.");
    // Here, you can integrate an API to send form data to your server or email.
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f4f4f4",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>Contact Me</h1>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "20px" }}>
          Feel free to reach out for collaborations, inquiries, or just to say
          hi!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name" style={{ display: "block", color: "#333" }}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block", color: "#333" }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="message"
              style={{ display: "block", color: "#333" }}
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                height: "100px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>

        {/* Contact Information */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <h3 style={{ color: "#333" }}>Contact Details</h3>
          <p style={{ color: "#555" }}>Email: tanuj@example.com</p>
          <p style={{ color: "#555" }}>Phone: +123 456 7890</p>
          <p style={{ color: "#555" }}>Location: Your City, Your Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
