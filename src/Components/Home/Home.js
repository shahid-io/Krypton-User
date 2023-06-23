import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container card">
      <img
        alt="img"
        src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        className="card-image"
      />
      <div className="card-overlay">
        <div className="card-content">
          <h2 className="card-title text-warning">Welcome to Krypton</h2>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus mauris vitae lectus fringilla, vitae lacinia quam feugiat.
            Nunc euismod tellus ac purus varius, id gravida lectus posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
