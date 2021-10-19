import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
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
  }
}
