import React from 'react';
import { IconContext } from 'react-icons';
import { BsStarFill } from 'react-icons/bs';

export default function RatingStars(props) {

  const yellowStars = [...Array(Math.round(props.rating))]
  const darkStars = [...Array(5 - Math.round(props.rating))]

  return (
    <div className='stars-div'>
      {
        yellowStars.map((el) => {
          return (
            <IconContext.Provider value={{ color: "#f5d72f" }}>
              <BsStarFill />
            </IconContext.Provider>
          )
        })
      }
      {
        darkStars.map((el) => {
          return <BsStarFill />
        })
      }
    </div>
  )
}
