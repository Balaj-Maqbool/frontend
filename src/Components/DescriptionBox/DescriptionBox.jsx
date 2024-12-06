import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className=" descriptionBox-nav-box"> Description </div>
        <div className="descriptionBox-nav-box fade "> Reviews (110) </div>
      </div>
      <div className="descriptionBox-description">
        <p>
          Any Static text Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut nulla pariatur illo harum ullam eum aliquid, corrupti aperiam
          quod, repellat neque omnis enim placeat sapiente rem sint excepturi
          nisi dolorum?
        </p>

        <p>
          another text.... Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ad necessitatibus accusamus at libero fugiat nihil, eos, sint
          obcaecati, pariatur earum in eius quod quaerat repudiandae dolor cum
          suscipit reiciendis blanditiis!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
