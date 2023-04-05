import React from "react";
import "./Home.css";
import vid from "../ocean.mp4";
const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <video src={vid} autoPlay loop muted />
        <div className="content">
          <p className="p-home">
            Les Maldives sont un pays tropical de l'océan Indien composé de 26
            atolls en forme d'anneaux comprenant plus de 1 000 îles
            coralliennes. Elles sont réputées pour leurs plages, leurs lagons
          </p>
          <div className="buttons-home">
            <button class="button-17" style={{ backgroundColor: "orange" }}>
              BOOK NOW
            </button>
            <button class="button-17" style={{ color: "orange" }}>
              MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
