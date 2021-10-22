import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio}>Listen</a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
