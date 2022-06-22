import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const Feedback = createContext()

export const Provider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 3,
      comments: "This is from the context.",
    },
  ])

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const [editForm, setEditForm] = useState({ item: {}, edit: false })
  const editFeedback = (item) => {
    setEditForm({ item, edit: true })
  }
  const updateFeedback = (id, updates) => {
    console.log(id, updates)
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updates } : item))
    )
    setEditForm({ item: {}, edit: false })
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <Feedback.Provider
      value={{
        feedback,
        editForm,
        addFeedback,
        editFeedback,
        updateFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </Feedback.Provider>
  )
}
export default Feedback
