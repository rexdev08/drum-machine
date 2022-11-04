import Buttons from "./Butttons.jsx"
import style from "../styles/DrumMachine.module.scss"
import { useState } from "react";

const DrumMachine = () => {

  const [value, setValue] = useState(50)
  const [power, setPower] = useState(true)

  const onChangeHandler = (e) => {
    setValue(parseInt(e.currentTarget.value))
  }

  return (
    <div id="drum-machine" className={style.drumMachine}>
      <Buttons volumeNumber={value} power={power}/>
      <div className={style.drumMachine__controls}>
        {/* <div id="power" className={style.drumMachine__power}>
          <button id="on" className={style.drumMachine__on} onClick={()=>setPower(true)}></button>
          <button id="off" className={style.drumMachine__off} onClick={()=>setPower(false)}></button>
        </div> */}
        <span id="display" className={style.drumMachine__display}></span>
        <input className={style.drumMachine__volume} id="volume" type="range" onChange={onChangeHandler} value={value} min={0} max={100} />
      </div>
    </div>
  )

}

export default DrumMachine