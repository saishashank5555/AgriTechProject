import React from "react";

const About = () => {
  const team = [
    {
      name: "Ravi Kumar",
      role: "Founder & CEO",
      image: "https://i.postimg.cc/g2cwQwcS/avatar1.png",
    },
    {
      name: "Priya Sharma",
      role: "Agriculture Expert",
      image: "https://i.postimg.cc/mD4zGNyM/avatar2.png",
    },
    {
      name: "Arun Verma",
      role: "Supply Chain Manager",
      image: "https://i.postimg.cc/3xk6Gtxz/avatar3.png",
    },
    {
      name: "Sneha Patil",
      role: "Customer Success Lead",
      image: "https://i.postimg.cc/fRYp57QZ/avatar4.png",
    },
  ];

  return (
    <div className="about-wrap">

      <div className="about-header">
        <h1>About Us</h1>
        <p>Your trusted partner in modern agriculture</p>
      </div>

      <div className="about-content">
        <p>
          We are an AgriTech driven marketplace focused on providing farmers with
          the highest quality seeds, fertilizers, pesticides, tools and farming
          equipment at fair and transparent prices. Our goal is to empower 
          farmers with reliable products, trusted guidance, and seamless last-mile delivery.
        </p>

        <p>
          Agriculture is the backbone of our nation — and we believe farmers deserve
          both respect and access to the best resources. We work with verified 
          manufacturers, certified suppliers, agronomists, and high-trust distributors 
          to ensure genuine, result-driven products reach you on time.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To make quality agri-products accessible, affordable, and reliable for every
          farmer — helping them increase productivity, crop yield, and profit margins.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>✔ High-quality seeds and fertilizers</li>
          <li>✔ Trusted and certified farming products</li>
          <li>✔ Farm tools, machinery & accessories</li>
          <li>✔ 24/7 customer support in your language</li>
          <li>✔ Fast and secure delivery across regions</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Our Promise</h2>
        <p>
          Transparent pricing. Genuine brands. Expert support.  
          Because farmers deserve the best — always.
        </p>
      </div>

      {/* ✅ Meet Our Team Section */}
      <div className="about-section team-section">
        <h2>Meet Our Team</h2>

        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-wrap {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
          line-height: 1.7;
          font-family: sans-serif;
        }

        .about-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .about-header h1 {
          font-size: 32px;
          font-weight: 700;
          color: #2a7a0e;
          margin-bottom: 6px;
        }

        .about-header p {
          font-size: 16px;
          color: #555;
        }

        .about-content p {
          font-size: 16px;
          color: #333;
          margin-bottom: 18px;
          text-align: justify;
        }

        .about-section {
          margin-top: 28px;
        }

        .about-section h2 {
          font-size: 22px;
          color: #2a7a0e;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .about-section ul li {
          margin-bottom: 6px;
          font-size: 15px;
        }

        /* 🧑‍🌾 Team Section Styles */
        .team-section {
          margin-top: 40px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 22px;
          margin-top: 16px;
        }

        .team-card {
          text-align: center;
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .team-card img {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          margin-bottom: 12px;
          object-fit: cover;
        }

        .team-card h3 {
          margin-bottom: 4px;
          font-size: 18px;
          color: #2a7a0e;
          font-weight: bold;
        }

        .team-card p {
          font-size: 14px;
          color: #444;
          margin: 0;
        }
      `}</style>

    </div>
  );
};

export default About;