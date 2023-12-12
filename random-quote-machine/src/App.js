import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';



function App() {

  
  let quotes = require('./quotes.json').quotes;
  //console.log(quotes.length);
   
  const [currentQuote, setQuote] = useState({ quote: "quote", author: "author"});

  const twitterLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
  encodeURIComponent('"' + currentQuote.quote + '" ' + currentQuote.author);

  function displayNewQuote () {
    let i = Math.floor(Math.random() * quotes.length);
    setQuote({
      ...currentQuote,
      quote: quotes[i].quote,
      author: quotes[i].author
    });
    
  }
  
  return (
    <div className="App">
      <wrapper id="quote-box" className="App-header">
        <quote id="text">"{currentQuote.quote}"</quote>
        <p id="author">
          - {currentQuote.author}
        </p>
        <div className='buttonWrapper'>  
          <a
            id="tweet-quote"
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon network="twitter" />
          </a>
          <button id='new-quote' text="new" onClick={displayNewQuote}>New Quote</button>
          
        </div>
      </wrapper>
    </div>
  );
}

export default App;
