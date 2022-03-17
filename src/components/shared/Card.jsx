import React, { Children } from "react";

function Card({ children, reverse }) {
  return (
    <div className={`card ${reverse && "reverse"}`}>{children}</div>
    //above && means if reverse then class reverse
  );
}

Card.defaultProps = {
  reverse: false,
};
export default Card;
