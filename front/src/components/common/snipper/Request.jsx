import React from "react";
import { WhisperSpinner } from "react-spinners-kit";

export default function Reques() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
      }}
    >
      <WhisperSpinner size={100} color="white" loading />
    </div>
  );
}
