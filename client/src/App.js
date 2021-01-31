import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from './utils/GlobalState';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import CreateItinerary from "./components/CreateItinerary/CreateItinerary"
import CreateAcitivty from './components/Create-activity'
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
  const [ latitude, setLatitude ] = useState('')
  const [ longitude, setLongitude] = useState('')
  // setLatitude('-19.00')
  
  return (

    <ApolloProvider client={client}>
      <Router>
      <StoreProvider>
        <div>
          <StoreProvider>
              <Nav />
              <Switch>
                <Route path="/create">
                  <CreateItinerary setLatitude={setLatitude} setLongitude={setLongitude} />
                </Route>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/activity" component={Create} />
                <Route  exact path='/createActivity' component={CreateAcitivty}/>
                <Route path="/summary">
                  <Summary latitude={latitude} longitude={longitude}/>
                </Route>
              </Switch>
            </StoreProvider>

        </div>
      </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;