import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
