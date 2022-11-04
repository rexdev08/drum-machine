import { useEffect, useState } from "react"
import style from "../styles/Buttons.module.scss"

const Buttons = ({ volumeNumber, power}) => {

  const [display, setDisplay] = useState("")

  

  const playAudio = (e) => {
    if(power){
      const $audioId = e.currentTarget.dataset.key
    const $audio = document.getElementById(`${$audioId}`)
    $audio.volume = parseInt(volumeNumber)/100;
    $audio.currentTime = 0;
    $audio.play()
    setDisplay($audio.parentElement.id)
    }
    
  }


  useEffect(() => {
    
    document.getElementById("display").innerText = display
    
    document.addEventListener("keydown", (e) => {

      const $audioId = e.key.toUpperCase()
      const $audio = document.getElementById(`${$audioId}`)
      if ($audio) {
        $audio.volume = parseInt(volumeNumber)/100;
        $audio.currentTime = 0;
        $audio.play()
        setDisplay($audio.parentElement.id)
      }
      
    })
  },)



  return (
    <div id="buttons" className={style.buttons}>
      <button id="Heater-1" data-key="Q" className={`drum-pad ${style.drumPad}`} onClick={playAudio}>
        <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mpeg" />
        <span>Q</span>
      </button>

      <button id="Heater-2" data-key="W" className={`drum-pad ${style.drumPad}`} onClick={playAudio}>
        <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mpeg" />
        <span>W</span>
      </button>

      <button id="Heater-3" data-key="E" className={`drum-pad ${style.drumPad}`} onClick={playAudio}>
        <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mpeg" />
        <span>E</span>
      </button>

      <button id="Heater-4" data-key="A" className={`drum-pad ${style.drumPad}`} onClick={playAudio}>
        <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mpeg" />
        <span>A</span>
      </button>


      <button id="Clap" data-key="S" className={`drum-pad ${style.drumPad}`} onClick={playAudio}>
        <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mpeg" />
        <span>S</span>
      </button>

      <button id="Open-HH" data-key="D" className={`drum-pad ${style.drumPad}`} onClick={playAudio}>
        <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mpeg" />
        <span>D</span>
      </button>

      <button id="Kick-n-Hat" data-key="Z" className={`drum-pad ${style.drumPad}`} onClick={playAudio}>
        <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mpeg" />
        <span>Z</span>
      </button>

      <button id="kick" data-key="X" className={`drum-pad ${style.drumPad}`} onClick={playAudio}>
        <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mpeg" />
        <span>X</span>
      </button>

      <button id="Closed-HH" data-key="C" className={`drum-pad ${style.drumPad}`} onClick={playAudio}>
        <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mpeg" />
        <span>C</span>
      </button>

    </div>
  )
}


export default Buttons