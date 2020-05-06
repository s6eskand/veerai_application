import React from 'react';
import './App.css';
import Home from "./Views/Home";
import Button from './Views/Button';
import Form from "./Views/Form";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/button">
                    <Button/>
                </Route>
                <Route exact path="/form">
                    <Form/>
                </Route>
            </Switch>
      </Router>
  );
}

export default App;
