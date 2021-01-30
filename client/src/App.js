import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from './utils/GlobalState';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import CreateItinerary from "./components/CreateItinerary/CreateItinerary";
import Summary from "./components/Summary/Summary";

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
        <div>
          <StoreProvider>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/create" component={CreateItinerary} />
              </Switch>
            </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;