import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Calculate from './pages/Calculate';
import Home from './pages/Home';
import MathQuotes from './pages/MathQuotes';

const App = () => (
  <>
    <Header />
    <main className="bg-dark min-vh-100 d-flex align-items-center">
      <div className="container-md">
        <div className="row mx-0 g-0 justify-content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calculator" element={<Calculate />} />
            <Route path="math-quotes" element={<MathQuotes />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </main>
  </>
);

export default App;
