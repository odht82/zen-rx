import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/HomePage/Home";
import Services from "./Components/pages/Services/Services";
import Products from "./Components/pages/Products/Products";
import Doctors from "./Components/pages/Doctors/Doctors";
import SignUp from "./Components/pages/SignUp/SignUp";
import SignIn from "./Components/pages/SignIn/SignIn";
import Navbar from "./Components/pages/Shared/Navbar";
import Footer from "./Components/pages/Footer/Footer";
import Pricing from "./Components/Pricing";
import NotFound from "./Components/pages/NotFound/NotFound";
import PrivateRoute from './Components/pages/PrivateRoute/PrivateRoute';
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/products">
              <Products></Products>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/pricing/">
              <Pricing></Pricing>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/sign-in">
              <SignIn></SignIn>
            </Route>
            <Route path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;