import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Form from "./Components/Form"
import { Provider } from "./Context/Feedback"
import Stats from "./Components/Stats"
import FeedbackList from "./Components/FeedbackList"
import About from "./Pages/About"
import AboutLink from "./Components/AboutLink"

function App() {
  return (
    <Provider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <div className='container'>
                  <Form />
                  <Stats />
                  <FeedbackList />
                </div>
                <AboutLink />
              </>
            }
          ></Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </Provider>
  )
}
export default App
