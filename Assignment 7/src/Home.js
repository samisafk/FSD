import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <img src="/img.jpg" alt="pfp" className="home-image" />

      <div className="home-text">
        <h2>Welcome to Our Page</h2>
        <p>Explore our site and learn more about us.</p>
      </div>
    </div>
  );
}

export default Home;
