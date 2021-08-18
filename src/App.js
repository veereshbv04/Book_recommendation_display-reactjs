import { useState } from "react";
import "./styles.css";

var genre = ["Novels", "JavaScript", "Fiction"];

var books = {
  Novels: [
    "Revolution 2020 [5/5]",
    "The Girls in the Window [3/5]",
    "Life is what you make it [4/5]",
    "Durgastamana [5/5]",
    "Three Mistakes of my Life [5/5]"
  ],
  JavaScript: [
    "Eloquent JavaScript [5/5]",
    "You don't know JS [4/5]",
    "Effective JavaScript [5/5]",
    "Smater Way to learn JS [4/5]"
  ],
  Fiction: [
    "Harry Potter [4/5]",
    "Brave New world [5/5]",
    "The White Tiger [5/5]",
    "The Girl In Room 105 [4/5]"
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
      <h1>Book Recommendation</h1>
      <h2 style={{ fontSize: "medium", fontStyle: "1rem" }}>
        Select a genre to,so that I can recommend Books{" "}
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
