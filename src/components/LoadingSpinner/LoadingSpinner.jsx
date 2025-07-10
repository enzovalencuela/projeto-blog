import "./LoadingSpinner.css";
import { Waveform } from "ldrs/react";
import "ldrs/react/Waveform.css";

function LoadingSpinner() {
  return (
    <div className="d-flex al-center jc-center loading-overlay-container">
      <Waveform size="35" stroke="3.5" speed="1" color="black" />
    </div>
  );
}

export default LoadingSpinner;
