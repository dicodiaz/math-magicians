import { useEffect, useState } from 'react';

const Quote = () => {
  const [mathQuoteList, setMathQuoteList] = useState(
    JSON.parse(localStorage.getItem('mathQuoteList')),
  );
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const fetchMathQuoteList = async () => {
      if (mathQuoteList) {
        setIndex(Math.floor(Math.random() * mathQuoteList.quotes.length));
      } else {
        const response = await fetch('https://moldovean.github.io/apps/quote/json/quotes.json');
        const data = await response.json();
        setMathQuoteList(data);
        localStorage.setItem('mathQuoteList', JSON.stringify(data));
      }
    };
    fetchMathQuoteList();
  }, [mathQuoteList]);

  if (!mathQuoteList || !index) return null;

  const { quotes } = mathQuoteList;
  const { quote, author } = quotes[index];

  const rollIndex = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * quotes.length);
    } while (index === randomNumber);
    setIndex(randomNumber);
  };

  return (
    <div key={index} className="text-white col-9">
      <p className="lead fs-2">
        {quote} - {author}
      </p>
      <button type="button" className="btn btn-primary" onClick={() => rollIndex()}>
        Get another one
      </button>
    </div>
  );
};

export default Quote;
