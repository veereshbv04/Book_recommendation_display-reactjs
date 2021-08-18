import { useState } from "react";
import "./styles.css";

var genre = ["Hiphop", "Classical", "Pop"];

var books = {
  Hiphop: [
    "Eminen (US) [5/5]",
    "KanyeWest (SEOUL) [3/5]",
    "Tupac Shakur (US)[4/5]",
    "Lil Wayne (BRAZIL)[5/5]",
    "Jay-Z [5/5]"
  ],
  Classical: [
    "M S Subbulakshmi(INDIA) [5/5]",
    "Pandit Bhimsen Joshi (INDIA)[4/5]",
    "Bade Ghulam Ali Khan (INDIA) [5/5]",
    "Lata Mangeshkar (INDIA) [4/5]"
  ],
  Pop: [
    "Ariana Grande (US) [4/5]",
    "Lady Gaga (US) [5/5]",
    "Beyonce (US) [5/5]",
    "Taylor Swift(US) [4/5]"
  ]
};

export default function App() {
  const [recommend, setRecommend] = useState([]);

  function onClickHandler(item) {
    var recommend = books[item];
    setRecommend(recommend);
    console.log(recommend);
  }

  return (
    <div className="App">
      <h1>Musicians Recommendation</h1>
      <h2 style={{ fontSize: "medium", fontStyle: "1rem" }}>
        Select a genre to,so that I can recommend Musicians{" "}
      </h2>
      <h2>
        {genre.map((item) => {
          return (
            <span
              onClick={() => onClickHandler(item)}
              id="genre"
              keys={item}
              style={{ padding: "1rem", cursor: "pointer" }}
            >
              {item}
            </span>
          );
        })}
      </h2>
      {<hr />}
      <div>
        <ul>
          {recommend.map((item) => {
            return (
              <li
                style={{
                  listStyleType: "none",
                  padding: "1rem",
                  borderWidth: "1rem",
                  backgroundColor: "blue",
                  margin: "1rem",
                  color: "aqua"
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
