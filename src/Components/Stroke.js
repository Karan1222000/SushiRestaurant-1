import React from "react";
import './Stroke.css'
const StrokeDesign = () => {
    return (
        <>
      <svg className="stroke" width="80" height="30">
        {/* <line x1="50" y1="50" x2="150" y2="150"
        stroke="black" strokeWidth="1" /> */}
        <path fill="none" stroke="white" 
        stroke-miterlimit="10" 
        d="M 10 20 L 40 30 L 70 20 10"></path>
        <path fill="none" stroke="white" 
        stroke-miterlimit="10" 
        d="M 10 30 L 40 20 L 70 30 10"></path>
      </svg>
     
      </>
    );
  };
  
  export default StrokeDesign;