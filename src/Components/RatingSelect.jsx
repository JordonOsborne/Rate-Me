import { FaStar } from "react-icons/fa"

function RatingSelect({ select, rating }) {
  return (
    <ul className='rating'>
      <FaStar
        strokeWidth='2rem'
        fill={rating >= 1 ? "currentColor" : "white"}
        fontSize='4rem'
        value='1'
        onClick={select}
      />
      <FaStar
        strokeWidth='2rem'
        fill={rating >= 2 ? "currentColor" : "white"}
        fontSize='4rem'
        value='2'
        onClick={select}
      />
      <FaStar
        strokeWidth='2rem'
        fill={rating >= 3 ? "currentColor" : "white"}
        fontSize='4rem'
        value='3'
        onClick={select}
      />
      <FaStar
        strokeWidth='2rem'
        fill={rating >= 4 ? "currentColor" : "white"}
        fontSize='4rem'
        value='4'
        onClick={select}
      />
      <FaStar
        strokeWidth='2rem'
        fill={rating >= 5 ? "currentColor" : "white"}
        fontSize='4rem'
        value='5'
        onClick={select}
      />
    </ul>
  )
}
export default RatingSelect
