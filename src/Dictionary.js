import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}
