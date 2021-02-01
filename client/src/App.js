import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from './utils/GlobalState';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Donate from "./pages/Donate";
import Nav from "./components/Nav";
import CreateItinerary from "./components/CreateItinerary/CreateItinerary"
import Create from './components/Create-activity'
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

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function App() {
  const [ latitude, setLatitude ] = useState('')
  const [ longitude, setLongitude] = useState('')
  // setLatitude('-19.00')
  
  return (

    <ApolloProvider client={client}>
      <Router>
      <Elements stripe={stripePromise}>
      <StoreProvider>
        <div>
          <StoreProvider>
              <Nav />
              <Switch>
              
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/donate" component={Donate} />
                <Route path="/create">
                  <CreateItinerary setLatitude={setLatitude} setLongitude={setLongitude} />
                </Route>
                <Route exact path="/activity" component={Create} />
                <Route path="/summary">
                  <Summary latitude={latitude} longitude={longitude}/>
                </Route>
               
              </Switch>
            </StoreProvider>

        </div>
      </StoreProvider>
      </Elements>
      </Router>
    </ApolloProvider>
  );
}

export default App;