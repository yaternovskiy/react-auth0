import React from 'react';
import {Route} from 'react-router-dom'

import {Home} from './Home'
import {Profile} from './Profile'

import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Home} />
      <Route path='/profile' component={Profile}/>
    </div>
  );
}

export default App;
