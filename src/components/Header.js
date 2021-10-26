import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-secondary fixed-top">
    <div className="container-fluid">
      <span className="navbar-brand text-white">Math Magicians</span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <AiOutlineMenu style={{ color: 'white', fontSize: '25px' }} />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="v-line d-none d-md-block" />
          <li className="nav-item">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="v-line d-none d-md-block" />
          <li className="nav-item">
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
