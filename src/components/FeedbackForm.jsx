import React, { useContext, useState, useEffect} from "react";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");
  const handleTextChange = (e) => {
    //event par because we want what is being types
    if (text === "") {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text != "" && text.trim().length <= 10) {
      setMsg("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }
    setText(e.target.value); //
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id,newFeedback);
      }else{
      addFeedback(newFeedback);
      }
      setText("");
    }
  };

const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext);
useEffect(()=>{
  if(feedbackEdit.edit===true){
    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
  }

},[feedbackEdit]) //feedbackEdit par click karsu etli var effect call karse

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Please Rate your service with us. . :</h2>

        {/* input rating radio button */}

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {msg && <div className="msg">{msg}</div>}
    </Card>
  );
}

export default FeedbackForm;
