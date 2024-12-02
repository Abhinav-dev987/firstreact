import React from "react";

export default function Card(props) {
  const { title, sirname } = props;
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
          alt="A descriptive text"
          style={{ width: "300px", height: "auto" }}
        />
        <h1 style={{ color: "white", marginLeft: 10 }}>{title}</h1>
        <h1 style={{ color: "white", marginLeft: 10 }}>{sirname}</h1>
      </div>
    </div>
  );
}
