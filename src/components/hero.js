import React from "react";
import Sk from "./sk.jpg"
const Hero = () => {
  return (
    <div className="text-white text-center vh-100 d-flex flex-column justify-content-center align-items-center" id="home">
      <h1 className="display-4 fw-bold">
        I am  <span className="text-primary">Santhosh Kumar K</span>
      </h1>
      <p className="h4 mt-3">I build things for the web</p>
      <div className="mt-4">
      <div
  className="profile-picture mx-auto d-flex justify-content-center align-items-center"
  style={{
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    background: "linear-gradient(to right, #6f42c1, #007bff)",
  }}
>
  <img
    src={Sk}
    alt="Profile"
    className="rounded-circle"
    style={{
      width: "95%",
      height: "95%",
      borderRadius: "50%",
      border: "0.5px solid #181818",
    }}
  />
</div>

      </div>
    </div>
  );
};

export default Hero;
