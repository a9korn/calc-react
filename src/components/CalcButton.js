import React from "react"
import "./CalcButton.css"

const CalcButton = ({num, onClick}) => {

  return(
    <button onClick={()=>{onClick(num)}}>{num}</button>
  );
}

export default CalcButton