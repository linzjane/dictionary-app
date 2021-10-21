import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`search for ${keyword}`);
  }
  function handlKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <p>What word would you like to look up?</p>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="search for a word"
          onChange={handlKeywordChange}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
