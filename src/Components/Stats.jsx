import { useContext } from "react"
import Feedback from "../Context/Feedback"

function Stats() {
  const { feedback } = useContext(Feedback)
  const Reviews = feedback.length
  let Sum = feedback.reduce((a, b) => parseInt(a) + parseInt(b.rating), 0)
  const Average = (Sum / Reviews).toFixed(1).replace(/[.,]0$/, "")
  return (
    <div className='feedback-stats'>
      <h4>{Reviews} Reviews</h4>
      {isNaN(Average) ? null : <h4>Average Rating of {Average}</h4>}
    </div>
  )
}
export default Stats
