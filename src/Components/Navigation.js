import React from "react";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav-list">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <input className="nav-input" placeholder="search" />
        <button class="button-17" style={{ height: "30px" }}>
          search
        </button>
      </div>
    </div>
  );
};

export default Navigation;
