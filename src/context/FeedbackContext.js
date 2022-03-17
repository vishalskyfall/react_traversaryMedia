import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([

  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
      item :{},
      edit : false
  });
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure, Delete ???")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]); //for adding at front
  };

const editFeedback=(item)=>{
setFeedbackEdit({
    item,
    edit:true
})
}

const updateFeedback = (id, updItem)=>{
setFeedback(feedback.map((item)=>item.id===id?{...item,...updItem}:item))
}


  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
 export default FeedbackContext;