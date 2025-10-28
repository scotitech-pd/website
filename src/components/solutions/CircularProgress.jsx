import React from "react";

const CircularProgress = ({ p1, p2, icon }) => {
  const radius = 53;
  const stroke = 2; // Slightly thicker stroke
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset1 = circumference * (1 - p1);
  const strokeDashoffset2 = circumference * (1 - p2);

  return (
    <div className="relative w-52 h-52 mb-5 bg-[#641171]/10 rounded-full">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 120 120"
        className="transform -rotate-90"
      >
        {/* Background Circle */}
        <circle
          stroke="#641171"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="60"
          cy="60"
        />

        {/* Second Progress (e.g. 40%) */}
        <circle
          stroke="#641171"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset2}
          r={normalizedRadius}
          cx="60"
          cy="60"
          className="transition-all duration-500"
        />

        {/* First Progress (e.g. 70%) */}
        <circle
          stroke="#f3e8ff"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset1}
          r={normalizedRadius}
          cx="60"
          cy="60"
          className="transition-all duration-500"
        />
      </svg>

      {/* Center Icon/Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={icon} // Replace with your actual image path
          alt="icon"
          className="w-20 h-20"
        />
      </div>
    </div>
  );
};

export default CircularProgress;
