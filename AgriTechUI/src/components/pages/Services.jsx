import React from "react";

const Services = () => {
  const serviceData = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Quick delivery to your doorstep"
    },
    {
      icon: "🛡️",
      title: "Trusted Quality",
      desc: "Verified & lab-tested products"
    },
    {
      icon: "💬",
      title: "24/7 Support",
      desc: "We are always here to help"
    },
    {
      icon: "💵",
      title: "Easy Returns",
      desc: "Hassle-free replacement guarantee"
    }
  ];

  return (
    <div className="services-wrapper">
      <div className="services-container">
        {serviceData.map((item, index) => (
          <div className="service-box" key={index}>
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        .services-wrapper {
          max-width: 1300px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }

        .service-box {
          background: #ffffff;
          border-radius: 12px;
          padding: 22px;
          text-align: center;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          transition: transform .3s ease, box-shadow .3s ease;
          border: 1px solid #d6e8d3;
          cursor: default;
        }

        .service-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }

        .service-icon {
          font-size: 40px;
          margin-bottom: 8px;
        }

        .service-box h3 {
          font-size: 18px;
          font-weight: 700;
          color: #2a7a0e;
          margin-bottom: 6px;
        }

        .service-box p {
          font-size: 14px;
          color: #555;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Services;
