import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import Feedback from "./Feedback"
import Loading from "./Shared/Loading"
import { default as Context } from "../Context/Feedback"

function FeedbackList() {
  const { feedback, isLoading } = useContext(Context)
  const feedbackWithComments = feedback.filter(
    (item) => item.comments !== null && item.comments !== undefined
  )
  if (
    !isLoading &&
    (!feedbackWithComments || feedbackWithComments.length === 0)
  ) {
    return <p>No Feedback Found</p>
  }
  return isLoading ? (
    <Loading />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbackWithComments.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedback key={item.id} review={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
