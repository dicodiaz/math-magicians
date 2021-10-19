import './App.css';
import Calculator from './components/Calculator';

const App = () => (
  <main className="bg-dark min-vh-100 d-flex flex-column justify-content-center">
    <div className="container-md">
      <div className="row mx-0 justify-content-center">
        <div className="col-md-9">
          <Calculator />
        </div>
      </div>
    </div>
  </main>
);

export default App;
