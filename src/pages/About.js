import React from "react";

const About = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        lineHeight: "1.6",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "100%",
          margin: "auto",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={require("../images/ronadlo I am here.jpg")}
          alt="Tanuj's profile"
          style={{
            borderRadius: "50%",
            marginBottom: "20px",
            width: "150px",
            height: "150px",
          }}
        />
        <h1 style={{ color: "#333" }}>About Abhinav</h1>
        <p style={{ color: "#555", textAlign: "center" }}>
          Hi, I'm Abhinav, a passionate React Native developer with expertise in
          building dynamic mobile applications. I have experience in JavaScript,
          React.js, Git, and Jira, and I'm always eager to learn and explore new
          technologies. Currently, I’m expanding my skills by working on
          exciting projects like trading and Uber-like apps.
        </p>
        <p style={{ color: "#555", textAlign: "center" }}>
          Apart from coding, I enjoy working out and sharing my fitness journey
          through my YouTube channel. Whether it's tackling a challenging
          programming bug or achieving a new personal record at the gym, I
          believe in seizing the day!
        </p>
        <p style={{ color: "#555", textAlign: "center" }}>
          Feel free to connect with me for collaborations, freelancing
          opportunities, or just to chat about tech and fitness!
        </p>
      </div>
    </div>
  );
};

export default About;
