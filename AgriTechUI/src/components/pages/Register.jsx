import React, { useState } from "react";
import { registerUser } from "../api/authApi"; 
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
    role: "USER",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  //  Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  Handle registration submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const response = await registerUser(formData);
      alert(response.message || "User registered successfully!");
      navigate("/login");
    } catch (error) {
      setErrorMsg(error.message || "Registration failed! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account 🌿</h2>
        <p>Join AgriTechPro and grow your future</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Full Name"
            value={formData.userName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Full Address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
            <option value="VENDOR">VENDOR</option>
          </select>

          {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="signup-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      {/*  Internal CSS */}
      <style>{`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #e8f5e9, #f1f8e9);
          padding: 1rem;
        }

        .register-card {
          background: #fff;
          padding: 2.5rem 2rem;
          border-radius: 15px;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 450px;
          text-align: center;
        }

        h2 {
          color: #2a7a0e;
          margin-bottom: 0.5rem;
        }

        p {
          color: #555;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }

        .register-form input,
        .register-form textarea,
        .register-form select {
          width: 100%;
          padding: 0.9rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          transition: 0.3s;
        }

        .register-form input:focus,
        .register-form textarea:focus,
        .register-form select:focus {
          border-color: #2a7a0e;
          box-shadow: 0 0 5px rgba(42, 122, 14, 0.2);
        }

        .register-form textarea {
          resize: none;
        }

        .register-btn {
          background: #2a7a0e;
          color: #fff;
          padding: 0.9rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
          width: 100%;
        }

        .register-btn:hover {
          background: #256d0c;
          transform: translateY(-2px);
        }

        .signup-text {
          margin-top: 1.5rem;
          color: #555;
        }

        .signup-text a {
          color: #2a7a0e;
          text-decoration: none;
          font-weight: 600;
        }

        .signup-text a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .register-card {
            padding: 2rem 1.5rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          .register-btn {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .register-card {
            padding: 1.5rem 1.2rem;
          }
          h2 {
            font-size: 1.3rem;
          }
          .register-btn {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
