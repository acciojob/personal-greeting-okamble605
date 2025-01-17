import React, { useState } from "react";

const GreetingComponent = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    const trimmedName = name.trim();
    if (trimmedName === "") {
      setError("Name cannot be empty.");
      setGreeting("");
    } else {
      setGreeting(`Hello, ${trimmedName}!`);
      setError("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter Your Name</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name..."
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleSubmit}
        style={{ marginLeft: "10px", padding: "10px", fontSize: "16px" }}
      >
        Submit
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {greeting && <h3>{greeting}</h3>}
    </div>
  );
};

export default GreetingComponent;
