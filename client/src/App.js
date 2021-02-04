import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from './utils/GlobalState';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import CreateItinerary from "./components/CreateItinerary/CreateItinerary"
import CreateActivityContainer from './components/CreateActivity/CreateActivityContainer'
import Summary from "./components/Summary/Summary";
import Footer from "./components/Footer/Footer"
import Map from "./components/Map"
import './App.css'
import Checkout from './components/Donate/Checkout.js';
import Success from './components/Donate/Success.js';
import Canceled from './components/Donate/Canceled.js';



const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      
      <StoreProvider>
        <div>
          <StoreProvider>
              <Nav />
              <Switch>  
               
                <Route path="/success.html">
                  <Success />
                </Route>
                <Route path="/canceled.html">
                  <Canceled />
                </Route>
                <Route path="/donate">
                  <Checkout />
                </Route>           
                <Route exact path ='/create' component={CreateItinerary}></Route>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/itinerary/:id" component={Summary} />
                <Route exact path="/edititinerary/:id" component={CreateItinerary} />
                <Route exact path="/activity" component={CreateActivityContainer} />
                <Route exact path="/map" component={Map} />
              </Switch>
              <Footer/>
            </StoreProvider>
        </div>
      </StoreProvider>
      
      </Router>
    </ApolloProvider>
  );
}
export default App;