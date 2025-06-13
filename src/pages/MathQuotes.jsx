import { useEffect, useState } from 'react';

const MathQuotes = () => {
  const [mathQuotes, setMathQuotes] = useState(JSON.parse(localStorage.getItem('mathQuotes')));
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const fetchMathQuotes = async () => {
      if (mathQuotes) {
        setIndex(Math.floor(Math.random() * mathQuotes.length));
      } else {
        const response = await fetch('https://moldovean.github.io/apps/quote/json/quotes.json');
        const { quotes } = await response.json();
        setMathQuotes(quotes);
        localStorage.setItem('mathQuotes', JSON.stringify(quotes));
      }
    };
    fetchMathQuotes();
  }, [mathQuotes]);

  if (!mathQuotes || index === null) {
    return (
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  const { quote, author } = mathQuotes[index];

  const rollIndex = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * mathQuotes.length);
    } while (index === randomNumber);
    setIndex(randomNumber);
  };

  return (
    <div className="text-white col-9 pt-5">
      <div className="min-vh-26">
        <p className="lead">{quote}</p>
        <p>{author}</p>
      </div>
      <button type="button" className="btn btn-primary" onClick={rollIndex}>
        Get another one
      </button>
    </div>
  );
};

export default MathQuotes;
