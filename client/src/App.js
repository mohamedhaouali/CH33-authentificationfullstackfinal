
import { Switch, Route } from 'react-router-dom';


import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Landpage from './Pages/Landpage/Landpage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Errors from './Pages/Errors/Errors';

import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { currentUser } from './JS/Actions/user';

import PrivateRoute from './Router/PrivateRoute';




function App() {

  const token = localStorage.getItem('token')


  const dispatch = useDispatch()

  // te5dem use effect kan bi token

  useEffect(() => {
    token &&
      dispatch(currentUser())
  }, [dispatch, token]);



  return (
    <div className="App">

      <NavBar />
      <Switch>

        <Route exact path="/" component={Landpage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/*" component={Errors} />

      </Switch>

      <Footer />

    </div >
  );
}

export default App;
