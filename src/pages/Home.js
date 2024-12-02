import React from "react";

const Home = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "900px",
          margin: "auto",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>
          Welcome to My Portfolio
        </h1>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "20px" }}>
          Hi, I'm Abhinav , a skilled React Native developer with hands-on
          experience in building impactful applications for diverse industries.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Edureka */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#333" }}>Edureka</h2>
            <p style={{ color: "#555" }}>
              Contributed to building dynamic projects during my tenure at
              Edureka, enhancing user experiences and solving complex technical
              challenges.
            </p>
          </div>

          {/* Shastriye.com */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#333" }}>Shastriye.com</h2>
            <p style={{ color: "#555" }}>
              Built a robust and scalable platform for Shastriye.com, focusing
              on intuitive design and seamless functionality.
            </p>
          </div>

          {/* Fintech App */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#333" }}>Fintech App</h2>
            <p style={{ color: "#555" }}>
              Developed a fintech application with advanced features like secure
              transactions and user-friendly interfaces, tailored to meet client
              needs.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <h3 style={{ color: "#333" }}>Let’s Work Together!</h3>
          <p style={{ color: "#555" }}>
            I specialize in React Native development and am always eager to
            bring innovative ideas to life. Feel free to explore my projects or
            get in touch for collaborations.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#333",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              marginTop: "10px",
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
