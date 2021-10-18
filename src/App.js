import React from 'react';
import './App.css';
import Home from './Components/pages/HomePage/Home';
import Services from './Components/pages/Services/Services';
import Products from './Components/pages/Products/Products';
import Doctors from './Components/pages/Doctors/Doctors';
import SignUp from './Components/pages/SignUp/SignUp';
import SignIn from './Components/pages/SignIn/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/pages/Footer/Footer';
import Pricing from './Components/Pricing';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route path='/products'>
          <Products></Products>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/pricing'>
          <Pricing></Pricing>
        </Route>
        <Route path='/doctors'>
          <Doctors></Doctors>
        </Route>
        <Route path='/sign-in'>
          <SignIn></SignIn>
        </Route>
        <Route path='/sign-up'>
          <SignUp></SignUp>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;