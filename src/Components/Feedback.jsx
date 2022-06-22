import { FaTimes, FaEdit } from "react-icons/fa"
import Card from "./Shared/Card"
import PropTypes from "prop-types"
import { useContext } from "react"
import { default as Context } from "../Context/Feedback"
function Feedback({ review }) {
  const { editFeedback, deleteFeedback } = useContext(Context)
  return (
    <Card>
      <div className='rating-display'>{review.rating}</div>
      <button className='close' onClick={() => editFeedback(review)}>
        <FaEdit color='purple' />
      </button>
      <button className='edit' onClick={() => deleteFeedback(review.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='comments'>{review.comments}</div>
    </Card>
  )
}
Feedback.propTypes = {
  review: PropTypes.object.isRequired,
}

export default Feedback
