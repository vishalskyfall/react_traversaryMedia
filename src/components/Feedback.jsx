import React, { useState } from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function Feedback({ item, handleDelete }) {
  //state
  // const [rating, setRating]=useState(7);//anything inside will be default for something here its rating
  // //same for text
  // const [text, setText]=useState('Example of an feedback item');
  //  const handleClick=()=>{
  //    setRating(9); //usually these are mutable things so we have to set like these to change
  //  }

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>set</button> */}
    </Card>
  );
}

export default Feedback;
