import React, { useContext, useState } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function Feedback({ item }) {
  //state
  // const [rating, setRating]=useState(7);//anything inside will be default for something here its rating
  // //same for text
  // const [text, setText]=useState('Example of an feedback item');
  //  const handleClick=()=>{
  //    setRating(9); //usually these are mutable things so we have to set like these to change
  //  }

  const {editFeedback, deleteFeedback} = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}><FaEdit color="purple"/></button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>set</button> */}
    </Card>
  );
}

export default Feedback;
