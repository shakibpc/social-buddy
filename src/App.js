import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import AllPosts from './Component/AllPosts/AllPosts';
import PostDetails from './Component/PostDetails/PostDetails';
import NotMatch from './Component/NotMatch/NotMatch';

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <AllPosts></AllPosts>
          </Route>
          <Route path="/posts">
          <AllPosts></AllPosts>
        </Route>
        <Route path="/post/:id">
          <PostDetails></PostDetails>
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;