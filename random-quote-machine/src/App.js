import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function displayNewQuote () {
  let quote = "";
}

function App() {
  return (
    <wrapper id="quote-box" className="App">
      <header id="text" className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="author">
          ~"author"
        </p>
        <button id='new-quote' text="new" onClick={displayNewQuote}>New Quote</button>
        <a
          id="tweet-quote"
          href="http://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon network="twitter" />
        </a>
      </header>
    </wrapper>
  );
}

export default App;
