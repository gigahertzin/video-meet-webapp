import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LinkGenerate from './components/LinkGenerate';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Login from './components/login';
import SignUp from './components/SignUp';

function App() {
  console.log(localStorage.getItem('email')!== null );
  let res = localStorage.getItem('email') !== null;
  const [islogin, setIslogin] = useState(res);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`/`}><Header setIslogin={setIslogin} islogin={islogin}/><MainBody setIslogin={setIslogin} islogin={islogin} /></Route>
          <Route exact path={`/login`}><Login  setIslogin={setIslogin} islogin={islogin}/></Route>
          <Route exact path={`/signup`}><SignUp setIslogin={setIslogin} islogin={islogin} /></Route>
        </Switch>
      </Router>

    </div>
  );
}

//index---------
// <Header />
//  <MainBody />

export default App;
