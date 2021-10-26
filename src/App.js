import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Clock from './components/Clock';
import Header from './components/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="bg-dark min-vh-100 d-flex flex-column justify-content-center pt-5">
          <div className="container-md">
            <div className="row mx-0 justify-content-center">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/calculator">
                  <Calculator />
                  <Clock updateEveryNSeconds={1} />
                </Route>
                <Route path="/quote">
                  <Quote />
                </Route>
                <Route path="*">Hello from error</Route>
              </Switch>
            </div>
          </div>
        </main>
      </>
    );
  }
}
