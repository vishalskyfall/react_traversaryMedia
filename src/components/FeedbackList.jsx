import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Feedback from "./Feedback";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet !</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedback key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  //   return (
  //     <div className='feedback-list'>
  //         {feedback.map((item)=>(
  //             <Feedback key={item.id} item={item}
  //             handleDelete={handleDelete}/>

  //         ))}
  //     </div>
  //   )
}

export default FeedbackList;
