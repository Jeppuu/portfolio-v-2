import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState<number>(5);
  const [sessionLength, setSessionLength] = useState<number>(25);
  const [timerLabel, setTimerLabel] = useState<string>("Session");
  const [timeLeft, setTimeLeft] = useState<number>(sessionLength * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const beepRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  useEffect(() => {
    let interval: number;

    if (isRunning) {
      interval = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            // Time is up, switch timer and reset time
            if (timerLabel === "Session") {
              setTimerLabel("Break");
              setTimeLeft(breakLength * 60);
            } else {
              setTimerLabel("Session");
              setTimeLeft(sessionLength * 60);
            }
            //play the beep sound
            if (beepRef.current) {
              beepRef.current
                .play()
                .then(() => console.log("Audio played successfully"))
                .catch((error) =>
                  console.error("Error playing audio: ", error)
                );
            }

            return prevTime;
          }
        });
      }, 1000);
    }

    return () => window.clearInterval(interval);
  }, [isRunning, timerLabel, sessionLength, breakLength]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimerLabel("Session");
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);

    //reset audio
    if (beepRef.current) {
      beepRef.current.pause();
      beepRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <h1 className="title">Pomodoro timer</h1>
      <div className="container">
        <div className="timer-tile">
          <h2 id="timer-label">{timerLabel}</h2>
          {/* should display in mm:ss format */}
          <h1 id="time-left">{`${Math.floor(timeLeft / 60)
            .toString()
            .padStart(2, "0")}:${(timeLeft % 60)
            .toString()
            .padStart(2, "0")}`}</h1>
          <button id="start_stop" onClick={handleStartStop}>
            {isRunning ? "stop" : "start"}
          </button>
          <button id="reset" onClick={handleReset}>
            reset
          </button>
          <audio id="beep" ref={beepRef} src="/beep.mp3">
            Audio element not supported.
          </audio>
        </div>

        {/* session time */}
        <div className="session-tile">
          <h2 id="session-label">Session length</h2>
          <p id="session-length">{sessionLength}</p>
          <button
            id="session-decrement"
            onClick={() =>
              setSessionLength(sessionLength > 1 ? sessionLength - 1 : 1)
            }
          >
            -
          </button>
          <button
            id="session-increment"
            onClick={() =>
              setSessionLength(sessionLength <= 59 ? sessionLength + 1 : 60)
            }
          >
            +
          </button>
        </div>

        {/* break time */}
        <div className="break-tile">
          <h2 id="break-label">Break length</h2>
          <p id="break-length">{breakLength}</p>
          <button
            id="break-decrement"
            onClick={() =>
              setBreakLength(breakLength > 1 ? breakLength - 1 : 1)
            }
          >
            -
          </button>
          <button
            id="break-increment"
            onClick={() =>
              setBreakLength(breakLength <= 59 ? breakLength + 1 : 60)
            }
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
