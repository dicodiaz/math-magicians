import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Calculate from './pages/Calculate';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Header />
    <main className="bg-dark min-vh-100 d-flex flex-column justify-content-center pt-5">
      <div className="container-md">
        <div className="row mx-0 justify-content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calculate" element={<Calculate />} />
            <Route path="quote" element={<Quote />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </main>
  </>
);

export default App;
