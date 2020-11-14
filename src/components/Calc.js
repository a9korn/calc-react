import React from "react"
import { useState } from 'react'
import CalcButton from "./CalcButton"

const Calc = () => {
  const [display,setDisplay] = useState(0)

  const onClickCalcButton = (num) => {
    switch (num) {
      case "clear":
        setDisplay(0)
        break;
      case "+":
        setDisplay(display+"+")
        break
      case "=":
        const result = eval(display)
        setDisplay(result.toString())
        break
      default:
        setDisplay(display+num)
    }
  }

  return (
    <>
    <h2>Calc</h2>
      <table>
        <tbody>
        <tr>
          <td colSpan={4}><input readOnly={true} value={display} style={{width:"100%",height:"30px",padding:0,margin:0}}/></td>
        </tr>
        <tr>
          <td><CalcButton num={7} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={8} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={9} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={"+"} onClick={onClickCalcButton}/></td>
        </tr>
        <tr>
          <td><CalcButton num={4} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={5} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={6} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={"-"} onClick={onClickCalcButton}/></td>
        </tr>
        <tr>
          <td><CalcButton num={1} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={2} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={3} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={"*"} onClick={onClickCalcButton}/></td>
        </tr>
        <tr>
          <td><CalcButton num={"0"} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={"."} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={"="} onClick={onClickCalcButton}/></td>
          <td><CalcButton num={"/"} onClick={onClickCalcButton}/></td>
        </tr>
        <tr>
          <td colSpan={4}><CalcButton num={'clear'} onClick={onClickCalcButton}/></td>
        </tr>
        </tbody>
      </table>
    </>
  );
}

export default Calc