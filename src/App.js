import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/post_details/:postId">
          <PostDetails></PostDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
