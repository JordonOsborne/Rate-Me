import { createContext, useState, useEffect } from "react"

const Feedback = createContext()

export const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    getFeedback()
  }, [])

  // GET DATA
  const getFeedback = async () => {
    const response = await fetch("/feedback/")
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // NEW FEEDBACK
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })
    const data = await response.json()
    setFeedback([data, ...feedback])
  }

  // EDIT FEEDBACK
  const [editForm, setEditForm] = useState({ item: {}, edit: false })
  const editFeedback = (item) => {
    setEditForm({ item, edit: true })
  }
  const updateFeedback = async (id, updates) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    })
    const data = await response.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
    setEditForm({ item: {}, edit: false })
  }

  // DELETE FEEDBACK
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" })
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <Feedback.Provider
      value={{
        isLoading,
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
