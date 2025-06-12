import { Link, useLocation } from 'react-router-dom';
import links from '../data/links';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary fixed-top container-fluid">
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {links.map(({ id, to, text }) => {
              const classNames = ['nav-item', 'nav-link'];
              if (to === pathname) {
                classNames.push('active');
              }

              return (
                <Link key={id} className={classNames.join(' ')} to={to}>
                  <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                    {text}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
