import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="Audio"
      >
        Listen
      </a>
      <span className="Phonetic-Text">{props.phonetic.text}</span>
    </div>
  );
}
