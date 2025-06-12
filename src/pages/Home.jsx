import welcomeMessages from '../data/welcomeMessages';

const Home = () => (
  <div className="text-white pt-5">
    <h1 className="display-1 mb-3">Welcome to our page!</h1>
    {welcomeMessages.map(({ id, text }) => (
      <p key={id} className="lead">
        {text}
      </p>
    ))}
  </div>
);

export default Home;
