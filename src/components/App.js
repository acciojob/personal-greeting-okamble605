import React, { useState } from "react";

const GreetingApp = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter your name:</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name.trim() ? `Hello, ${name}!` : ""}</p>
    </div>
  );
};

export default GreetingApp;
