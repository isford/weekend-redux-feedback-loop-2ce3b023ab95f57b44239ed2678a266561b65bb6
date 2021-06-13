import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router, Link, useHistory } from 'react-router-dom';

import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Header from '../Header/Header'



function App() {

  return (
    <Router>
      <div className='App'>

      <Header />

        <Route path="/" exact>
          <Feeling />
        </Route>

        <Route path="/understanding">
          <Understanding />
        </Route>

        <Route path="/supported">
          <Supported />
        </Route>

        <Route path="/comments">
          <Comments />
        </Route>

        <Route path="/review">
          <Review />
        </Route>
      </div>
    </Router>
  );
}

export default App;
