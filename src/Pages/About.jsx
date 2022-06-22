import Card from "../Components/Shared/Card"
import { Link } from "react-router-dom"
function About() {
  return (
    <Card>
      <div className='about'>
        <h2>About the 'Rate Me' Application</h2>
        <p>
          This application was built using React 18, and allows users to select
          a 1-5 star review and leave comments.
        </p>
        <p>Version 1.0.0</p>
      </div>
      <Link to='/'>Return to Rate Me Application</Link>
    </Card>
  )
}
export default About
