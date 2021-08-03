import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "❤️": "Red Heart",
  "🥺": "Pleading Face",
  "✨": "Sparkles",
  "🙄": "Face with Rolling Eyes",
  "😜": "Winking Face with Tongue",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have it in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 id="heading"> Emoji Finder </h1>

      <input
        onChange={emojiInputHandler}
        placeholder="Put an emoji here to know the meaning....."
      ></input>

      <h2>Meaning of Emoji :- {meaning}</h2>

      <h3 style={{ marginTop: "50px" }}>
        {" "}
        emojis We Know <span></span>👇{" "}
      </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
