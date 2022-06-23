import spinner from "../Assets/spinner.gif"
function Loading() {
  return (
    <img
      src={spinner}
      alt='Loading Spinner'
      className='center'
      width='100px'
      height='100px'
    />
  )
}
export default Loading
