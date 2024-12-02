import React from "react";

const Services = () => {
  const serviceList = [
    {
      title: "React Native Development",
      description:
        "Expertise in building cross-platform mobile applications with seamless performance and user-friendly designs.",
      icon: "📱",
    },
    {
      title: "Freelancing",
      description:
        "Available for freelancing projects—specializing in creating scalable and efficient mobile solutions.",
      icon: "💼",
    },
    {
      title: "Trading App Development",
      description:
        "Building robust and feature-rich trading applications tailored to meet specific client requirements.",
      icon: "📊",
    },
    {
      title: "Custom Mobile Solutions",
      description:
        "Transforming ideas into reality with custom-built apps tailored to your unique needs and vision.",
      icon: "🔧",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "1000px",
          margin: "auto",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>My Services</h1>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "20px" }}>
          Offering a range of services to help you achieve your goals. From
          mobile app development to freelancing solutions, I'm here to make your
          vision a reality!
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {serviceList.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "10px" }}>
                {service.icon}
              </div>
              <h3 style={{ color: "#333" }}>{service.title}</h3>
              <p style={{ color: "#555" }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
