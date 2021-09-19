import "./styles.css";
import React, { useState } from "react";

var heading = "Inside Out";

const emojiDictionary = {
  "😀": "happy",
  "😣": "tensed",
  "😔": "sad",
  "🤒": "sick",
  "😡": "angry",
  "🤮": "vomit",
  "🥶": "frozen",
  "😱": "shocked",
  "🤑": "rich",
  "😈": "evil"
};
var emojisweknow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState();

  function emojiHandler(event) {
    setMeaning(emojiDictionary[event.target.value]);
    if (meaning === undefined) {
      setMeaning(" not in db");
    }
  }

  function getMeaning(emojii) {
    setMeaning(emojiDictionary[emojii]);
  }

  return (
    <div className="App">
      <h1>{heading}</h1>
      <input onChange={emojiHandler}></input>
      <h1>{meaning}</h1>
      <h1>emojis we know</h1>
      <h1>
        {emojisweknow.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => getMeaning(emoji)}
              style={{ cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </h1>
    </div>
  );
}
