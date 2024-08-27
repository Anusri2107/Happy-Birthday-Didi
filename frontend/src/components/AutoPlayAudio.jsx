import React, { useRef, useEffect } from "react";
import song from "../assets/khoobsurat.mp3";

function AutoPlayAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.error("Autoplay failed:", error);
      }
    };

    playAudio();
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={song} autoPlay loop>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AutoPlayAudio;
