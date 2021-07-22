import { useState } from "react";
import "./styles.css";

var genre = ["Novels", "JavaScript", "Fiction"];

var books = {
  Novels: ["Revolution 2020", "The Girl in the Window"],
  JavaScript: ["Eloquent JavaScript"],
  Fiction: ["Harry Potter"]
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
      <div id="books">
        <h1>Book Recommendation</h1>
      </div>

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
                  fontFamily: "cursive",
                  fontSize: "2rem"
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
