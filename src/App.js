import "./App.css";
import React from "react";

const App = () => {
  return (
    <div>
      <QuoteBox />
    </div>
  );
};

const QuoteBox = () => {
  const quotes = [
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    },
    {
      text: "Knowledge is power.",
      author: "Francis Bacon",
    },
    {
      text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
      author: "Dan Salomon",
    },

    {
      text: "Code is like humor. When you have to explain it, it’s bad.",
      author: " Cory House",
    },
    {
      text: "Simplicity is the soul of efficiency.",
      author: "Austin Freeman",
    },
  ];

  let randomQuoteIndex = Math.floor(Math.random() * 6);
  const [quoteIndex, setQuoteIndex] = React.useState(randomQuoteIndex);
  let tweetHref =
    "https://twitter.com/intent/tweet?text=" +
    quotes[quoteIndex].text +
    " " +
    quotes[quoteIndex].author;

  return (
    <div id="quote-box">
      <span id="title">Random Quote Machine</span>
      <blockquote id="text">
        <em>"{quotes[quoteIndex].text}"</em>{" "}
        <div id="author-wrapper">
          <span id="author">{quotes[quoteIndex].author}</span>
          <div>
            <button id="tweet-button">
              <a href={tweetHref} id="tweet-quote" target="_top">
                Tweet Quote
              </a>
            </button>
            <NewQuote setIndex={setQuoteIndex} index={quoteIndex} />
          </div>
        </div>
      </blockquote>
    </div>
  );
};

const NewQuote = (props) => {
  const handleChange = () => {
    let randomQuoteIndex = 0;
    do {
      randomQuoteIndex = Math.floor(Math.random() * 6);
    } while (randomQuoteIndex === props.index);
    props.setIndex(randomQuoteIndex);
  };

  return (
    <div>
      <button onClick={handleChange} id="new-quote">
        Get New Quote
      </button>
    </div>
  );
};

export default App;
