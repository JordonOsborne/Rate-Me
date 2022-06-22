import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./Shared/Card"
import Button from "./Shared/Button"
import Feedback from "../Context/Feedback"
function Form() {
  const [comments, setComments] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")
  const [rating, setRating] = useState(null)

  const { addFeedback, editForm, updateFeedback } = useContext(Feedback)

  useEffect(() => {
    if (editForm.edit === true) {
      setIsDisabled(false)
      setRating(editForm.item.rating)
      setComments(editForm.item.comments)
    }
  }, [editForm])

  const changeRating = (e) => {
    setIsDisabled(false)
    if (e.currentTarget.getAttribute("value") === rating) {
      setRating(null)
    }
    setRating(+e.currentTarget.getAttribute("value"))
  }

  const changeComment = (e) => {
    setComments(e.target.value)
  }

  const validateForm = (e) => {
    e.preventDefault()
    let submitComments = comments
    if (rating === null) {
      setErrorMessage("Please select a rating prior to submitting.")
    }
    if (submitComments.trim().length === 0) {
      submitComments = null
    }
    const newFeedback = {
      rating,
      comments: submitComments,
    }
    if (editForm.edit === true) {
      updateFeedback(editForm.item.id, newFeedback)
    } else {
      addFeedback(newFeedback)
    }
    setErrorMessage("")
    setComments("")
    setIsDisabled(true)
    setRating(null)
  }
  return (
    <Card>
      <form onSubmit={validateForm}>
        <h2>How would you rate your experience?</h2>
        <RatingSelect select={changeRating} rating={rating} />
        {errorMessage && <p className='error'>{errorMessage}</p>}
        <div className='input-group'>
          <textarea
            name='Comments'
            id='Comments'
            rows='5'
            placeholder='Write a review . . .'
            value={comments}
            onChange={changeComment}
          ></textarea>
        </div>
        <Button type='submit' isDisabled={isDisabled}>
          Submit
        </Button>
      </form>
    </Card>
  )
}
export default Form
