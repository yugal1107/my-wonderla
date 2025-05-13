// src/App.jsx
import React from "react";
import RidesSection from "./components/RidesSection";
import "./index.css"; // Ensure your main CSS (including Tailwind) is imported
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <RidesSection />
      {/* You might have a footer component here */}
    </div>
  );
}

export default App;
