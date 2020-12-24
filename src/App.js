import React, { useState } from "react";
import "./styles.css";

const booksRecommend = {
  Selfhelp: [
    { name: "How to Win Friends and Influence People", rating: "4.2/5" },
    { name: "The Subtle Art of Not Giving a F*ck", rating: "3.9/5" },
    { name: "Rich Dad Poor Dad", rating: "4.1/5" }
  ],
  Novel: [
    {
      name: "The Great Gatsby",
      rating: "3.9/5"
    },
    {
      name: "To Kill a Mockingbird",
      rating: "4.3/5"
    },
    {
      name: "Out of My Mind",
      rating: "4.4/5"
    }
  ],
  Biographies: [
    {
      name: "Steve Jobs",
      rating: "4.1/5"
    },
    {
      name: "Wings of Fire",
      rating: "4.6/5"
    },
    {
      name: "Long Walk to Freedom",
      rating: "4.3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Selfhelp");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>books Recommendation </h1>

      <div>
        {Object.keys(booksRecommend).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <br />
      <div className="books">
        <ul>
          {booksRecommend[selectedGenre].map((book) => (
            <li key={book.name}>
              {" "}
              <div> {book.name} </div>
              <div> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
