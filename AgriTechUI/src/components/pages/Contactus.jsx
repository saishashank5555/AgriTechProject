import React, { useState } from "react";

const Contactus = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted ✅");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-wrapper">

      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-sub">We are here to help and answer your questions</p>

      <div className="contact-container">

        {/* Left Info Section */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to us for support, product inquiries or partnership opportunities.</p>

          <div className="info-row">
            <strong>📍 Address:</strong>
            <span>Hyderabad, Telangana, India</span>
          </div>

          <div className="info-row">
            <strong>📞 Phone:</strong>
            <span>+91 98765 43210</span>
          </div>

          <div className="info-row">
            <strong>✉️ Email:</strong>
            <span>support@agritechfarm.com</span>
          </div>

          <div className="info-row">
            <strong>🕒 Working Hours:</strong>
            <span>Mon - Sat : 9:00 AM - 7:00 PM</span>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>

      <style>{`
        .contact-wrapper {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
          font-family: sans-serif;
        }

        .contact-title {
          text-align: center;
          color: #2a7a0e;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .contact-sub {
          text-align: center;
          color: #555;
          margin-bottom: 35px;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 35px;
        }

        .contact-info h2 {
          font-size: 22px;
          color: #2a7a0e;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .contact-info p {
          color: #444;
          margin-bottom: 18px;
        }

        .info-row {
          margin-bottom: 12px;
          font-size: 15px;
        }

        .info-row strong {
          display: block;
          margin-bottom: 4px;
          color: #2a7a0e;
        }

        .contact-form {
          background: #fff;
          padding: 24px;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 14px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 15px;
          outline: none;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #2a7a0e;
        }

        .contact-form button {
          width: 100%;
          padding: 12px;
          background: #2a7a0e;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: .3s;
        }

        .contact-form button:hover {
          opacity: 0.85;
        }

        @media(max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contactus;
