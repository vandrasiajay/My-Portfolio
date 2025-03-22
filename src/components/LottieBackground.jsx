import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/tech-animation.json"; // Correct path

const LottieBackground = () => {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieBackground;
