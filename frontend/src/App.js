import React from 'react';
import './App.css';
import Home from "./Views/Home";
import Button from './Views/Button';
import Form from "./Views/Form";
import Message from "./Views/Message";
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
                <Route exact path="/message">
                    <Message/>
                </Route>
            </Switch>
      </Router>
  );
}

export default App;
