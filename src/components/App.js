import React, { useState } from "react";

const GreetingComponent = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value.trim());
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter Your Name</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name..."
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <h3 style={{ marginTop: "10px" }}>
        {name ? `Hello, ${name}!` : ""}
      </h3>
    </div>
  );
};

export default GreetingComponent;
